import {ActionFunctionArgs} from "@remix-run/router/utils.ts";
import {json} from "react-router-dom";
import {ResponseThrow} from "@/types/ResponseThrow.ts";
import {convertFormDataToObject} from "@/utils/convert-formData-to-object.ts";
import {AxiosError} from "axios";
import StudentService from "@/services/studentService.ts";

export const studentAction = async ({request}: ActionFunctionArgs) => {
    switch (request.method) {
        case "GET": {
            console.log("GET");
            return {};
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
            }, 405);
        }
    }
}

async function PostController(promiseFormData: Promise<FormData>) {
    const formData = await promiseFormData;
    const ids = formData.get("ids") as string | null;
    if (typeof ids === "string") {
        return DeleteController(promiseFormData);
    }

    const dataObject = convertFormDataToObject(formData);
    try {
        await StudentService.createStudent({
            gender: dataObject.gender as string,
            email: dataObject.email as string,
            first_name: dataObject.first_name as string,
            last_name: dataObject.last_name as string,
            birth_date: null,
        });
    } catch (error) {
        // TODO: translate this error message
        const err = error as AxiosError;
        throw json<ResponseThrow>({
            message: err.message,
        }, 401);
    }
    return {};
}

async function DeleteController(promiseFormData: Promise<FormData>) {
    const formData = await promiseFormData;
    const ids = formData.get("ids") as string | null;
    if (ids === null) {
        throw json<ResponseThrow>({
            message: "Bad request",
        }, 400);
    }
    try {
        await StudentService.deleteStudent(isNaN(Number(ids)) ? ids.split(",").map(Number) : Number(ids));
    } catch (error) {
        // TODO: translate this error message
        const err = error as AxiosError;
        throw json<ResponseThrow>({
            message: err.message,
        }, err.response?.status || 401);
    }
    return {};
}