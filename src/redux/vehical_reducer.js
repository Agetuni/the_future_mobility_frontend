/* eslint-disable */
import axios from "axios";
import BASE_URL from "../api"; 
const ADD_VEHICAL = 'ADD_VEHICAL';
const REMOVE_VEHICAL = 'REMOVE_VEHICAL';
const GET_VEHICALS = 'GET_VEHICALS';

const initialState = null;

export const vehicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VEHICAL:
      return [...state, action.payload];
    case REMOVE_VEHICAL: {
      // delete product from state
      const newState = state.filter((product) => product.id !== action.payload);
      return newState;
    }
    case GET_VEHICALS:
      return action.payload;
    default:
      return state;
  }
}

export const AddVehicleSlice = (request) => {
  const headers = { 
    'Authorization': JSON.parse(localStorage.getItem('user')).token
};
  return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));    
    const response = await axios.post(`${BASE_URL}api/v1/vehicles`, request,{ headers });
  
    const data = await response;
    dispatch({ type: ADD_VEHICAL, payload: data });
    dispatch({
      type: 'SET_LOADING',
    });
  };
}

export const removeVehical = (id) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
    });
    // wait for 1000ms to simulate a loading time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${BASE_URL}api/v1/vehicles/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: JSON.parse(localStorage.getItem('user')).token,
      },
    });
    if (response.ok) {
      dispat
      dispatch({ type: REMOVE_VEHICAL, payload: id });
    } else {
    }
    dispatch({
      type: 'SET_LOADING',
    });
  };
}

export const getVehicals = () => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
    });
    // wait for 1000ms to simulate a loading time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch( `${BASE_URL}api/v1/vehicles/` , {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('user')).token,
      },
    });
    const data = await response.json();
    if (data) {
      dispatch({ type: GET_VEHICALS, payload: data });
    } else {
      dispatch({ type: GET_VEHICALS, payload: [] });
    }
    dispatch({
      type: 'SET_LOADING',
    });
  };
}
