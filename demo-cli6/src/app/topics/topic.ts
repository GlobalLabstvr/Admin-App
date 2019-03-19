import { Subject } from "../subjects/subject";

export class Topic {
    id: number;
    name: string;
    description: string;
    subject: Subject;
    
    constructor(subject?:Subject){
        this.subject = subject;
    }
}