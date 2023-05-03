import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  let finalOutput;
  if (name !== '') {
    finalOutput = `Hello ${name}`;
  } 

  return (
    <div>
    <div>Enter Your name</div>
      <input type="text" placeholder="Enter your name" onChange={handleChange} />
      <p>{finalOutput}</p>
    </div>
  );
}

export default Greeting;
