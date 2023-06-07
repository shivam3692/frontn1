import React, { useState } from 'react';
import '../../App.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupStatus, setSignupStatus] = useState(false);

  const handleSignUp = () => {
    // Store signup data locally
    const signupData = {
      email: email,
      password: password
    };

    localStorage.setItem('signupData', JSON.stringify(signupData));

    console.log('Signup data stored locally:', signupData);

    setSignupStatus(true);
  };

  return (
    <div className='sign-up'>
      <h1>Sign Up</h1>
      {signupStatus ? (
        <p>Signup Successful!</p>
      ) : (
        <div className='sign-up-form'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>
            {signupStatus ? 'Signed In' : 'Sign Up'}
          </button>
        </div>
      )}
    </div>
  );
}
