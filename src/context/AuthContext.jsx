import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useReducer, createContext, useContext, useState } from "react";
import { firebaseAuth } from "../firebase-config";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const INITIAL_STATE = { currentuser: null };

const AuthContext = createContext(INITIAL_STATE);

export const useAuthContext = function () {
  return useContext(AuthContext);
};

const reducer = function (state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        currentuser: action.payload,
      };
    case LOGOUT:
      return {
        currentuser: null,
      };
    default:
      return state;
  }
};

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [error, setError] = useState(false);
  const [errMsg, seterrMsg] = useState("");

  const login = async function ({ email, password }) {
    console.log(email, password);
    try {
      const credentials = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      dispatch({
        type: LOGIN,
        payload: {
          email: credentials.user.email,
          uid: credentials.user.uid,
          password,
        },
      });
      setError(false);
      seterrMsg("");
    } catch (err) {
      setError(true);
      seterrMsg(err.message);
      console.log(err);
    }
  };

  const logout = async function () {
    try {
      await signOut(firebaseAuth);
      dispatch({ type: LOGOUT });

      setError(false);
      seterrMsg("");
    } catch (err) {
      setError(true);
      seterrMsg(err.message);
      console.log(err);
    }
  };

  const uploadImage = async function () {};

  return (
    <AuthContext.Provider
      value={{
        currentuser: state?.currentuser,
        dispatch,
        login,
        logout,
        error,
        errMsg,
        setError,
        seterrMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
