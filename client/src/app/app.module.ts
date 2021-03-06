// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./partials/header/header.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { SurveyComponent } from "./pages/survey/survey.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

// Services
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import {
  JwtModule,
  JwtHelperService,
  JwtInterceptor
} from "@auth0/angular-jwt";
import { ResultsComponent } from "./pages/results/results.component";
import { CreateComponent } from "./pages/create/create.component";
import { QuestionsComponent } from "./pages/questions/questions.component";
import { EditComponent } from "./pages/edit/edit.component";
import { DeleteQuestionsComponent } from "./pages/delete-questions/delete-questions.component";
import { AnswerComponent } from "./pages/answer/answer.component";

// Route Guards
export function jwtTokenGetter() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SurveyComponent,
    LoginComponent,
    RegisterComponent,
    ResultsComponent,
    CreateComponent,
    QuestionsComponent,
    EditComponent,
    DeleteQuestionsComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
