import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NewsModel } from '@app/core/models/news.model';
import { CONFIG } from '@config/config';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() item: NewsModel;
  @Input() editable: false;

  @Output() edit: EventEmitter<NewsModel> = new EventEmitter<NewsModel>();
  @Output() delete: EventEmitter<NewsModel> = new EventEmitter<NewsModel>();
  public noImageUrl = CONFIG.NO_IMAGE_URL;

  constructor() { }

  public ngOnInit() { }

  public editItem() {
    this.edit.emit(this.item);
  }

  public deleteItem() {
    this.delete.emit(this.item);
  }

}
