import {FC} from 'react';
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";

export const EditStudent: FC = () => {
    useChangeDocumentTitle('Modification des informations de l\'étudiant');
    return (<>
        <div>EditStudent</div>
    </>);
}