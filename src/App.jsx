import { Toaster } from "@/components/ui/toaster";
import Layout from "./Layout";
import checkAuth from './app/auth.js';
import UserLogin from "./user/UserLogin.jsx";
export default function App() {
  const token = checkAuth();

  return (
    <>
      {token ? <Layout /> : <UserLogin />}
      <Toaster />
    </>
  )
}
