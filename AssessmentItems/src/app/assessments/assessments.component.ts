import { Component, OnInit } from '@angular/core';
import { Assessment } from '../entities/assessment';
import { AssessmentService } from '../services/assessment.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  assessments: Assessment[];

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit() {
    
  }

}