export default function FilterOptions ({ options, selectedGenre, onSelectedGenre }) {
    return <div>
        <label htmlFor="genre">Genero
            <select value={selectedGenre} onChange={(e) => onSelectedGenre(e.target.value)} name="genre" id="genre" defaultValue={'Todos'}>
                {Array.from(options).map((option) => <option value={option} key={option}>{option}</option>)}
            </select>
        </label>
    </div>
}