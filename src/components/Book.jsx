import { useDispatch } from "react-redux"
import { addItem } from "../features/mylist/myListSlice"

export default function Book ({ data }) {
    const dispatch = useDispatch()
    return <li onClick={() => dispatch(addItem(data))} style={{backgroundImage: `url(${data.cover})`}} className="cursor-pointer w-full md:min-w-[200px] md:w-[20%] h-[360px] bg-center bg-cover grow-0 md:min-h-28 shrink-0"></li>
}