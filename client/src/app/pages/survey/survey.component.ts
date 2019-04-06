import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
