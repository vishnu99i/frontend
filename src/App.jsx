import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
//import axiosInstance from '../axios/axiosInstance';
import axiosInstance from "./axios/axiosInstance";

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(() => {
    axiosInstance.get("/jokes") //http://localhost:3000/api/jokes
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Fullstack Development</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
