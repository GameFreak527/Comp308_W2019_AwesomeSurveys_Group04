import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyQuestion } from 'src/app/models/survey-question';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public questionObj : SurveyQuestion;

  constructor(
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { 
    this.questionObj = new SurveyQuestion();
  }

  ngOnInit() {
    this.onPageLoad();
  }

  onQuestionSubmit():void{
    //Perform edit

    this.surveyService.editQuestion(this.questionObj).subscribe(data=>{
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/survey']);
      }
      else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/survey']);
      }
    });
  }

  onPageLoad():void{
    this.activatedRoute.params.subscribe(params=>{
      this.questionObj._id = params.id;
    });
    this.surveyService.getEditQuestionPage(this.questionObj).subscribe(data=>{
      if(data.success){
        this.questionObj = data.question;
        
      }
      else{
        console.log("ERROR");
      }
    });
  }

}
