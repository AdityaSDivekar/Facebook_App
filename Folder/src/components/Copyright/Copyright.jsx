// Copyright.js

import React from 'react';
import './copyright.css';

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="copyright">
      <p>&copy; {currentYear} YourCompany. All rights reserved.</p>
      <p>
        This website and its content are the property of YourCompany. Any
        redistribution or reproduction of part or all of the contents in any
        form is prohibited other than the following:
      </p>
      <ul>
        <li>You may print or download to a local hard disk extracts for your personal and non-commercial use only.</li>
        <li>You may copy the content to individual third parties for their personal use, but only if you acknowledge the website as the source of the material.</li>
      </ul>
      <p>
        You may not, except with our express written permission, distribute or
        commercially exploit the content. Nor may you transmit it or store it
        in any other website or other form of electronic retrieval system.
      </p>
    </div>
  );
}

export default Copyright;
