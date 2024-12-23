import { useEffect, useState } from "react";

const FetchAPI = ({api}) =>{
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch(api)
        .then(res=>res.text())
        .then((fetchdata)=>{
            setData(fetchdata)
            console.log(fetchdata);
        }
    )
    .catch((error)=>{
        console.log("Error while fetching: ",error);
        
    })
    },[data])
    return (
        <>
        {data}
        </>
    )
}

export default FetchAPI;