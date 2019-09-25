import React, { useState, useEffect, useContext } from 'react';
import './App.scss';
import Header from './Header';
import EpisodesList from './EpisodsList';
import FavEpisods from './FavEpisods'
import {  Store } from './Store';
import { IEpisode, IAction, IEpisodeProps } from './interfaces';

const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-6-morty&embed=episodes';

export default function App():JSX.Element {
  const [showFavList,setShowFavList] = useState(false);

  const setShow = (value:boolean) : void => setShowFavList(value);

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

  const AddToFav = (episode: IEpisode):IAction => {
     const episodeInFav = state.favorites.includes(episode);

     if(episodeInFav) {
       return dispatch({
         type: 'REMOVE_FROM_LIKE',
         payload: episode
       })
     }

     return dispatch({
      type: 'ADD_TO_LIKE',
      payload: episode
    })
  }

 const { episodes, favorites } = state;



 const props:IEpisodeProps = {
   episodes,
   favorites,
   AddToFav
 }

  return (
    <React.Fragment>
       <Header favorites={favorites} setShow={setShow}/>
       <section className="episodes-list">
         {  showFavList ? <FavEpisods {...props} /> : <EpisodesList {...props} />}
       </section>
    </React.Fragment>
  )
}
