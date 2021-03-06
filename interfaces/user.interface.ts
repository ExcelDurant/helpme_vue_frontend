export interface User {
    _id:string;
    first_name:string;
    last_name:string;
    email:string;
    phone_number:string;
    sec_phone_number:string;
    is_helper:boolean;
    registered_on:Date;
    birthday:Date;
    city:string;
    country:string;
    street:string;
    description:string;
    education: string;
    categories: string[];
    job:string;
    languages:string[];
    skills:string[];
    reviews_number:number;
    average_reviews:number;
    photoUrl:string;
    created_tasks: number;
    completed_tasks: number;
    is_verified: boolean;
    cash: number;
}