import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5001/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password, confirmPassword })                
            });
            
            if (response.ok) {
                toast.success('User Created Successfully');
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                } else {
                toast.error('User Creation Failed');
            }
        } catch (error) {
            toast.error('Server error');
        }
    };

    return (
        <div className="flex  justify-center items-center h-screen">
            <div className="formimage w-1/3 h-fit  hover:cursor-pointer transition-all duration-500 ease-in-out">
                <div className="flex flex-col justify-center items-center h-full p-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Platform</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Join thousands of users who trust our platform for their daily needs. 
                        Create your account today and unlock exclusive features and benefits.
                    </p>
                    <div className="space-y-3 text-left">
                        <div className="flex items-center">
                            <span className="text-green-500 mr-3">✓</span>
                            <span className="text-gray-700">Secure and reliable authentication</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-green-500 mr-3">✓</span>
                            <span className="text-gray-700">24/7 customer support</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-green-500 mr-3">✓</span>
                            <span className="text-gray-700">Free access to premium features</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-green-500 mr-3">✓</span>
                            <span className="text-gray-700">Easy-to-use interface</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-container w-full max-w-md">
                <form onSubmit={handleSubmit} className='space-y-4 p-8 rounded-md flex flex-col justify-center items-center font-semibold w-full'>
                    <div className="form-title font-bold text-3xl mb-4">Signup</div>

                    <div className="form-group w-full">
                        <input type="text"
                            className="border-none outline-none rounded-md p-3 w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            id="name" name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your name" required />
                    </div>

                    <div className="form-group w-full">
                        <input type="email"
                            className="border-none outline-none rounded-md p-3 w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email" required />
                    </div>
                    <div className="form-group w-full">
                        <input type="password"
                            className="border-none outline-none rounded-md p-3 w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password" required />
                    </div>
                    <div className="form-group w-full">
                        <input type="password"
                            className="border-none outline-none rounded-md p-3 w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            name="confirmPassword" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password" required />
                    </div>
                    <div className="form-group w-full">
                        <button className='btn-rounded bg-black text-white py-3 w-full rounded-md hover:bg-gray-800 transition-colors duration-200'
                        type='submit'>Signup</button>
                    </div>  

                </form>
            </div>

        </div>
    );
}

export default Signup;