import { Component, OnInit } from '@angular/core';
import { NewsService } from '@app/core/services/news.service';
import { NewsModel } from '@app/core/models/news.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  public news: NewsModel[] = [];
  public pageLimit = 18;
  public pageCounter = 1;

  constructor(
    private newsService: NewsService,
  ) { }

  public ngOnInit() {
    this.loadNews();
  }

  public loadNews() {
    this.newsService.getToNews(this.pageLimit, this.pageCounter++)
      .pipe(first())
      .subscribe((data) => {
        this.news = [...this.news, ...data];
      });
  }

  public search(value) {
    if (value) {
      this.newsService.searchNews(value)
        .pipe(first())
        .subscribe((data) => this.news = data);
    } else {
      this.pageCounter = 1;
      this.loadNews();
    }
  }

}
