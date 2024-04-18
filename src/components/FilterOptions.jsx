export default function FilterOptions({ options, selectedGenre, onSelectedGenre, selectedAuthor, onSelectedAuthor }) {
    return <div className="flex gap-4 my-4 flex-wrap">
        <span className="max-w-sm">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="genre">Genero</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedGenre} onChange={(e) => onSelectedGenre(e.target.value)} name="genre" id="genre" defaultValue={'Todos'}>
                {Array.from(options.genres).map((genre) => <option value={genre} key={genre}>{genre}</option>)}
            </select>
        </span>
        <span className="max-w-sm">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Autor</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="author" id="author" value={selectedAuthor} onChange={(e) => onSelectedAuthor(e.target.value)}>
                {Array.from(options.authors).map((author) => <option value={author} key={author}>{author}</option>)}
            </select>
        </span>
    </div>
}