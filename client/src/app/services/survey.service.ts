import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SurveyAnswer } from "../models/survey-answer";
import { SurveyQuestion } from "../models/survey-question";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  private answer: SurveyAnswer;
  private question: SurveyQuestion;

  private endpoint = "http://localhost:3000/api/survey/";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) {}

  //Gets Contact List
  public getQuestionList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  //creates and adds Question
  public addQuestion(question: SurveyQuestion): Observable<any> {
    return this.http.post<any>(
      this.endpoint + "addquestion",
      question,
      this.httpOptions
    );
  }

  //creates and adds answer
  public addAnswer(answer: SurveyAnswer): Observable<any> {
    return this.http.post<any>(
      this.endpoint + "addanswer",
      answer,
      this.httpOptions
    );
  }

  //The post request for edit question
  public editQuestion(question: SurveyQuestion): Observable<any> {
    return this.http.post<any>(
      this.endpoint + "editquestion/" + question._id,
      question,
      this.httpOptions
    );
  }

  //The get request for edit question page
  public getEditQuestionPage(question: SurveyQuestion): Observable<any> {
    return this.http.get<any>(this.endpoint + question._id, this.httpOptions);
  }

  //This Method Deletes Question
  public deleteQuestion(question: SurveyQuestion): Observable<any> {
    return this.http.get<any>(this.endpoint + question._id, this.httpOptions);
  }

  //This get the specific question from id
  public getSpecificQuestion(question: SurveyQuestion): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "question/" + question._id,
      this.httpOptions
    );
  }

  //Get the result of question and list of answers
  public getResultOfAnswers(question: SurveyQuestion): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "answers/" + question._id,
      this.httpOptions
    );
  }
}
