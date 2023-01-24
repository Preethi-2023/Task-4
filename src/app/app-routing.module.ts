import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { CommentComponent } from './comment/comment.component';
import { PhotoComponent } from './photo/photo.component';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"post", component:PostComponent},
  {path:"comment", component:CommentComponent},
  {path:"photo", component:PhotoComponent},
  {path:"album", component:AlbumComponent},
  {path:"todo", component:TodoComponent},
  {path:"user", component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
