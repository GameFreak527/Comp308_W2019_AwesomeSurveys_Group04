import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { SurveyService } from 'src/app/services/survey.service';
import { SurveyQuestion } from 'src/app/models/survey-question';

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  public questionsList :SurveyQuestion[]; 
  private userId : any;
  public todayDate : number

  constructor(private authService: AuthService, private surveyService : SurveyService) {
    this.questionsList = new Array<SurveyQuestion>();
    if(this.isLoggedIn()){
      this.userId = (JSON.parse(localStorage.getItem('user'))["id"]);
    }
  }

  ngOnInit() {
    this.surveyService.getQuestionList().subscribe(data =>{
      if(data.success){
        this.questionsList = data.questionList;
        console.log(this.questionsList);
      }
    });
    this.todayDate = Date.now().valueOf();
    console.log(this.todayDate);
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
