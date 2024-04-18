import { useSelector } from "react-redux"

export default function MyList () {
    const myList = useSelector((state) => state.myList.value)

    return <aside className="h-screen sticky top-0 border-2 p-2 border-slate-400 hidden md:block md:min-w-[300px] md:w-[30%]">
        <h2 className="text-2xl">Mi Lista</h2>
        <ul className="flex gap-2 flex-wrap">
            {Object.entries(myList).map(([_, value]) => <li style={{backgroundImage: `url(${value.cover})`}} className="cursor-pointer bg-contain bg-no-repeat w-10 h-16" key={value.ISBN}></li>)}
        </ul>
    </aside>
}