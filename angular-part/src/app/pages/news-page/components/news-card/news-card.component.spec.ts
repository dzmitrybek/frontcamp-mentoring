import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardComponent } from './news-card.component';
import { SharedModule } from '@app/shared/shared.module';
import { NewsModel } from '@app/core/models/news.model';
import { DatePipe } from '@angular/common';

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

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    component.item = fakeNewsItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correctly', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    expect(cardElement.querySelector('.news-title').textContent).toBe(fakeNewsItem.title);
    expect(cardElement.querySelector('.news-img').getAttribute('src')).toBe(fakeNewsItem.urlToImage);
    expect(cardElement.querySelector('.news-description').textContent).toBe(fakeNewsItem.description);
    expect(cardElement.querySelector('.news-source').textContent).toBe(fakeNewsItem.source.name);
    expect(cardElement.querySelector('.news-date').textContent).toBe(new DatePipe('en-US').transform(fakeNewsItem.publishedAt));
    expect(cardElement.querySelector('.news-link').getAttribute('href')).toBe(fakeNewsItem.url);
  });

  it('should render correct card for non-editable mode', () => {
    expect(component.editable).toBeFalsy();
    const cardElement: HTMLElement = fixture.nativeElement;
    expect(cardElement.querySelector('.action-bar')).toBeFalsy();
  });

  it('should render correct card for editable mode', () => {
    component.editable = true;
    fixture.detectChanges();
    const cardElement: HTMLElement = fixture.nativeElement;
    expect(cardElement.querySelector('.action-bar')).toBeTruthy();
  });

  it('editItem should triger emit of edit event with correct data', () => {
    const spy = spyOn(component.edit, 'emit');
    component.editItem();
    expect(spy).toHaveBeenCalledWith(fakeNewsItem);
  });

  it('deleteItem should triger emit of delete event with correct data', () => {
    const spy = spyOn(component.delete, 'emit');
    component.deleteItem();
    expect(spy).toHaveBeenCalledWith(fakeNewsItem);
  });
});
