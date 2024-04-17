import {csrfFetch} from './csrf';

const GETALLMENTEES = 'mentee/GETALLMENTEES';
const GETMENTEE = 'mentee/GETMENTEE';
const GETTEACHER = 'mentee/GETTEACHER';
const EDITMENTEE = 'mentee/EDITMENTEE';

//** Action creator */

const getMentees = data => {
	return {
		type: GETALLMENTEES,
		payload: data,
	};
};

const getMentee = data => {
	return {
		type: GETMENTEE,
		payload: data,
	};
};

const getTeacher = data => {
	return {
		type: GETTEACHER,
		payload: data,
	};
};

const editMentee = data => {
	return {
		type: EDITMENTEE,
		payload: data,
	};
};

//** Thunk */

export const getAllMenteesThunk =
	(filters = {}) =>
	async dispatch => {
		const params = new URLSearchParams(filters);

		const response = await csrfFetch(`/api/mentee?${params}`);
		if (response.ok) {
			const data = await response.json();
			dispatch(getMentees(data));
		}
	};

export const getMenteeThunk = id => async dispatch => {
	const response = await csrfFetch(`/api/mentee/${id}`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getMentee(data));
	}
};

export const passwordUpdateMenteeThunk =
	(id, oldPassword, password) => async dispatch => {
		const response = await csrfFetch('/api/mentee/password/update', {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id,
				oldPassword,
				password,
			}),
		});
		if (response.ok) {
			alert('Password was updated');
		}
	};

export const editMenteeThunk = user => async dispatch => {
	const response = await csrfFetch(`/api/mentee/${user.id}`, {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			name: user.name,
			email: user.email,
			countryCode: user.countryCode,
			phone: user.phone,
			city: user.city,
			state: user.state,
			country: user.country,
			profileImg: user.profileImg,
			goal: user.goal,
			about: user.about,
			occupation: user.occupation,
			skill: user.skill,
			project: user.project,
		}),
	});
	if (response.ok) {
		const data = await response.json();
		dispatch(editMentee(data));
	}
};

const initialState = {search: null, mentee: null, teacher: null};

//** Reducers */

const menteeReducer = (state = initialState, action) => {
	let currentState = {...state};

	switch (action.type) {
		case GETALLMENTEES:
			currentState.search = null;
			currentState.search = [...action.payload.Mentees];
			return currentState;

		case GETMENTEE:
			currentState.mentee = {...action.payload};
			return currentState;

		case EDITMENTEE:
			currentState.mentee = {...action.payload};
			return currentState;

		case GETTEACHER:
			currentState.teacher = {...action.payload};
			return currentState;

		default:
			return currentState;
	}
};

export default menteeReducer;
