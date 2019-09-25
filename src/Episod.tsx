import React from 'react';
import { IEpisode }  from './interfaces'


const Episod = (props:any) => {

   return (
     <section key={props.episode.id} className="episode-item">
        <div className="episode-pic">
          <img  src={props.episode.image.medium} alt={`ricky and morty ${props.episode.name}`} />
        </div>
        <div className="episode-detail">
          <section>
            <div>{props.episode.name}</div>
              Season: {props.episode.season} Number: {props.episode.number}
          </section>
          <div onClick={ () => { props.AddToFav(props.episode) }} className="fav">
             <i className="fas fa-heart" style={props.episode.like ? {color:'red'} : null}></i>
          </div>
        </div>
     </section>
   )
}

export default Episod;
