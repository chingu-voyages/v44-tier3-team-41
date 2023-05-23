import { csrfFetch } from "./csrf";

const GETALLMENTEES = 'mentor/GETALLMENTEES'
const GETMENTEE = 'mentor/GETMENTEE'
const GETTEACHER = 'mentor/GETTEACHER'

//** Action creator */

const getMentees = data => {
    return {
        type: GETALLMENTEES,
        payload: data
    }
}

const getMentee = data => {
    return {
        type: GETMENTEE,
        payload: data
    }
}

const getTeacher = data => {
    return {
        type: GETTEACHER,
        payload: data
    }
}

//** Thunk */

export const getAllMenteesThunk = (filters = {}) => async dispatch => {

    const params = new URLSearchParams(filters)

    const response = await csrfFetch(`/api/mentee?${params}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getMentees(data));
    }
};

export const getMenteeThunk = (id) => async dispatch => {

    const response = await csrfFetch(`/api/mentee/${id}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getMentee(data));
    }
}

const initialState = { search: null, mentee: null, teacher: null }

//** Reducers */

const menteeReducer = (state = initialState, action) => {
    let currentState = { ...state };

    switch (action.type) {
        case GETALLMENTEES:
            currentState.search = null
            currentState.search = [...action.payload.Mentee]
            return currentState;

        case GETMENTEE:
            currentState.mentee = null
            currentState.mentee = action.payload
            return currentState

        case GETTEACHER:
            currentState.teacher = null
            currentState.teacher = action.payload
            return currentState

        default:
            return currentState;

    }
};

export default menteeReducer;
