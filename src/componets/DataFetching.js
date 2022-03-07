import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts,seetPosts] = useState({})

    useEffect(()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then(res=>{
            console.log(res);
            seetPosts(res.json());
        })
        .catch(err =>{
            console.log(err);
        })
    })
  return (
     console.log(posts)
  )
}

export default DataFetching