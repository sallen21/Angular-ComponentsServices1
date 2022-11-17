import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contacts/contact/contact.component'; 

import { SkillsService } from './services/skills.service';
import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
