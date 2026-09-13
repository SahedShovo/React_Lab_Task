import { useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SortControls from "./components/SortControls.jsx";
import StudentCard from "./components/StudentCard.jsx";
import AddStudentForm from "./components/AddStudentForm.jsx";
import { useStudents } from "./context/StudentContext.jsx";
import "./App.css";

function App() {
  const { visibleStudents, loading } = useStudents();

  useEffect(() => {
    document.title = `Dashboard — ${visibleStudents.length} Students`;
  }, [visibleStudents.length]);

  return (
    <div className="app">
      <DashboardHeader />
      <SearchBar />
      <SortControls />

      {loading ? (
        <p className="loading">Loading students...</p>
      ) : (
        <div className="student-list">
          {visibleStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}

      <AddStudentForm />
    </div>
  );
}

export default App;