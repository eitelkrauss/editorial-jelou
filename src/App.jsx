import Catalogue from './components/Catalogue'
import MyList from './components/MyList'


function App() {

  return (
    <>
      <nav className='sticky top-0 w-full bg-slate-300 h-16 md:hidden'>Editorial jelou</nav>
      <div className='flex'>
        <MyList />
        <Catalogue />
      </div>
    </>
  )
}

export default App
