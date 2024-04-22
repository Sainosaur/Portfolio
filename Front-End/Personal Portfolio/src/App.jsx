import { Routes, Route, useLocation, useNavigate } from 'react-router'
import Home from './components/Home'

function App() {
  const currentPage = useLocation()
  const navigate = useNavigate()

  const activePageClass = 'btn btn-outline'
  const inActivePageClass = 'btn btn-ghost glass'
  return (
    <>
    <div className="navbar bg-base-100">
      <div className='navbar-start'>
        <button className="btn btn-ghost text-xl">Portfolio</button>
        <span className='loading loading-infinity'></span>
      </div>
      <div className='navbar-center'>
        <button className={currentPage.pathname == '/' ? activePageClass : inActivePageClass} onClick={() => navigate('/')}>Home</button>
        <button className={currentPage.pathname == '/projects' ? activePageClass : inActivePageClass} onClick={() => navigate('/projects')} >Projects</button>
        <button className={currentPage.pathname == '/qualifications' ? activePageClass : inActivePageClass}>Qualifications</button>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-circle' onClick={() => window.open("https://github.com/Sainosaur") }>
          <img src="https://static-00.iconduck.com/assets.00/github-outline-icon-512x512-b2pa05gv.png" alt='github' />
        </button>
      </div>
      
    </div>
    <Routes>
      <Route path='/' Component={Home} />
    </Routes>
    </>

  )
}

export default App
