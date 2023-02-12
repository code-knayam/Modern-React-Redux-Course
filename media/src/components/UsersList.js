import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

function UsersList() {
	const [doFetchUsers, isLoadingUsers, loadingUsersError] =
		useThunk(fetchUsers);
	const [doCreateUser, isCreatingUser, errorCreatingUser] = useThunk(addUser);

	const { data } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		doFetchUsers();
	}, [doFetchUsers]);

	const handleUserAdd = () => {
		doCreateUser();
	};

	let content;

	if (isLoadingUsers) {
		content = (
			<div>
				<Skeleton times={3} className="h-10 w-full" />
			</div>
		);
	} else if (loadingUsersError) {
		content = <div>error...</div>;
	} else {
		content = data.map((user, _) => {
			return <UserListItem key={user.id} user={user} />;
		});
	}

	return (
		<div>
			<div className="flex flex-row justify-between items-center m-3">
				<h1 className="m-2 text-xl">Users</h1>
				<Button loading={isCreatingUser} onClick={handleUserAdd}>
					+ Add User
				</Button>
				{errorCreatingUser && "Error creating User"}
			</div>
			{content}
		</div>
	);
}

export default UsersList;
