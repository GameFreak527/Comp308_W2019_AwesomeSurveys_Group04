import { Component, OnInit } from "@angular/core";
import { SurveyQuestion } from "src/app/models/survey-question";
import { SurveyAnswer } from "src/app/models/survey-answer";
import { SurveyService } from "src/app/services/survey.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  public questionObj: SurveyQuestion;
  public ansList: SurveyAnswer[];
  constructor(
    private surveyService: SurveyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.questionObj = new SurveyQuestion();
    this.ansList = new Array<SurveyAnswer>();
  }

  ngOnInit() {
    this.getQuestion();
    this.getListOfAnswers();
  }

  getQuestion() {
    this.activatedRoute.params.subscribe(params => {
      this.questionObj._id = params.id;
    });
    this.surveyService.getSpecificQuestion(this.questionObj).subscribe(data => {
      this.questionObj = data.question;
    });
  }

  getListOfAnswers() {
    this.surveyService.getResultOfAnswers(this.questionObj).subscribe(data => {
      this.ansList = data.answerList;
      console.log(data);
    });
  }

  printResults(): void {
    let printContents, popupWin;
    printContents = document.getElementById("print-section").innerHTML;
    popupWin = window.open("", "new div", "height=400,width=600");
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
       <link rel="stylesheet" href="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"  type="text/css" media="all">
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`);
    popupWin.document.close();
  }
}
