import { Component, OnInit, Input } from '@angular/core';
import { NewsModel } from '@app/core/models/news.model';
import { CONFIG } from '@config/config';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() item: NewsModel;
  public noImageUrl = CONFIG.NO_IMAGE_URL;

  constructor() { }

  ngOnInit() { }

}
