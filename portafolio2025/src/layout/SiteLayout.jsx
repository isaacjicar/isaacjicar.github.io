import { Outlet } from "react-router-dom";
import NavBar from "@/layout/NavBar";

export default function SiteLayout() {
  return (
    <div className="min-h-dvh bg-baseDark text-white">
      <NavBar />
      <Outlet />
    </div>
  );
}
