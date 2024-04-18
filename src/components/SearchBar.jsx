export default function SearchBar ({ searchTerm, onSetSearchTerm }) {

    return <input className="block w-full p-4 ps-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={searchTerm} onChange={(e) => onSetSearchTerm(e.target.value)} placeholder="Buscar titulos por nombre..." />
}