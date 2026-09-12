import { useState, useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SortControls from "./components/SortControls.jsx";
import StudentCard from "./components/StudentCard.jsx";


import "./App.css";

type Student = {
  id: number;
  name: string;
  major: string;
  gpa: number;
  courses: string[];
};

const dummyStudents: Student[] = [
  { id: 101, name: "Rakib Hasan", major: "CSE", gpa: 3.8, courses: ["Math", "OOP"] },
  { id: 102, name: "Sadia Islam", major: "EEE", gpa: 3.5, courses: ["Circuits"] },
  { id: 103, name: "Tanvir Ahmed", major: "BBA", gpa: 3.2, courses: ["Marketing"] },
  { id: 104, name: "Nusrat Jahan", major: "CSE", gpa: 3.9, courses: ["DSA", "Web"] },
];

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(dummyStudents);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = `Dashboard — ${students.length} Students`;
  }, [students]);

  const handleToggleFavorite = () => {
    setFavoriteCount((prev) => prev + 1);
  };

  let visibleStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.major.toLowerCase().includes(query.toLowerCase())
  );

  if (sortBy === "name") {
    visibleStudents = [...visibleStudents].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "gpa") {
    visibleStudents = [...visibleStudents].sort((a, b) => b.gpa - a.gpa);
  }

  return (
    <div className="app">
      <DashboardHeader favoriteCount={favoriteCount} totalStudents={visibleStudents.length} />
      <SearchBar query={query} setQuery={setQuery} />
      <SortControls setSortBy={setSortBy} />

      {loading ? (
        <p className="loading">Loading students...</p>
      ) : (
        <div className="student-list">
          {visibleStudents.map((student) => (
            <StudentCard key={student.id} student={student} onToggleFavorite={handleToggleFavorite} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;