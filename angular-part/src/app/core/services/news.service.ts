import { Injectable } from '@angular/core';
import { CONFIG } from '@config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NewsModel } from '@app/core/models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _editableNews: NewsModel;

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

  public getUserNews(): Observable<NewsModel[]> {
    return this.http.get((CONFIG.MY_NEWS_URL))
      .pipe(
        map((data: any) => {
          return data ? data.map(this.mapToNewsItem) : [];
        })
      );
  }

  public updateUserNews(updateItem: NewsModel) {
    return this.http.put((`${CONFIG.MY_NEWS_URL}/${updateItem._id}`), updateItem);
  }

  public addUserNews(news: NewsModel) {
    return this.http.post((CONFIG.MY_NEWS_URL), news);
  }

  public deleteUserNews(news: NewsModel) {
    return this.http.delete((`${CONFIG.MY_NEWS_URL}/${news._id}`));
  }

  public getEditableNews(): NewsModel {
    return this._editableNews;
  }

  public setEditableNews(news: NewsModel) {
    this._editableNews = news;
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
    return new NewsModel(
      item.source ? {
            id: item.source.id,
            name: item.source.name
          } : {},
      item.title,
      item.description,
      item.url,
      item.urlToImage,
      new Date(item.publishedAt),
      item.content,
      item._id || null,
    );
  }

}
