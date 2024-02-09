import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');

  const handleSignUp = () => {
    localStorage.setItem(email, JSON.stringify({ email, password, fullName, country }));
    alert('Signed up successfully!');
    setEmail('');
    setPassword('');
    setFullName('');
    setCountry('');
  };

  return (
    <div className='container h-[450px]'>
      <div className='py-9'>
        <h2 className='mb-8 font-bold'>SIGN UP</h2>
        <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='w-[90%] sm:w-[30%] rounded-full border border-gray-300 px-2 py-1 mb-4'
        />
        <br />
        <input
            type="text"
            placeholder="Counrty"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className='w-[90%] sm:w-[30%] rounded-full border border-gray-300 px-2 py-1 mb-4'
        />
        <br />
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[90%] sm:w-[30%] rounded-full border border-gray-300 px-2 py-1 mb-4'
        />
        <br />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-[90%] sm:w-[30%] rounded-full border border-gray-300 px-2 py-1 mb-4'
        />
        <br />
        <button onClick={handleSignUp} className='bg-gradient-to-r bg-primary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full'>Sign Up</button>
        <div className='mt-4'>
            <p className='font-bold'>Already have an account Login Here?</p>
        </div>
        <div className='bg-gradient-to-r bg-primary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full w-[25%] sm:w-[8%]'>
            <Link to='/login' onClick={() => window.scrollTo(0, 0)}>
                Log In
            </Link>
        </div>
      </div>
    
    </div>
  );
}

export default SignUp