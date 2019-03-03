import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewsService } from './news.service';
import { NewsModel } from '../models/news.model';
import { CONFIG } from '@config/config';

const fakeRawNewsData = `{
  "status": "ok",
  "totalResults": 36,
  "articles": [
      {
          "source": {
              "id": null,
              "name": "Npr.org"
          },
          "_id": "123",
          "title": "The Chicken Is Local, But Was It Happy? GPS Now Tells The Life Story Of Your Poultry - NPR",
          "description": "GPS bracelets attached to chickens might soon allow you to know.",
          "url": "https://www.npr.org/2019/02/24/697185878",
          "urlToImage": "https://media.npr.org/assets/img/2019/02/22",
          "publishedAt": "2019-02-24T12:40:00Z",
          "content": "A GPS tracker strapped to the leg of a chicken means"
      }
  ]
}`;


const fakeNewsItem: NewsModel  = new NewsModel(
  {
    id: null,
    name: 'Npr.org'
  },
  'The Chicken Is Local, But Was It Happy? GPS Now Tells The Life Story Of Your Poultry - NPR',
  'GPS bracelets attached to chickens might soon allow you to know.',
  'https://www.npr.org/2019/02/24/697185878',
  'https://media.npr.org/assets/img/2019/02/22',
  new Date('2019-02-24T12:40:00Z'),
  'A GPS tracker strapped to the leg of a chicken means',
  '123'
);

describe('NewsService', () => {
  let httpMock: HttpTestingController;
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(NewsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getToNews(): should get the default news data', () => {
    service.getToNews(1, 1).subscribe((data: NewsModel[]) => {
      expect(data.length).toBe(1);
      expect(data[0]).toEqual(fakeNewsItem);
    });

    const request = httpMock.expectOne(`${CONFIG.DEFAULT_NEWS_URL}&pageSize=1&page=1`);

    expect(request.request.method).toBe('GET');
    request.flush(JSON.parse(fakeRawNewsData));
  });

  it('getUserNews(): should get the user data', () => {
    service.getUserNews().subscribe((data: NewsModel[]) => {
      expect(data.length).toBe(1);
    });

    const request = httpMock.expectOne(`${CONFIG.MY_NEWS_URL}`);

    expect(request.request.method).toBe('GET');
    request.flush(JSON.parse(fakeRawNewsData).articles);
  });

  it('updateUserNews(): should create update request correctly', () => {
    service.updateUserNews(fakeNewsItem).subscribe(() => {});

    const request = httpMock.expectOne(`${CONFIG.MY_NEWS_URL}/${fakeNewsItem._id}`);

    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(fakeNewsItem);

    request.flush({});
  });

  it('addUserNews(): should create add request correctly', () => {
    service.addUserNews(fakeNewsItem).subscribe(() => {});

    const request = httpMock.expectOne(`${CONFIG.MY_NEWS_URL}`);

    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(fakeNewsItem);

    request.flush({});
  });

  it('deleteUserNews(): should create delete request correctly', () => {
    service.deleteUserNews(fakeNewsItem).subscribe(() => {});

    const request = httpMock.expectOne(`${CONFIG.MY_NEWS_URL}/${fakeNewsItem._id}`);

    expect(request.request.method).toBe('DELETE');

    request.flush({});
  });

  it('setEditableNews() and getEditableNews(): should set and get editable news', () => {
    service.setEditableNews(fakeNewsItem);

    expect(service.getEditableNews()).toEqual(fakeNewsItem);
  });

  it('searchNews(): should search the news correctly', () => {
    const searchText = 'someSearchText';
    service.searchNews(searchText).subscribe((data: NewsModel[]) => {
      expect(data.length).toBe(1);
    });

    const request = httpMock.expectOne(`${CONFIG.SEARCH_NEWS_URL}&q=${searchText}`);

    expect(request.request.method).toBe('GET');
    request.flush(JSON.parse(fakeRawNewsData));
  });
});
