import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from '../google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //class property that will enable or disable our button
  btnIsDisabled:boolean = false;

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  knowMore(){
    this.router.navigateByUrl('/about');
    this.googleAnalyticsService.registerEvent("testCategory", "click on About", "testLabel", 10);

  }

  enableButton(){
    if(confirm("Are you sure you want to disable this button?"))
    {
      this.btnIsDisabled = true;
      this.googleAnalyticsService.registerEvent("mouseEnterCategory", "mouse over action", "testLabel", 50)
    }
  }

}
