import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Catalogue from './components/Catalogue'
import MyList from './components/MyList'
import { useDispatch } from 'react-redux';
import { showSidebar } from "./features/sidebar/sidebarSlice"

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <nav className='p-2 flex justify-between sticky top-0 w-full bg-slate-300 h-16 md:hidden'>
        <h2 className='font-bold text-2xl'>Editorial jelou</h2>
        <button className='border border-slate-400 rounded px-2' onClick={() => dispatch(showSidebar())}>Ver Lista</button>
      </nav>
      <div className='md:flex p-4 md:p-12'>
        <MyList />
        <QueryClientProvider client={queryClient}>
          <Catalogue />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
