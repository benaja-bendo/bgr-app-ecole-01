import {create} from 'zustand';
import {Tuser} from "@/types/Tuser.ts";

interface IStoreStudent {
    students: Tuser[];
    setStudents: (students: Tuser[]) => void;
}

export const useStoreStudent = create<IStoreStudent>((set) => ({
    students: [],
    setStudents: (students: Tuser[]) => set({students: students}),
}));
