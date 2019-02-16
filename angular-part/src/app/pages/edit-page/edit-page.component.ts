import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      this.initForm(this.editableNews);
      this.newsService.setEditableNews(null);
  }

  public save() {
    const newsItem = NewsModel.convertFormDataToNews(this.newsForm.value);
    if (this.isEditMode) {
      newsItem._id = this.editableNews._id;
      this.newsService.updateUserNews(newsItem)
        .subscribe(() => this.router.navigate(['/news/my-news']));
    } else {
      this.newsService.addUserNews(newsItem)
        .subscribe(() => this.router.navigate(['/news/my-news']));
    }
  }

  public cancel() {
    this.router.navigate(['/news/my-news']);
  }

  public initForm(item: NewsModel) {
    this.newsForm = new FormGroup({
      title: new FormControl(item ? item.title : '', [
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl(item ? item.description : ''),
      content: new FormControl(item ? item.content : ''),
      source: new FormControl(item ? item.source.name : ''),
      urlToImage: new FormControl(item ? item.urlToImage : ''),
      sourceUrl: new FormControl(item ? item.url : ''),
      publishedAt: new FormControl(item ? item.publishedAt : new Date(), [
        Validators.required
      ]),
    });
  }

}
