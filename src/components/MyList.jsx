import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../features/mylist/myListSlice"
import { hideSidebar } from "../features/sidebar/sidebarSlice"

export default function MyList () {
    const myList = useSelector((state) => state.myList.value)
    const sidebar = useSelector(state => state.sidebar.value)
    const dispatch = useDispatch()

    return <aside className={"absolute z-10 bg-slate-300 h-screen md:sticky top-0 left-0 rounded-lg p-2 md:p-4 transform md:transform-none transition-transform duration-300 ease-in-out w-[90%] md:min-w-[300px] md:w-[30%] " + (sidebar ? "translate-x-0" : " -translate-x-full")}>
        <span className="flex justify-between">
            <h2 className="text-2xl font-semibold">Mi Lista</h2>    
            <button className="md:hidden text-3xl" onClick={() => dispatch(hideSidebar())}>&times;</button>
        </span>
        {!Object.keys(myList).length 
            ? <p>No tienes libros en tu lista..</p>
            : <ul className="mt-4 flex gap-2 flex-wrap">
                {Object.entries(myList)
                    .map(([key, value]) => (
                    <li 
                        style={{backgroundImage: `url(${value.cover})`}} 
                        className="relative group cursor-pointer bg-contain bg-no-repeat w-24 h-36" 
                        key={value.ISBN}>
                            <button onClick={(event) => { event.stopPropagation(); dispatch(removeItem(value)); }} className="absolute -top-1 -right-1 bg-red-500 text-white px-2 rounded-full z-10 text-lg transition-opacity duration-100 ease-in-out md:opacity-0 md:group-hover:opacity-100">&times;</button>
                    </li>)
                )}
        </ul>}
    </aside>
}