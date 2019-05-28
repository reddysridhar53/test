/*
  NotFoundPage.
  This is the page we show when the user visits a url that doesn't have a route.
*/

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <div>404</div>
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </section>
  );
}
