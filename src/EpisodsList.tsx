import React from 'react';
import { IEpisode } from './interfaces'
import Episod from './Episod'

const EpisodesList = (props: any) => {
    const { episodes , favorites, AddToFav }  = props;

    return episodes.map((episode: IEpisode) => {
      return (
        <Episod key={episode.id} episode={episode} AddToFav={AddToFav} />
      )
    })}


export default EpisodesList;
