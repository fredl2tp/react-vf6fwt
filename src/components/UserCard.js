import React, { useState } from 'react';
import './UserCard.css';

function UserCard({ image, firstname, lastname, email }) {
  const [favorite, setFavorite] = useState(false);
  const var1 = `<div>${image}</div>`;
  console.log(var1);
  return (
    <div>
      {email}
      {/* <img src= alt="Avatar" className="w-100" /> className="card" className="info-head" */}
      <div>
        {' '}
        {/* className="info-container" */}
        <br />
        <div>
          {/* use innerhtml form react (dangerouslySetInnerHTML) to edit html code. */}
          <div dangerouslySetInnerHTML={{ __html: var1 }}></div>
          <br />
          <div>{firstname}</div>
          <span
            className={favorite ? 'is-favorite' : ''}
            onClick={(event) => {
              const newFavorite = !favorite;
              setFavorite(newFavorite);
            }}
          >
            &#9733;
          </span>
        </div>
        <div className="info-body">
          <p>{lastname}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
