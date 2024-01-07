import HttpService from '@/services/HttpService.ts';
import {Tschool} from "@/types/Tschool.ts";
import {ResponseApi} from "@/types/ResponseApi.ts";

interface SchoolServiceProps {
    getAllSchools(): Promise<Tschool[]>;
    searchSchools(query: string): Promise<Tschool[]>;

}
class SchoolService implements SchoolServiceProps {
    async getAllSchools() {
        try {
            const response = await HttpService.get<ResponseApi<Tschool[]>>('/schools');
            return response.data.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async searchSchools(query: string) {
        try {
            const response = await HttpService.get<ResponseApi<Tschool[]>>(`/schools/search?query=${query}`);
            return response.data.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new SchoolService();