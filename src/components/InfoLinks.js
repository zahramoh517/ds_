import React from 'react';
import './InfoLinks.css'; 

const InfoLinks = () => {
  return (
    <div className="InfoLinks">
      <ul>
        <li>
          <a href="#mainLink1">Main Link 1</a>
          <ul>
            <li><a href="#subLink1">Sublink 1</a></li>
            <li><a href="#subLink2">Sublink 2</a></li>
          </ul>
        </li>
        <li>
          <a href="#mainLink2">Main Link 2</a>
        </li>
      </ul>
    </div>
  );
}

export default InfoLinks;

