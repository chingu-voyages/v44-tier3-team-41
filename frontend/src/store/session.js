import { csrfFetch } from './csrf'

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';


const setUser = user => {
    return {
        type: SET_USER,
        user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

//*** Thunk  */

export const restoreUserThunk = () => async dispatch => {
    const response = await csrfFetch('/api/session');

    if (response.ok) {
        const data = await response.json();

        dispatch(setUser(data));
        return response;
    }
};

//! Signup
export const signupThunk =
    (name, email, password, classification) => async dispatch => {
        const response = await csrfFetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
                classification
            }),
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setUser(data));
        }
        return response;
    };


//! Login
export const loginThunk = (email, password, classification) => async dispatch => {

    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            classification
        }),
    });

    if (response.ok) {
        let data = await response.json();
        dispatch(setUser(data));
        return data;
    }
    let data = await response.json();

    return data;
};

//! Logout
export const logoutThunk = () => async dispatch => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(removeUser());
        localStorage.removeItem('messages')
    }
    return response;
};

export const getUserThunk = id => async () => {
    const response = await csrfFetch(`/api/session/current/${id}`);

    if (response.ok) {
        const data = await response.json();
        return data;
    }
};

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);

            if (Object.keys(action.user).length) {
                newState = action.user;
            }
            return newState;

        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;

        default:
            return state;
    }
};

export default sessionReducer;
