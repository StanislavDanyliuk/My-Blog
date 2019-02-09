import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostPageComponent } from './new-post-page/new-post-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [

{path: 'new', component: NewPostPageComponent },
{path: 'home', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
