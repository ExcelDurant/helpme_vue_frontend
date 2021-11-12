export interface Task {
    _id:string;
    name:string;
    description:string;
    category: string[];
    address: {
        country: string;
        city: string;
        street: string;
    };
    location: {
        latitude:string;
        longitude:string;
    };
    start_date: Date;
    end_date: Date;
    reward: number;
    pictures: string[];
    proposals: number;
    proposers: string[];
    assigned_to: string;
    status: string;
    is_completed: boolean;
    created_on: Date;
    created_by: string;
}