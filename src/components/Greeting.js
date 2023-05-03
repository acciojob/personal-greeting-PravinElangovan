import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  let finalOutput = "";
  if (name !== '') {
    finalOutput = `Hello ${name}`;
  }

  let displayStyle = { display: "block" };
  if (finalOutput === '') {
    displayStyle = { display: "none" };
  }

  return (
    <div>
      <div>Enter Your name</div>
      <input type="text" placeholder="Enter your name" onChange={handleChange} />
      <p style={displayStyle}>{finalOutput}</p>
    </div>
  );
}

export default Greeting;
