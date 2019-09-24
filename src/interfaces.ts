export interface IState {
  episodes: Array<any>;
  favorites: Array<any>;
}


export interface IActon {
  type: string;
  payload: any;
}
