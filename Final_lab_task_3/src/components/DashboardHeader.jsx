import { useTheme } from "../context/ThemeContext";
import { useStudents } from "../context/StudentContext";
import StatBadge from "./StatBadge";

function DashboardHeader() {
  const { theme, toggleTheme } = useTheme();
  const { favoriteCount, visibleStudents } = useStudents();

  return (
    <header className="dashboard-header">
      <h1>Student Dashboard</h1>
      <p>Track and manage students easily</p>

      <nav>
        <StatBadge label="Students" value={visibleStudents.length} />
        <StatBadge label="Favorites" value={favoriteCount} />
        <button onClick={toggleTheme}>
          {theme === "light" ? " Dark Mode" : "☀ Light Mode"}
        </button>
      </nav>
    </header>
  );
}

export default DashboardHeader;