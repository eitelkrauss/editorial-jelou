import { useSelector } from 'react-redux'
import FilterOptions from "./FilterOptions"
import Book from "./Book"
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const CATALOGUE_URL = 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev'

async function fetchCatalogue() {
  const response = await fetch(CATALOGUE_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export default function Catalogue () {
    const [genre, setGenre] = useState('Todos')
    const myList = useSelector(state => state.myList.value)

    const { data, isLoading, error } = useQuery({ queryKey: ['catalogue'], queryFn: fetchCatalogue })

    const genreOptions = useMemo(() => {
      const genres = new Set();
      genres.add('Todos');
      data?.default?.library.forEach((item) => {
        genres.add(item.book.genre);
      });
      return genres;
    }, [data]);


    const booksToRender = useMemo(() => {
      return data?.default?.library
              .filter(item => genre === 'Todos' || item.book.genre == genre)
              .filter(item => !(item.book.ISBN in myList))
    }, [myList, data, genre])

    if (isLoading) return 'Cargando...';

    if (error) return 'Ha ocurrido un error: ' + error.message;

    return <section className="grow p-12">
        <h2 className="text-3xl font-bold">Catalogo</h2>
        <br />
        <FilterOptions options={genreOptions} onSelectedGenre={setGenre} />
        <ul className="flex flex-wrap gap-10">
            {booksToRender.map((item) => <Book key={item.book.ISBN} data={item.book} />)}
        </ul>
    </section>
}