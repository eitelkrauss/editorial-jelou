import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../features/mylist/myListSlice"

export default function MyList () {
    const myList = useSelector((state) => state.myList.value)
    const dispatch = useDispatch()

    return <aside className="h-screen sticky top-0 border-2 p-2 border-slate-400 hidden md:block md:min-w-[300px] md:w-[30%]">
        <h2 className="text-2xl font-semibold">Mi Lista</h2>
        <ul className="mt-4 flex gap-2 flex-wrap">
            {Object.entries(myList)
                .map(([key, value]) => <li onClick={() => dispatch(removeItem(value))} style={{backgroundImage: `url(${value.cover})`}} className="hover:cursor-pointer bg-contain bg-no-repeat w-24 h-36" key={value.ISBN}></li>)}
        </ul>
    </aside>
}