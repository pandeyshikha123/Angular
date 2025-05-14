import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'; // 👈 Import FormsModule

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DatetimeComponent } from './datetime/datetime.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DatetimeComponent // ✅ Import DatetimeComponent here as a standalone component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
