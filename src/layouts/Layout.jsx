import { Outlet } from "react-router";
import NavBar from "../components/common/NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
