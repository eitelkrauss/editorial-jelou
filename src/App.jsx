import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Catalogue from './components/Catalogue'
import MyList from './components/MyList'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <nav className='sticky top-0 w-full bg-slate-300 h-16 md:hidden'>Editorial jelou</nav>
      <div className='flex'>
        <MyList />
        <QueryClientProvider client={queryClient}>
          <Catalogue />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
