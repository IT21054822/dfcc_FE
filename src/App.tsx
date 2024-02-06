
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Table from "./Components/Table/Table"
import Form from "./Components/Form/Form"
import Analysis from "./Components/Analysis/Analysis"
import Loader from "./Components/Loader/Loader"
import { useEffect, useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";



function App() {
  
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
       setLoading(true)
       setTimeout(()=>{
           setLoading(false)

       },1000)

    },[])
  return (
    <div>
       {
            loading ?
            <ClipLoader
        color={"#F37A24"}
        loading={loading}
        
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
            :
      <BrowserRouter>
      <Navbar/>
     
     
      <Routes>
      
            
        
      <Route path="/" element = {<Login/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Activity' element = {<Table/>}/>
        <Route path='/Form' element = {<Form/>}/>
        <Route path='/Analysis' element = {<Analysis/>}/>

      </Routes>
      
      </BrowserRouter>
      }
    </div>
  )
}

export default App
