import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (e, newPage = 1) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await searchUsers(username, location, repos);
      setUsers(data);
      setPage(newPage);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-3 md:flex-row"
      >
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
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      <div className="mt-6 grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-3 rounded shadow">
            <img src={user.avatar_url} alt={user.login} width="80" />
            <h2 className="font-bold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={(e) => handleSearch(e, page + 1)}
          className="mt-4 bg-gray-800 text-white p-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
