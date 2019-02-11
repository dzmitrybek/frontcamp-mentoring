import { Component, OnInit } from '@angular/core';
import { NewsService } from '@app/core/services/news.service';
import { NewsModel } from '@app/core/models/news.model';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  public news: NewsModel[] = [];
  public userNews: NewsModel[] = [];
  public pageLimit = 18;
  public pageCounter = 1;

  constructor(
    private newsService: NewsService,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.initLoad();
  }

  public initLoad() {
    this.pageCounter = 1;
    this.news = [];
    this.loadNews();
    this.loadUserNews();
  }

  public loadNews() {
    this.newsService.getToNews(this.pageLimit, this.pageCounter++)
      .pipe(first())
      .subscribe((data) => {
        this.news = [...this.news, ...data];
      });
  }

  public loadUserNews() {
    this.newsService.getUserNews()
      .pipe(first())
      .subscribe((data) => {
        this.userNews = data;
      });
  }

  public search(value) {
    if (value) {
      this.newsService.searchNews(value)
        .pipe(first())
        .subscribe((data) => this.news = data);
    } else {
      this.initLoad();
    }
  }

  public editItem(item) {
    this.newsService.setEditableNews(item);
    this.router.navigate(['/edit']);
  }

}
