import {ActionFunctionArgs} from "@remix-run/router/utils.ts";
import {json, redirect} from "react-router-dom";
import {ResponseThrow} from "@/types/ResponseThrow.ts";
import {convertFormDataToObject} from "@/utils/convert-formData-to-object.ts";
import {AxiosError} from "axios";
import StudentService from "@/services/studentService.ts";
import {ResponseRouterSuccess} from "@/types/ResponseRouterSuccess.ts";
import {queryClient} from "@/query/queryClient.tsx";
import ConfigQueryKey from "@/config/config-query-key.ts";
import {toast} from "sonner";

export const studentAction = async ({request}: ActionFunctionArgs) => {
    switch (request.method) {
        case "GET": {
            return GetController(request.formData());
        }
        case "POST": {
            return PostController(request.formData());
        }
        case "DELETE": {
            return DeleteController(request.formData());
        }
        default: {
            throw json<ResponseThrow>({
                message: "Method not allowed",
                success: false,
            }, 405);
        }
    }
}

async function GetController(promiseFormData: Promise<FormData>) {
    const formData = await promiseFormData;
    const ids = formData.get("ids") as string | null;
    if (ids === null) {
        return json<ResponseThrow>({
            message: "Bad request",
            success: false,
        }, 400);
    }
    try {
        // const response = await StudentService.getStudents(isNaN(Number(ids)) ? ids.split(",").map(Number) : Number(ids));
        const response = await StudentService.getStudents(Number(ids));
        return json<ResponseRouterSuccess>({
            message: "Students retrieved",
            success: true,
            data: response,
        });
    } catch (error) {
        const err = error as AxiosError;
        toast.error(`${err.message}`);
        return json<ResponseThrow>({
            message: err.message,
            success: false,
        }, err.response?.status || 401);
    }
}

async function PostController(promiseFormData: Promise<FormData>) {
    const formData = await promiseFormData;
    const ids = formData.get("ids") as string | null;
    if (typeof ids === "string") {
        return DeleteController(promiseFormData);
    }

    try {
        const response = await StudentService.createStudentByFormData(formData);
        if (response !== undefined && response.success) {
            await queryClient.invalidateQueries({queryKey: [...ConfigQueryKey.STUDENTS]});
            toast.success(`${response.message}`);
            return redirect("/students");
        }
    } catch (error) {
        const err = error as AxiosError;
        toast.error(`${err.message}`);
        throw json<ResponseThrow>({
            message: err.message,
            success: false,
        }, 401);
    }
}

async function DeleteController(promiseFormData: Promise<FormData>) {
    const formData = await promiseFormData;
    const ids = formData.get("ids") as string | null;
    if (ids === null) {
        return json<ResponseThrow>({
            message: "Bad request",
            success: false,
        }, 400);
    }
    try {
        const response = await StudentService.deleteStudent(isNaN(Number(ids)) ? ids.split(",").map(Number) : Number(ids));
        if (response !== undefined && response.success) {
           await queryClient.invalidateQueries({queryKey: [...ConfigQueryKey.STUDENTS]});
            toast.success(`${response.message}`);
        }
        return json<ResponseThrow>({
            message: "Student deleted",
            success: true,
        });
    } catch (error) {
        const err = error as AxiosError;
        return json<ResponseThrow>({
            message: err.message,
            success: false,
        }, err.response?.status || 401);
    }
}