import React, {useState} from 'react'

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleLogIn = () => {
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      alert('Logged in successfully!');
      setEmail('');
      setPassword('');
    } else {
      alert('Invalid email or password!');
    }
    console.log(userData)
  };

  return (
    <div className='container h-[450px]'>
      <div className='py-9'>
      <h2 className='mb-8 font-bold'>LOG IN</h2>
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
      <button onClick={handleLogIn} className='bg-gradient-to-r bg-primary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full'>Log In</button>
      </div>
    </div>
  );
}

export default LogIn