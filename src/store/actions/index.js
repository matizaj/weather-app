import weatherApi from '../../api/weatherApi';
import {FETCH_WEATHER} from './types';

export const fetchWeatcher=(term)=>{
   return async (dispatch, getState)=> {
       const response = await weatherApi.get('',{
           params: {
               q: term
           }
       });
       dispatch({
           type: FETCH_WEATHER,
           payload: response.data
       });
   }
}