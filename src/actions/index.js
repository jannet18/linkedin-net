import { auth, provider, storage } from "../firebase/Config";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { db } from "../firebase/Config";
import { SET_USER } from "./actionType";
// import { connect } from "react-redux";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, setDoc } from "firebase/firestore";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        // console.log(payload)
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function PostArticleAPI(payload) {
  return (dispatch) => {
    if (payload.image !== "") {
      const docRef = collection(db, "articles");
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, payload.image);
      // .push(storageRef, payload.image);
      // storageRef?.push(payload?.image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress : ${progress}%`);
          }
        },
        // (error) => console.log(error.code),
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then(
            async (downLoadURL) => {
              await addDoc(docRef, {
                user: {
                  description: payload.user.email,
                  title: payload.displayName,
                  date: payload.timestamp,
                  image: payload.user.photoURL,
                },
                video: payload.video,
                sharedImg: downLoadURL,
                comments: 0,
                description: payload.description,
              });
              console.log(downLoadURL);
            },
            console.log(docRef)
          );
        }
      );
    } else if (payload.video) {
      setDoc(collection(db, "articles"), {
        user: {
          description: payload.user.email,
          title: payload.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
    }
  };
}
