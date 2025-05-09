import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className={cn("w-full border-b bg-white transition-all duration-150 ease-in-out")}>
      <Container>
        <div className="flex items-center w-full gap-4 py-4">
          {/* Logo Section */}
          <LogoContainer />

          {/* Navigation Section */}
          <nav className="hidden md:flex items-center gap-4">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to="/generate"
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600 hover:text-neutral-800 transition-colors",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          {/* Right Side (Profile & Mobile Toggle) */}
          <div className="ml-auto flex items-center gap-4">
            <ProfileContainer />
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
