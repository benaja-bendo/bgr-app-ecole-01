export function convertFormDataToObject(formData: FormData) {
    return Object.fromEntries(formData.entries());
}