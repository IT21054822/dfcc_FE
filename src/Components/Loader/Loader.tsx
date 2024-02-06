import { useEffect, useState } from 'react'
import './Loader.css'
import App from '../../App';
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
     const[loading,setLoading]=useState(false);
     useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)

        },8000)

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
            <App/>
        }
      
    </div>
  )
}

export default Loader
