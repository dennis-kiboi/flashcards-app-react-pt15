import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserAvatar = () => {
  const user = useContext(UserContext);

  return (
    <div className="flex items-center gap-2">
      <img
        src={user.avatarUrl}
        alt={user.name}
        className="h-8 w-8 rounded-full"
      />
      <span className="text-sm font-medium">{user.name}</span>
    </div>
  );
};
export default UserAvatar;
