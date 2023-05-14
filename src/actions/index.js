import { auth, provider } from "../firebase/Config";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { SET_USER } from "./actionType";
import { connect } from "react-redux";
export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export function signInAPI() {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((payload) => {
                dispatch(setUser(payload.user))
                // console.log(payload)
            })
            .catch((error) => alert(error.message));
    }
}

export function getUserAuth() {
    return (dispatch) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                  dispatch(setUser(user));
            }
        })
    }
}

export function signOutAPI() {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(setUser(null));
            })
            .catch((error) => {
                console.log(error.message);
        })
    }
}