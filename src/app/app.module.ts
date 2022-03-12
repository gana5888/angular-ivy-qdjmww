import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectDataComponent } from './project-data/project-data.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule],
  exports: [MatTabsModule],
  declarations: [AppComponent, ProjectDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
