import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { SurveyAnswer } from 'src/app/models/survey-answer';
import { SurveyQuestion } from 'src/app/models/survey-question';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  public answerObj :SurveyAnswer;
  public questionObj : SurveyQuestion;
  private user : any;
  private userId :String;
  private username : String;


  constructor(private activatedRoute : ActivatedRoute,
    private surveyService : SurveyService,
    private flashMessage : FlashMessagesService,
    private router : Router ) {
    this.answerObj = new SurveyAnswer(); 
    this.questionObj = new SurveyQuestion();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user == null){
      //Well basically do nothing
    }
    else{
      this.userId = this.user["id"];
      this.username = this.user["username"];
    }
    this.fetchQuestionInfo();
  }

  onAnswerSubmit(){
    this.answerObj.question_id = this.questionObj._id;
    this.answerObj.user_id = this.userId;
    this.answerObj.username = this.username;
    this.surveyService.addAnswer(this.answerObj).subscribe(data=>{
      if (data.success) {
        console.log(this.answerObj);
        this.flashMessage.show("Your answer is sumitted", {
          cssClass: "alert-success",
          timeOut: 3000
        });
        this.router.navigate(["/survey"]);
      } else {
        this.flashMessage.show("An error occured", {
          cssClass: "alert-danger",
          timeOut: 3000
        });
        this.router.navigate(["/home"]);
      }
    })
  }

  fetchQuestionInfo():void {
    this.activatedRoute.params.subscribe(params=>{
      this.questionObj._id = params.id;

      this.surveyService.getSpecificQuestion(this.questionObj).subscribe(data=>{
        this.questionObj = data.question;
      })

    }); 
  }

}
