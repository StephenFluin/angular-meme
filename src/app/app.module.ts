import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PopularComponent } from './popular/popular.component';
import { NewComponent } from './new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { TemplatePickerComponent } from './new/template-picker/template-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemeComponent } from './meme/meme.component';
import { MemeFeedbackComponent } from './meme-feedback/meme-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavigationComponent,
    PopularComponent,
    NewComponent,
    TemplatePickerComponent,
    MemeComponent,
    MemeFeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: '/popular'},
      {path: 'popular', component: PopularComponent},
      {path: 'new', component: NewComponent},
      // ,
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
