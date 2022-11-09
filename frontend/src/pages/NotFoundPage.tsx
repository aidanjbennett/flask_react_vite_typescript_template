import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 | Discord Bot Name</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container">
        <h1 className="center">Not Found</h1>
      </div>
    </>
  );
}
