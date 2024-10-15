import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  let routeError = useRouteError();
  return (
    <div>
      <h3>Cannot Reach the server</h3>
      <p>
        {routeError.status}: {routeError.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
