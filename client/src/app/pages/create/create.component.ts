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
  dropDownOptions : number[];
  selectedOption : number;
  date : Date;

  constructor(
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.surveyQuestion = new SurveyQuestion();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userId = this.user["id"];
    this.username = this.user["username"];

    //Setting up default value for the lifetime date 
    this.selectedOption = 1;
    this.dropDownOptions = new Array<number>();
    this.dropDownOptions = [1,3,5,7];

    this.date = new Date(Date.now());
  }

  onQuestionSubmit(): void {
    this.surveyQuestion.user_id = this.userId; 
    this.surveyQuestion.username = this.username;

    //setting up the lifetime date for survey active 

    //for some reason i cant directly add selected option into getDate because it is giving me wrong numbers
    this.date.setDate(parseInt(this.selectedOption.toString()) + parseInt(this.date.getDate().toString()));

    //This will somehow encode the whole date into one number which is easy to compare
    this.surveyQuestion.lifetime = this.date.valueOf();
    this.surveyService.addQuestion(this.surveyQuestion).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("Your questions were created and it will expire on "+ this.date, {
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

  test(){
    
    // console.log(this.date.valueOf());
    // this.date.setDate(this.date.getDate()+18);
    // console.log(this.date.valueOf());
  }
}
