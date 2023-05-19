import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_MENTORS } from "../features/mentorSlice";

// dev
const instance = axios.create({
  baseURL: "http://localhost:8000/api",
});

const handleError = (err) => {
  console.error(err);
  return { error: true, statusCode: err.response.status, message: err.message };
};

//==============================( POST )==============================

//==============================( GET )==============================

// GET request to retrieve all mentors
export const getAllMentors = async () => {
  try {
    const response = await instance.get("/mentor");
    const dispatch = useDispatch();
    dispatch(FETCH_MENTORS(response));
    return response.data;
  } catch (err) {
    return handleError(err);
  }
};

// GET request to retrieve all mentees
export const getAllMentees = async () => {
  try {
    const response = await instance.get("/mentee");
    return response.data;
  } catch (err) {
    return handleError(err);
  }
};

// GET request to retrieve a mentor by ID
export const getMentorById = async (id) => {
  try {
    const response = await instance.get(`/mentor/${id}`);
    return response.data;
  } catch (err) {
    return handleError(err);
  }
};

// GET request to retrieve a mentee by ID
export const getMenteeById = async (id) => {
  try {
    const response = await instance.get(`/mentee/${id}`);
    return response.data;
  } catch (err) {
    return handleError(err);
  }
};
