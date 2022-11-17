import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchLogsComponent } from './search-logs/search-logs.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SearchFormComponent, SearchLogsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
