

import React from 'react';

const card = ({ title, description, imageUrl, links }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {links &&
          links.map((link, index) => (
            <a key={index} href={link.url} className="card-link">
              {link.label}
            </a>
          ))}
      </div>
    </div>
  );
};

export default card;
