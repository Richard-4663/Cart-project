import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'


function App() {

  return (
    <div className="wrapper">
      <div className='container' style={{width: 1200}}>
        <Header />  
        <div className='continuacao bg-light'>
          <Products />
          <Products />
        </div>
      </div>
        
    </div>
  )
}

export default App
