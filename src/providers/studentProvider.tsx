import React, {createContext} from 'react';
import {Student} from "@/types/Student.ts";
import {useStudentProvider} from "@/hooks/use-students-provider.ts";

interface StudentProviderProps {
    students: Student[];
    setStudents?: (students: Student[]) => void;
}

export const StudentProvider = createContext<StudentProviderProps>({students: []});

interface StudentProviderContext {
    children: React.ReactNode;
}

export const StudentProviderContext: React.FC<StudentProviderContext> = ({children}) => {
    const {data: students} = useStudentProvider();
    return (
        <StudentProvider.Provider value={{
            students,
            setStudents: () => {
            }
        }}>
            {children}
        </StudentProvider.Provider>
    );
}