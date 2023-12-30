export type Customer = {
    id: string;
    address: {
        city: string;
        country: string;
        state: string;
        street: string;
    };
    avatar: string;
    createdAt: number;
    email: string;
    name: string;
    phone: string;
}