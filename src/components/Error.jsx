import React from 'react'
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  //add a funny gif here

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an expected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
