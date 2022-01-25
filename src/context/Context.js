import { createContext, useEffect, useReducer } from "react";

const INITIALL_STATE = {
    accessToken: JSON.parse(localStorage.getItem('access_token')) || null,
    error: null,
}