import {Topic} from "../topics/topic";
import { Site } from "../sites/site";
import { Playlist } from "../playlists/playlist";
import { Program } from "../programs/program";
import { Document} from "../documents/document";
export class Slide {
    id: number;
    name: string;
    description: string;
    image: string;
    master: string;
    student: string;
    program?: Program;
    playlist?: Playlist;
    site?: Site;
    document?: Document;
   
    topic: Topic;  

    
    constructor(topic?:Topic){
        this.topic = topic;
        this.playlist = new Playlist();
        this.site = new Site();
        this.program = new Program();
        this.document = new Document();
    }
    

}