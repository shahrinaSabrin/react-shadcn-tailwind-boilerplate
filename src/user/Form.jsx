/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Form({
    isLogin,
    setIsLogin,
    onSubmit,
    setFormValues, }) {
    const toggleAuth = () => {
        setIsLogin(!isLogin);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white opacity-80 shadow-md rounded-md p-6 w-full max-w-md">
            <h1 className="text-2xl font-semibold text-center text-blue-500">
                {isLogin ? "Login" : "Register"}
            </h1>
            <form onSubmit={onSubmit} className="space-y-4 mt-6">
                {/* Username */}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium">
                        Username <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        required
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        onChange={handleChange}
                    />
                </div>

                {!isLogin && (
                    <>
                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}

                {/* Submit Button */}
                <div className="flex justify-center">
                    <Button type="submit" className="w-full">
                        {isLogin ? "Login" : "Register"}
                    </Button>
                </div>
            </form>
            <div className="text-center mt-4">
                <button
                    type="button"
                    onClick={toggleAuth}
                    className="text-blue-500 hover:underline"
                >
                    {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                </button>
            </div>
        </div>
    );
}