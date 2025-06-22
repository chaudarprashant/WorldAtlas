import { NavLink, useRouteError } from "react-router-dom";

import React from 'react'

const ErrorPage = () => {
    const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button> Go Home </button>
      </NavLink>
    </div>
  );
}

export default ErrorPage
