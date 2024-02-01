import { useState } from "react";
import "./SignUpForm.css";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      let url = "https://fsa-jwt-practice.herokuapp.com/signup";
      let request = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: `${username}`,
          password: `${password}`,
        }),
      });
      let result = await request.json();
      let token = result.token;

      setToken(token);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="label">
          Username:
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className="label">
          Password:
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="button">Submit</button>
      </form>
    </>
  );
}
