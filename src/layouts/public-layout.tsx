
import  {Footer} from "@/components/footer"
import Header from "@/components/header"
import AuthHanlder from "@/handlers/auth-handlers";
import { Outlet } from "react-router-dom"



export const PublicLayout = () => {
  return (
    <div className="w-full">
        {/*handler to store user data*/}
        <AuthHanlder />
        <Header />

        <Outlet />

        <Footer />
    </div>
  );
};
