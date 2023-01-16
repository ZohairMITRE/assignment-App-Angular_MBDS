import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  assignments = [
    {
      nom:"Angular de Mr Zohair et BUFFA",
      dateDeRendu : "2022-01-25",
      rendu : true
    },
    {
      nom:"Angular de Mr Nicolas Pasquier",
      dateDeRendu : "2022-01-25",
      rendu : true
    },
    {
      nom:"Angular de Mr MOPOLO",
      dateDeRendu : "2022-01-25",
      rendu : false
    }
  ]

}
