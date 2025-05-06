import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import "./Player.css"
import {useNavigate, useParams} from 'react-router-dom'

export default function Player() {
  const navigate = useNavigate()
  const {id}= useParams()
  const [apiData , setapiData] = useState({
    name:"",
    key:"",
    published_at :"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTlhN2NjNjg1Mzg3MjUyMTY3YWJiNTBlNTA0NWIxYiIsIm5iZiI6MTczOTI4MDg1NS4wNjYsInN1YiI6IjY3YWI1MWQ3NmJlNmFiNmUxMzliOWJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9AxPrFHNowMdgXBQQw4_NiItbhGhfd91Oq3E_ldtUCc'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}frameborder="0" width="90%" height ='90%' title='trailer'allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       
      </div>
    </div>
  )
}
