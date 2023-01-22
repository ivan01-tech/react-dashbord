import { useRef, useState } from "react";
import "./login.scss";
import { useThemeContextProvider } from "../../context/ThemeContext";
import { useAuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { themeMode } = useThemeContextProvider();
  const { login, error: serverError, errMsg } = useAuthContext();
  const mode = themeMode.isDarkMode ? "dark" : "";

  const [error, setError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmitForm = async function (e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!(email.length > 3) || !(password.length > 3)) {
      setError(true);
      return;
    }

    try {
      await login({ email, password });
      setError(false);
      navigate(from, { replace: true });
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <div className={`login-form `}>
      <form onSubmit={handleSubmitForm}>
        <h2>Ivanadmin : Login</h2>
        {error && <span className="error">Wrong email or password </span>}
        {serverError && <span className="error">{errMsg}</span>}
        <div className="inputItem">
          <label htmlFor="email">Email : </label>
          <input
            placeholder="john_doe@gmail.com"
            type="email"
            name="email"
            id="email"
            className={mode}
            ref={emailRef}
          />
        </div>
        <div className="inputItem">
          <label htmlFor="password">Password : </label>
          <input
            className={mode}
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
