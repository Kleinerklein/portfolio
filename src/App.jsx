
import { BrowserRouter } from "react-router-dom"
import  { Navbar, Tech, Welcome   } from "./components"



function App() {
 

  return (
   <BrowserRouter>
    <div className='relative z-0 bg-lime-500'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Welcome />
        </div>
        <Tech />
        
    </div>

   </BrowserRouter>
  )
}

export default App
