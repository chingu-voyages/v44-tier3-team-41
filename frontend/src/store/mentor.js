import { csrfFetch } from "./csrf";

const GETALLMENTORS = 'mentor/GETALLMENTORS'
const GETSTUDENTS = 'mentor/GETSTUDENTS'

//** Action creator */

const getMentors = data => {
    return {
        type: GETALLMENTORS,
        payload: data
    }
}

const mentorStudents = data => {
    return {
        type: GETSTUDENTS,
        payload: data
    }
}

//** Thunk */
export const getAllMentorsThunk = (filters = {}) => async dispatch => {

    const params = new URLSearchParams(filters)

    const response = await csrfFetch(`/api/mentor/search?${params}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getMentors(data));
    }
};

const initialState = { search: null, students: null }

//** Reducers */

const mentorReducer = (state = initialState, action) => {
    let currentState = { ...state };

    switch (action.type) {
        case GETALLMENTORS: {

            currentState.search = { ...action.payload.Mentors }
            return currentState;
        }
        case GETSTUDENTS:
            currentState.students = { ...action.payload }
            return currentState

        // case CLEARDATA:
        //     return initialState

        default:
            return currentState;
    }
};


export default mentorReducer;
