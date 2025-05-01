import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops! Page not found.</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
