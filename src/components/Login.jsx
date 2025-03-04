import { useState } from "react";
import register from '../assets/register.jpg'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

function Login() {
    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/user/login", formData, {
                headers: {
                    'Content-Type': "application/json"
                },
                withCredentials: true
            });
            dispatch(setAuthUser(res.data))
            navigate('/');
            setFormData({
                userName: "",
                password: ""
            });
        } catch (error) {
            console.log(error);
        }
        console.log(formData);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-4">
                    <img src={register} alt="register" className="w-32 h-32 object-cover rounded-full" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            name="userName" 
                            placeholder="Username" 
                            value={formData.userName} 
                            autoComplete="off"
                            onChange={handleChange} 
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required 
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            autoComplete="off"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>If not registered? 
                        <button onClick={() => navigate('/register')} className="text-blue-500 hover:underline">
                            Register
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
