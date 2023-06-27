import React from 'react';

const NotFoundBlock: React.FC = () => {

  return (
    <div>
        <h1> error 404 : page not found</h1>
        <p>
            unfortunately this page does not exist!
            <span> :besorgt: </span>
        </p>
        <a href='/'>Home Page</a>
    </div>
  )
};

export default NotFoundBlock;