import { useStudents } from "../context/StudentContext";

function SearchBar() {
  const { query, setQuery } = useStudents();

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;