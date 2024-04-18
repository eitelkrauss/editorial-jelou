import { useSelector } from 'react-redux'
import FilterOptions from "./FilterOptions"
import Book from "./Book"
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import SearchBar from './SearchBar'

const CATALOGUE_URL = 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev'

async function fetchCatalogue() {
  const response = await fetch(CATALOGUE_URL);
  if (!response.ok) {
    throw new Error('Error en respuesta...');
  }
  return response.json();
}

export default function Catalogue () {
    const [genre, setGenre] = useState('Todos')
    const [author, setAuthor] = useState('Todos')
    const [searchTerm, setSearchTerm] = useState('')

    const myList = useSelector(state => state.myList.value)

    const { data, isLoading, error } = useQuery({ queryKey: ['catalogue'], queryFn: fetchCatalogue })

    const filterOptions = useMemo(() => {
      const genres = new Set();
      const authors = new Set();
      genres.add('Todos');
      authors.add('Todos')
      data?.default?.library.forEach((item) => {
        genres.add(item.book.genre);
        authors.add(item.book.author.name);
      });
      return { genres, authors };
    }, [data]);


    const booksToRender = useMemo(() => {
      const regex = new RegExp(searchTerm, 'i');
      return data?.default?.library
              .filter(item => genre === 'Todos' || item.book.genre == genre)
              .filter(item => author === 'Todos' || item.book.author.name == author)
              .filter(item => !(item.book.ISBN in myList))
              .filter(item => searchTerm === '' || item.book.title.match(regex))
    }, [myList, data, genre, author, searchTerm])

    if (isLoading) return 'Cargando...';

    if (error) return 'Ha ocurrido un error: ' + error.message;

    return(
     <section className="grow-0 md:p-12 w-full">
      <div className='sticky top-16 md:top-0 w-full bg-slate-200 p-2'>
        <h2 className="text-3xl font-bold">Catálogo</h2>
        <br />
        <span className='flex flex-wrap'>
          <SearchBar searchTerm={searchTerm} onSetSearchTerm={setSearchTerm} />
          <FilterOptions options={filterOptions} onSelectedGenre={setGenre} onSelectedAuthor={setAuthor} />
        </span>
      </div>
      <ul className="flex flex-wrap justify-center gap-10 mt-4">
          {!booksToRender.length ? <h4 className='font-bold text-xl'>No hay más resultados..</h4> : booksToRender.map((item) => <Book key={item.book.ISBN} data={item.book} />)}
      </ul>
    </section>
    )
}