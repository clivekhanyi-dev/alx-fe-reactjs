import { useState, useEffect } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await searchUsers(username, location, minRepos);
      setUsers(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col gap-3 md:flex-row">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      <div className="mt-6 grid gap-4">
        {users.map((user) => (
          <UserCard key={user.id} username={user.login} />
        ))}
      </div>
    </div>
  );
}

function UserCard({ username }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setDetails(data);
    };
    fetchDetails();
  }, [username]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="border p-3 rounded shadow">
      <img src={details.avatar_url} alt={details.login} width="80" />
      <h2 className="font-bold">{details.name || details.login}</h2>
      <p>Location: {details.location || "N/A"}</p>
      <p>Repos: {details.public_repos}</p>
      <a
        href={details.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600"
      >
        View Profile
      </a>
    </div>
  );
}

export default Search;
