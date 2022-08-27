import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  
  navigate() {
    this.route.navigate(["/search/results"], {});
  }

}
