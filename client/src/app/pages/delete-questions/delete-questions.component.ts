import { Component, OnInit } from "@angular/core";

import { AuthService } from "src/app/services/auth.service";

import { SurveyService } from "src/app/services/survey.service";

import { SurveyQuestion } from "src/app/models/survey-question";

import { FlashMessagesService } from "angular2-flash-messages";

import { Router, ActivatedRoute } from "@angular/router";

import { User } from "src/app/models/user";

import { Variable } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "app-delete-questions",
  templateUrl: "./delete-questions.component.html",
  styleUrls: ["./delete-questions.component.css"]
})
export class DeleteQuestionsComponent implements OnInit {
  surveyQuestion: SurveyQuestion;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.surveyQuestion = new SurveyQuestion();

    this.activatedRoute.params.subscribe(params => {
      this.surveyQuestion._id = params.id;
    });

    this.onDeleteClick(this.surveyQuestion);
  }

  onDeleteClick(surveyQuestion: SurveyQuestion): void {
    this.surveyService.deleteQuestion(surveyQuestion).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("A deletion has occured", {
          cssClass: "alert-success",
          timeOut: 3000
        });
        this.router.navigate(["/survey"]);
      } else {
        this.flashMessage.show("An error occured", {
          cssClass: "alert-danger",
          timeOut: 3000
        });
        this.router.navigate(["/register"]);
      }
    });
  }
}
