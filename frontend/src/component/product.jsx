import { useEffect, useState } from "react"
import axios from "axios";
import "./product.css"

export const Product = ()=>{
    const [data,setData] = useState([])
    const [page,setPage]=useState(1)
    const pageHandle = (val)=>{
      
       setPage(page+val)
    }
    useEffect(()=>{
      getData()
    },[page])
    console.log(data)
    function getData(){
        axios.get(`http://localhost:5700/products?page=${page}`).then((res)=>setData(res.data.product))
    }
    return(
    <div>
              <div className="container">
            {
                data.map((e)=>{
                    return(
                        
                        <div style={{"border":"1px solid black" }}>
                        <p>{e.title}</p>
                        <img src={e.img}></img>
                        <p>{e.price}</p>
                        <p>{e.gender}</p>
                        <p>{e.size}</p>
                        </div>
                    )
                })
            }
            
        </div>
        <button onClick={()=>{pageHandle(-1)}}>previous</button>
            <button  onClick={()=>{pageHandle(1)}}>next</button>
    </div>
        

    )
}