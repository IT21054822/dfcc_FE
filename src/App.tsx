
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Table from "./Components/Table/Table"
import Form from "./Components/Form/Form"



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Activity' element = {<Table/>}/>
        <Route path='/Form' element = {<Form/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
