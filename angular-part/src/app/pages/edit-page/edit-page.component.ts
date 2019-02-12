import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NewsService } from '@app/core/services/news.service';
import { NewsModel } from '@app/core/models/news.model';

const PageRouteConfig = {
  editMode: 'edit',
  createMode: 'create'
};

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public isEditMode = false;
  public newsForm: FormGroup;
  public editableNews: NewsModel;

  constructor(
    private activateRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
      this.isEditMode = this.activateRoute.routeConfig.path === PageRouteConfig.editMode;
      this.editableNews = this.newsService.getEditableNews();
      if (this.isEditMode && this.editableNews) {
        this.initFormWithData(this.editableNews);
      } else {
        this.initEmptyForm();
      }
  }

  public save() {
    const newsItem = this.newsService.convertFormDataToNews(this.newsForm.value);
    if (this.isEditMode) {
      newsItem.id = this.editableNews.id;
      this.newsService.updateUserNews(newsItem);
    } else {
      this.newsService.addUserNews(newsItem);
    }
    this.router.navigate(['/news']);
  }

  public initEmptyForm() {
    this.newsForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      content: new FormControl(),
      source: new FormControl(),
      urlToImage: new FormControl(),
      sourceUrl: new FormControl(),
      publishedAt: new FormControl(),
    });
  }

  public initFormWithData(item: NewsModel) {
    this.newsForm = new FormGroup({
      title: new FormControl(item.title),
      description: new FormControl(item.description),
      content: new FormControl(item.content),
      source: new FormControl(item.source.name),
      urlToImage: new FormControl(item.urlToImage),
      sourceUrl: new FormControl(item.url),
      publishedAt: new FormControl(item.publishedAt),
    });
  }

}
