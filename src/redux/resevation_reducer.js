/* eslint-disable */
import BASE_URL from "../api";

const RESERVE_TEST_DRIVE = "RESERVE_TEST_DRIVE";
const CANCEL_TEST_DRIVE = "CANCEL_TEST_DRIVE";
const GET_RESERVATIONS = "GET_RESERVATIONS";

export const reserveReducer = (state = null, action) => {
  switch (action.type) {
    case RESERVE_TEST_DRIVE:
      return [...state, action.payload];
    case CANCEL_TEST_DRIVE:
      const newState = state.filter((reservation) => reservation.id !== action.payload);
      return newState;
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export const reserve =
  (reservation) => async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}api/v1/users/${JSON.parse(localStorage.getItem("user")).id}/reservations`,
      {
        method: "POST",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")).token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    dispatch({
      type: RESERVE_TEST_DRIVE,
      payload: data,
    });
  };

export const cancelTestDrive = (id) => async (dispatch) => {
  fetch( `${BASE_URL}api/v1/users/${JSON.parse(localStorage.getItem("user")).id}/reservations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: JSON.parse(localStorage.getItem("user")).token,
    },
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: CANCEL_TEST_DRIVE,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: CANCEL_TEST_DRIVE,
        payload: id,
      });
    });
};

export const getreservations = () => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}api/v1/users/${JSON.parse(localStorage.getItem("user")).id}/reservations`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("user")).token,
      },
    });
   
    const data = await response.json();
    if (!data) {
      dispatch({ type: GET_RESERVATIONS, payload: [] });
    } else {
      dispatch({ type: GET_RESERVATIONS, payload: data });
    }
  };
}
