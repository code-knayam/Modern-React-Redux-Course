import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { deleteUser } from "../store";
import AlbumsList from "./AlbumsList";
import Button from "./Button";
import ExpandablePanel from "./ExpandanblePanel";

function UserListItem({ user }) {
	const [doDeleteuser, isLoading, error] = useThunk(deleteUser);

	const handleClick = () => {
		doDeleteuser(user);
	};

	const header = (
		<>
			<Button className="mr-3" loading={isLoading} onClick={handleClick}>
				<GoTrashcan />
			</Button>
			{error && <div>Error deleting user</div>}
			{user.name}
		</>
	);

	return (
		<ExpandablePanel header={header}>
			<AlbumsList user={user} />
		</ExpandablePanel>
	);
}

export default UserListItem;
