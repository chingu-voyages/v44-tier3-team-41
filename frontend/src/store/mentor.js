import { csrfFetch } from "./csrf";

const GETALLMENTORS = 'mentor/GETALLMENTORS'
const GETMENTOR = 'mentor/GETMENTOR'
const GETSTUDENTS = 'mentor/GETSTUDENTS'
const EDITMENTOR = 'mentor/EDITMENTOR'

//** Action creator */

const getMentors = data => {
    return {
        type: GETALLMENTORS,
        payload: data
    }
}

const getMentor = data => {
    return {
        type: GETMENTOR,
        payload: data
    }
}

const mentorStudents = data => {
    return {
        type: GETSTUDENTS,
        payload: data
    }
}

const editMentor = data => {
    return {
        type: EDITMENTOR,
        payload: data
    }
}

//** Thunk */

export const getAllMentorsThunk = (filters = {}) => async dispatch => {

    const params = new URLSearchParams(filters)

    const response = await csrfFetch(`/api/mentor?${params}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getMentors(data));
    }
};

export const getMentorThunk = (id) => async dispatch => {

    const response = await csrfFetch(`/api/mentor/${id}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getMentor(data));
    }
}

export const editMentorThunk = (user) => async dispatch => {

    const response = await csrfFetch(`/api/mentor/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            countryCode: user.countryCode,
            phone: user.phone,
            city: user.city,
            state: user.state,
            country: user.country,
            profileImg: user.profileImg,
            yrsExp: user.yrsExp,
            about: user.about,
            role: user.role,
            skill: user.skill,
            expertise: user.expertise,
            company: user.company,
        })
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(editMentor(data))
    }
}

const initialState = { search: null, mentor: null, students: null }

//** Reducers */

const mentorReducer = (state = initialState, action) => {
    let currentState = { ...state };

    switch (action.type) {
        case GETALLMENTORS:
            currentState.search = null
            currentState.search = [...action.payload.Mentors]
            return currentState;

        case GETMENTOR:
            currentState.mentor = { ...action.payload }
            return currentState

        case EDITMENTOR:
            currentState.mentor = { ...action.payload }
            return currentState

        case GETSTUDENTS:
            currentState.students = null
            currentState.students = [...action.payload]
            return currentState

        default:
            return currentState;

    }
};

export default mentorReducer;
