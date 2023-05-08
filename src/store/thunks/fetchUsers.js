import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // FOR DEV ONLY!!!
  await pause(1000);

  return response.data;
});

// FOR DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export { fetchUsers };

// fetchUsers.pending ==> "users/fetch/pending"
// fetchUsers.fulfilled ==> "users/fetch/fulfilled"
// fetchUsers.rejected ==> "users/fetch/rejected"
