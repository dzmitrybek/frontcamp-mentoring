import { Injectable } from '@angular/core';
import { CONFIG } from '@config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NewsModel } from '../models/news.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
  ) {}

  public getToNews(pageSize, page): Observable<NewsModel[]> {
    return this.http.get(CONFIG.DEFAULT_NEWS_URL,
        { params: { pageSize, page } })
      .pipe(
        map((data: any) => {
          return data.articles ? data.articles.map(this.mapToNewsItem) : [];
        })
      );
  }

  public searchNews(searchText): Observable<NewsModel[]> {
    return this.http.get(CONFIG.SEARCH_NEWS_URL,
        { params: { q: searchText } })
      .pipe(
        map((data: any) => {
          return data.articles ? data.articles.map(this.mapToNewsItem) : [];
        })
      );
  }

  private mapToNewsItem(item): NewsModel {
    return {
      source: item.source ? {
        id: item.source.id,
        name: item.source.name
      } : {},
      author: item.author,
      title: item.title,
      description: item.description,
      url: item.url,
      urlToImage: item.urlToImage,
      publishedAt: new Date(item.publishedAt),
      content: item.content
    };
  }

}
