import { Outlet } from "react-router-dom"

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center 
    justify-center relative">
        <img src="/assets/img/bg.png" className="absolute w-full h-full obsect-cover opacity-20" alt="" />
        <Outlet />

    </div>
  );
};

export default AuthenticationLayout