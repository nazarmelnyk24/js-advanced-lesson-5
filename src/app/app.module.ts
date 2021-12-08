import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { UserlistComponent } from './pages/works/userlist/userlist.component';
import { HomeComponent } from './pages/home/home.component';
import { TasklistComponent } from './pages/works/tasklist/tasklist.component';
import { OutputComponent } from './pages/works/tasklist/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksComponent,
    CenzorComponent,
    UserlistComponent,
    HomeComponent,
    TasklistComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
