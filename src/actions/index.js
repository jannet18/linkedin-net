import { auth, provider } from "../firebase/Config";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";

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