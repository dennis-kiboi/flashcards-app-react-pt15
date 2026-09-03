import UserAvatar from "../UserAvatar";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <p className="text-2xl font-light">
          Flash<span className="font-bold text-teal-700">Learn</span>
        </p>
        <div className="flex gap-5">
          <Link to="/decks/new" className="rounded-full border border-slate-200 bg-white px-6 py-2 shadow-sm">
            Add Deck
          </Link>
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
