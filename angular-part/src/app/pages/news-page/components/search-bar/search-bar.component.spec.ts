import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call doSearch() correctly by clicking on search button', () => {
    const searchInput: HTMLInputElement = fixture.nativeElement.querySelector('.search-field');
    const searchDebugBtn: DebugElement = fixture.debugElement.query(By.css('button'));
    const searchText = 'some search text';

    const spy = spyOn(component, 'doSearch');

    searchInput.value = searchText;

    searchDebugBtn.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalledWith(searchText);
  });

  it('should call doSearch() correctly by pressing Enter button in the search input', () => {
    const searchInput: HTMLInputElement = fixture.nativeElement.querySelector('.search-field');
    const searchDebugInput: DebugElement = fixture.debugElement.query(By.css('.search-field'));
    const searchText = 'some search text';

    const spy = spyOn(component, 'doSearch');

    searchInput.value = searchText;

    searchDebugInput.triggerEventHandler('keyup.enter', null);

    expect(spy).toHaveBeenCalledWith(searchText);
  });

  it('doSearch should triger emit of search event with correct data', () => {
    const spy = spyOn(component.search, 'emit');
    const searchText = 'some search text';

    component.doSearch(searchText);
    expect(spy).toHaveBeenCalledWith(searchText);
  });
});
