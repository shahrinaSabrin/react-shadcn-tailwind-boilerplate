import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import UserAvatar from "./user/UserAvater";
const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="flex h-screen">
            <div
                className={`border-r border-gray-200 transition-all duration-300 ${collapsed ? "w-1/3" : "w-0"
                    }`}
            >
                <h1 className="p-4 text-ellipsis flex justify-center text-2xl text-blue-500">Sidebar Content</h1>
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full">
                {/* Header */}
                <header className="bg-white shadow-md h-16 flex items-center px-4 w-full">
                    <div className="flex justify-between items-center p-4 w-full">
                        <Button
                            onClick={() => setCollapsed(!collapsed)}
                            className="bg-gradient-to-r from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 text-gray-700 shadow-lg rounded-full p-3 flex items-center justify-center transition-all duration-300"
                        >
                            {collapsed ? (
                                <MenuUnfoldOutlined className="text-xl" />
                            ) : (
                                <MenuFoldOutlined className="text-xl" />
                            )}
                        </Button>
                        <UserAvatar />
                    </div>
                </header>

                {/* Main Outlet */}
                <main className="flex-1 p-4 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
