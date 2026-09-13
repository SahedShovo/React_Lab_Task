declare module "*.jsx" {
  type Student = {
    id: number;
    name: string;
    major: string;
    gpa: number;
    courses: string[];
    favorite: boolean;
  };

  const component: any;
  export default component;

  export const StudentProvider: any;
  export const ThemeProvider: any;
  export function useStudents(): {
    visibleStudents: Student[];
    loading: boolean;
  };
  export function useTheme(): {
    theme: string;
    toggleTheme: () => void;
  };
}