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
    job:string;
    languages:string[];
    skills:string[];
}