import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms"
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HighlighterDirective } from './highlighter.directive';
import { CreditcardDirective } from './creditcard.directive';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { arrRouting } from "./app.routing";
import { AnimationComponent } from './animation/animation.component';
import { AlphabetsDirective } from './alphabets.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { AadharcardDirective } from './aadharcard.directive';
import { VoteridDirective } from './voterid.directive';
import { DisableControlDirective } from './disable-control.directive';
import { TrialComponent } from './trial/trial.component';
import { ShowdataComponent } from './animation/showdata/showdata.component';
import { CommonModule } from '@angular/common';
import { HttpinterceptorstokanService } from './httpinterceptorstokan.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlighterDirective,
    CreditcardDirective,HeaderComponent,
    PagenotfoundComponent,
    AnimationComponent,
    AlphabetsDirective,
    NumbersOnlyDirective,
    AadharcardDirective,
    VoteridDirective,
    DisableControlDirective,
    TrialComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule,
    arrRouting,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpinterceptorstokanService,
      multi:true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
