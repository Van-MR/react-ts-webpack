import React , { createContext, useReducer }from 'react';
import { IState, IAction } from './interfaces'


const initialState: IState = {
  episodes: [],
  favorites: []
}

export const Store = createContext<IState | any>(initialState);

const  reducer =  (state: IState,action: IAction): IState => {
   switch (action.type){
      case 'FETCH_DATA':
        return {
          ...state,
          episodes: action.payload
        }
       case 'ADD_TO_LIKE':
          let Tems = [...state.episodes];
          let Index:number =  Tems.findIndex(item => item.id === action.payload.id)

          if(Index>-1) {
            Tems[Index].like = !Tems[Index].like;
          }
          
          return {
            ...state,
            episodes: Tems,
            favorites: [...state.favorites,action.payload]
          }
      case "REMOVE_FROM_LIKE":
          let tempsEpisods = [...state.episodes];
          let temFavorites = state.favorites.filter(episode => episode.id !== action.payload.id);
          let Index1:number =  state.episodes.findIndex(item => item.id === action.payload.id);
          tempsEpisods[Index1].like = !tempsEpisods[Index1].like;

          return {
            ...state,
            episodes: tempsEpisods,
            favorites: temFavorites
          }
      default :
        return state
   }
}

export const StoreProvider = (props: any): JSX.Element => {
      const [state,dispatch] = useReducer(reducer,initialState);
      return <Store.Provider value={{state,dispatch}}>{props.children}</Store.Provider>
  }
