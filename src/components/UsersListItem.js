import { GoTrashcan } from "react-icons/go";

import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import { ExpandablePanel } from "./ExpandablePanel";
import { AlbumsList } from "./AlbumsList";

export function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleDeleteUser = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user...</div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
