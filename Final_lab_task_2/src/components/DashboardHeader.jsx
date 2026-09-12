function DashboardHeader({ favoriteCount, totalStudents }) {
  return (
    <header className="dashboard-header">
      <h1>Student Dashboard</h1>
      <p>Track and manage students easily</p>
      <nav>
        <span>Students: {totalStudents}</span>
        <span>Favorites: {favoriteCount}</span>
      </nav>
    </header>
  );
}

export default DashboardHeader;