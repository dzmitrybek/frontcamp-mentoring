import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from '@app/pages/news-page/news-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

const routes: Routes = [
  { path: 'news/:type', component: NewsPageComponent},
  { path: 'edit', component: EditPageComponent},
  { path: 'create', component: EditPageComponent},
  { path: '**', redirectTo: 'news/world', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
