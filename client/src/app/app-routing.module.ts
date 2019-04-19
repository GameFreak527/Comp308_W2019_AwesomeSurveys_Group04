import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from "./pages/home/home.component";
import { SurveyComponent } from "./pages/survey/survey.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { CreateComponent } from "./pages/create/create.component";
import { QuestionsComponent } from "./pages/questions/questions.component";
import { ResultsComponent } from "./pages/results/results.component";
import { EditComponent } from "./pages/edit/edit.component";
import { DeleteQuestionsComponent } from "./pages/delete-questions/delete-questions.component";

import { AnswerComponent } from "./pages/answer/answer.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  // {path: "survey",component: SurveyComponent,data: { title: "Survey" },canActivate: [AuthGuard]},
  { path: "survey", component: SurveyComponent, data: { title: "Survey" } },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register" }
  },
  { path: "login", component: LoginComponent, data: { title: "Register" } },
  { path: "logout", redirectTo: "/login", pathMatch: "full" },

  {
    path: "create",
    component: CreateComponent,
    data: { title: "Create A Survey" },
    canActivate: [AuthGuard]
  },
  {
    path: "edit/:id",
    component: EditComponent,
    data: { title: "Edit Your Survey" },
    canActivate: [AuthGuard]
  },

  {
    path: "delete/:id",
    component: DeleteQuestionsComponent,
    data: { title: "You have deleted" },
    canActivate: [AuthGuard]
  },

  {
    path: "questions",
    component: QuestionsComponent,
    data: { title: "Create Your Questions!" }
  },
  {
    path: "results",
    component: ResultsComponent,
    data: { title: "Here are the Results!" }
  },
  {
    path: "create",
    component: CreateComponent,
    data: { title: "Create A Survey" },
    canActivate: [AuthGuard]
  },
  {
    path: "edit/:id",
    component: EditComponent,
    data: { title: "Edit Your Survey" },
    canActivate: [AuthGuard]
  },

  {
    path: "answer/:id",
    component: AnswerComponent,
    data: { title: "Enter your Answer" }
  },

  {
    path: "results/:id",
    component: ResultsComponent,
    data: { title: "Here are the Results!" }
  },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
