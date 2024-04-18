import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Catalogue from './components/Catalogue'
import MyList from './components/MyList'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <nav className='p-2 flex justify-between sticky top-0 w-full bg-slate-300 h-16 md:hidden'>
        <h2 className='font-bold text-2xl'>Editorial jelou</h2>
        <button>Menu</button>
      </nav>
      <div className='flex p-12'>
        <MyList />
        <QueryClientProvider client={queryClient}>
          <Catalogue />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
