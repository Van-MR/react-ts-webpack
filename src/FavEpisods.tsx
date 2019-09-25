import React from 'react';
import Episod from './Episod'
import { IEpisode, IEpisodeProps } from './interfaces'

const FavEpisods = (props: any) => {
  const { favorites, AddToFav }  = props;

  return favorites.map((episode: IEpisode) => {
    return (
      <Episod key={episode.id} episode={episode} AddToFav={AddToFav} />
    )
  })}

export default FavEpisods;
