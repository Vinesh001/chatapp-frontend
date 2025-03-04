import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from '../redux/userSlice';

const useGetAuthUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://chatapp-backend-dsrf.onrender.com/api/v1/user`);

                // console.log("authuser", res.data)
                dispatch(setAuthUser(res.data[0]));
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserData();
    }, [])
}

export default useGetAuthUser