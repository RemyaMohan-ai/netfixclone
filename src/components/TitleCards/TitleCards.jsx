import React, { useEffect, useState, useRef } from 'react'
import "./TitleCards.css"
import card_data from "../../assets/cards/Cards_data"
import {Link} from 'react-router-dom'


const TitleCards = ({title,category}) => {
  console.log("category",category);
  const cardsRef = useRef()
  const [apiData, setapiData] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTlhN2NjNjg1Mzg3MjUyMTY3YWJiNTBlNTA0NWIxYiIsIm5iZiI6MTczOTI4MDg1NS4wNjYsInN1YiI6IjY3YWI1MWQ3NmJlNmFiNmUxMzliOWJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9AxPrFHNowMdgXBQQw4_NiItbhGhfd91Oq3E_ldtUCc'
    }
  };
  

const handWheel = ((event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
})
  useEffect(()=>{
   fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)

    .then(res => res.json())
    .then(res => setapiData(res.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener("wheel",handWheel)
  },[])


  return (
    <div  className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
           return <Link to={`/player/${card.id}`} className="card"key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}
export default TitleCards
