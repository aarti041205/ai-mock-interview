
import  {Footer} from "@/components/ui/footer"
import Header from "@/components/ui/header"
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
