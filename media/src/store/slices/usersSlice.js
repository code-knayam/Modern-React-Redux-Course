import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
	name: "users",
	initialState: {
		data: [],
		isLoading: false,
		error: null,
	},
	extraReducers(builder) {
		builder.addCase(fetchUsers.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});

		builder.addCase(addUser.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(addUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
		builder.addCase(addUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data.push(action.payload);
		});

		builder.addCase(deleteUser.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(deleteUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
		builder.addCase(deleteUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = state.data.filter((user) => {
				return user.id !== action.payload.id;
			});
		});
	},
});

export const usersReducer = usersSlice.reducer;
