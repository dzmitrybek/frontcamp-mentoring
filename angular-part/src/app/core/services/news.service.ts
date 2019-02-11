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
  private _userNews: NewsModel[] = [];
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
    return of(this._userNews);
  }

  public updateUserNews(updateItem: NewsModel) {
    const itemIndex =  this._userNews.findIndex((item) => item.id === updateItem.id);
    this._userNews[itemIndex] = updateItem;
  }

  public addUserNews(news: NewsModel) {
    this._userNews.push(news);
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

  public convertFormDataToNews(data): NewsModel {
    return {
      // temp id generation
      id: +new Date(),
      source: data.source ? {
        id: '',
        name: data.source
      } : { id: '', name: ''},
      title: data.title || '',
      description: data.description || '',
      url: data.sourceUrl || '',
      urlToImage: data.imageUrl || '',
      publishedAt: new Date(data.publishedAt),
      content: data.content || ''
    };
  }

  private mapToNewsItem(item): NewsModel {
    return {
      source: item.source ? {
        id: item.source.id,
        name: item.source.name
      } : {},
      title: item.title,
      description: item.description,
      url: item.url,
      urlToImage: item.urlToImage,
      publishedAt: new Date(item.publishedAt),
      content: item.content
    };
  }

}
