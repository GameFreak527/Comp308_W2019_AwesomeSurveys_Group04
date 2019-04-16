import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { SurveyService } from "src/app/services/survey.service";
import { SurveyQuestion } from "src/app/models/survey-question";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  user: any;
  userId :String;
  username : String;
  question : String;
  surveyQuestion: SurveyQuestion;

  constructor(
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.surveyQuestion = new SurveyQuestion();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userId = this.user["id"];
    this.username = this.user["username"];
  }

  onQuestionSubmit(): void {
    this.surveyQuestion.user_id = this.userId; 
    this.surveyQuestion.username = this.username;
    this.surveyService.addQuestion(this.surveyQuestion).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("Your questions were created", {
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
