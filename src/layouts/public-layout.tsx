import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { Outlet } from "react-router-dom"


export const PublicLayout = () => {
  return (
    <div className="w-full">
        {/*handler to store user data*/}
        <Header />

        <Outlet />

        <Footer />
    </div>
  )
}
