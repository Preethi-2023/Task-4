import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { AlbumComponent } from './album/album.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { PhotoComponent } from './photo/photo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table'


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    AlbumComponent,
    UserComponent,
    TodoComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
