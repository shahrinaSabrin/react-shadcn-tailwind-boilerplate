import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "./userFunctions";

function UserAvatar() {
  const menuItems = (
    <div className="space-y-2">
      <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-left px-4 py-2 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
        Profile
      </Button>
      <Button
        className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white text-left px-4 py-2 rounded-md shadow-md hover:from-red-600 hover:to-red-800 transition-all duration-300"
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button
            className="bg-gradient-to-r from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 text-gray-700 shadow-lg rounded-full p-3 flex items-center justify-center transition-all duration-300"
          >
            <UserOutlined className="text-xl" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-48 bg-white shadow-md rounded-lg">
          {menuItems}
        </PopoverContent>
      </Popover>
    </div>


  );
}

export default UserAvatar;
