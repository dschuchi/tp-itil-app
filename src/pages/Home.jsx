import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
    </>
  );
}
