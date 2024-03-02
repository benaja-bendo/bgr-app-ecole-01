import {FC} from 'react';
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";
import {useLoaderData} from "react-router-dom";
import {Student} from "@/types/Student.ts";

export const EditStudent: FC = () => {
    useChangeDocumentTitle('Modification des informations de l\'étudiant');
    const student = useLoaderData() as Student;
    return (<>
        <div>EditStudent</div>
        <p>{student.email}</p>
    </>);
}