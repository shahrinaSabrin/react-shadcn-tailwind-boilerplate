import { useToast } from "@/hooks/use-toast";
import Form from "./Form";

import axios from "axios";
import React from 'react';

const UserLogin = () => {
    const [isLogin, setIsLogin] = React.useState(true);
    const [formValues, setFormValues] = React.useState({});
    const { toast } = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const endpoint = isLogin
            ? `${import.meta.env.VITE_API_BASE_URL}api/v1/admin/auth`
            : `${import.meta.env.VITE_API_BASE_URL}api/v1/admin/auth/registration`;

        axios
            .post(endpoint, formValues)
            .then((response) => {
                localStorage.setItem("token", response.data.payload.token);
                window.location.href = "/";
                toast({
                    title: "Success",
                    description: "Login successful",
                    variant: "success",
                });
            })
            .catch((error) => {
                const errorMessage =
                    error.response?.data?.errors?.map((err) => err.message).join(", ") ||
                    "An unknown error occurred";
                toast({
                    title: "Error",
                    description: errorMessage,
                    variant: "destructive",
                });
            });
    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-custom-bg bg-cover bg-center h-64 w-full ">
            <Form
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                onSubmit={onSubmit}
                handleChange={handleChange}
                formValues={formValues}
                setFormValues={setFormValues}
            />
        </div>
    );
};

export default UserLogin;
