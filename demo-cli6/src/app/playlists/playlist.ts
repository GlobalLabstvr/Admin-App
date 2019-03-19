import { Topic } from "../topics/topic";

export class Playlist {
    id: number;
    name: string;
    description: string;
    topic: Topic;    

constructor(topic?:Topic){
    this.topic = topic;
}
}