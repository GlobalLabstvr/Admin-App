import { Course } from "../courses/course";

export class Subject {
    id: number;
    name: string;
    description: string;
    course: Course;   
    
    constructor(course?:Course){
        this.course = course;
    }
}