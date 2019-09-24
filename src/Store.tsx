import React , { createContext, useReducer }from 'react';
import { IState, IActon } from './interfaces'


const initialState: IState = {
  episodes: [],
  favorites: []
}

export const Store = createContext<IState | any>(initialState);

const  reducer =  (state: IState,action: IActon): IState => {
   switch (action.type){
      case 'FETCH_DATA':
        return {
          ...state,
          episodes: action.payload
        }
       case 'ADD_TO_LIKE':
          let Tems = [...state.episodes];
          let Index:number =  Tems.findIndex(item => item.id === action.payload.id)
          console.log(Index);
          if(Index>-1) {
            Tems[Index].like = !Tems[Index].like;
          }

          if(state.favorites.includes(action.payload)){
            let temsFav = state.favorites.filter(item => item.id !== action.payload.id)
            return {
              ...state,
              favorites:temsFav
            }
          }

          return {
            ...state,
            episodes: Tems,
            favorites: [...state.favorites,action.payload]
          }
      default :
        return state
   }
}

export const StoreProvider = (props: any): JSX.Element => {
      const [state,dispatch] = useReducer(reducer,initialState);
      return <Store.Provider value={{state,dispatch}}>{props.children}</Store.Provider>
  }
