import {LoaderFunctionArgs} from "react-router-dom";
import StudentService from "@/services/studentService.ts";

export function StudentLoader({ params,request }: LoaderFunctionArgs) {
    // const {id} = useParams();
    // const navigate = useNavigate();
    // console.log('id', id);
    // useEffect(() => {
    //     if (!/\d+/.test(id as string)) {
    //         navigate(-1);
    //     }
    // }, [id, navigate]);

    if (request.method === "GET" && params.id) {
        return getStudent(Number(params.id));
    }
    return {id: params.id, method: request.method};
}

function getStudent(id: number) {
    return StudentService.getStudents(id);
}