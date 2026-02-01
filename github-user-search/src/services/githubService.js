import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const searchUsers = async (username, location, repos) => {
  let query = username;

  if (location) query += `+location:${location}`;
  if (repos) query += `+repos:>=${repos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  return response.data.items;
};
