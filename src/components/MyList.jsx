import { useSelector } from "react-redux"

export default function MyList () {
    const myList = useSelector((state) => state.myList.value)

    return <aside className="h-screen sticky top-0 border-2 p-2 border-slate-400 hidden md:block md:min-w-[300px] md:w-[30%]">
        <h2 className="text-2xl">Mi Lista</h2>
        <ul>
            {Object.entries(myList).map(([_, value]) => <li key={value.ISBN}>key: {_}<br/>value:{value.title}</li>)}
        </ul>
    </aside>
}