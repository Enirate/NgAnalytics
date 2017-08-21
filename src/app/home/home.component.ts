import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from '../google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  knowMore(){
    this.router.navigateByUrl('/about');
    this.googleAnalyticsService.registerEvent("testCategory", "click on About", "testLabel", 10)

  }

}
