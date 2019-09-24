import React, { useEffect, useContext } from 'react';
import './App.scss';
import Header from './Header'
// import List from './List'
import {  Store } from './Store'

const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-6-morty&embed=episodes'

export default function App():JSX.Element {
  const {state,dispatch} = useContext(Store);

  useEffect(() => {
      fetchData(URL)
  },[])

  const fetchData = (url:string) => {
    fetch(url)
       .then(response => response.json())
       .then(responsejson => {
          let data = responsejson._embedded.episodes.map((item:any) => {
            return {...item,like: false}
          });


          console.log(data)

          dispatch({
            type: 'FETCH_DATA',
            payload: data
          })
       })
       .catch(error => {
         console.log(error)
       })
  }

  const AddToFav = (episode:any) => {
    console.log(episode);

    dispatch({
      type: 'ADD_TO_LIKE',
      payload: episode
    })
  }

 const { episodes, favorites } = state;
  return (
    <React.Fragment>
       <Header favorites={favorites}/>
       <section className="episodes-list">
         {episodes.map((episode: any) => {
           return (
             <section key={episode.id} className="episode-item">
                <div className="episode-pic">
                  <img  src={episode.image.medium} alt={`ricky and morty ${episode.name}`} />
                </div>
                <div className="episode-detail">
                  <section>
                    <div>{episode.name}</div>
                      Season: {episode.season} Number: {episode.number}
                  </section>
                  <div onClick={ () => { AddToFav(episode) }} className="fav">
                     <i className="fas fa-heart" style={episode.like ? {color:'red'} : null}></i>
                  </div>
                </div>
             </section>
           )
         })}
       </section>
    </React.Fragment>
  )
}
