import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TopicFilter } from '../topic-filter';
import { TopicService } from '../topic.service';
import { Topic } from '../topic';

@Component({
    selector: 'topic',
    templateUrl: 'topic-list.component.html'
})
export class TopicListComponent {

    filter = new TopicFilter();
    selectedTopic: Topic;

    get topicList(): Topic[] {
        return this.topicService.topicList;
    }

    constructor(private topicService: TopicService) {
    }

    ngOnInit() {
        this.search();
    }

    search(): void {
        this.topicService.load(this.filter);
    }

    select(selected: Topic): void {
        this.selectedTopic = selected;
    }

}
