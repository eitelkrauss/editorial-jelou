import { useSelector, useDispatch } from 'react-redux'
import FilterOptions from "./FilterOptions"
import Book from "./Book"
import { useMemo, useRef, useState, useEffect } from 'react'
import { setCatalogue } from '../features/catalogue/catalogueSlice'
const CATALOGUE_URL = 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev'


export default function Catalogue () {
    const [genre, setGenre] = useState('Todos')
    const catalogue = useSelector(state => state.catalogue.value)
    const myList = useSelector(state => state.myList.value)
    
    const dispatch = useDispatch()
    const genreOptions = useRef(new Set())

    console.log("genero elegido: ", genre)

    useEffect(() => {
      fetch(CATALOGUE_URL)
        .then(res => res.json())
        .then(data => {
          genreOptions.current.add('Todos')
          const libraryItems = data.default.library
          libraryItems.forEach((item) => {
            genreOptions.current.add(item.book.genre)
          })
          dispatch(setCatalogue([...data.default.library]))
      })
    }, [])


    const booksToRender = useMemo(() => {
        return catalogue
                .filter(item => genre === 'Todos' || item.book.genre == genre)
                .filter(item => !(item.book.ISBN in myList))
    }, [myList, catalogue, genre])

    return <section className="grow p-12">
        <h2 className="text-3xl font-bold">Catalogo</h2>
        <br />
        <FilterOptions options={genreOptions.current} onSelectedGenre={setGenre} />
        <ul className="flex flex-wrap gap-10">
            {booksToRender.map((item) => <Book key={item.book.ISBN} data={item.book} />)}
        </ul>
    </section>
}