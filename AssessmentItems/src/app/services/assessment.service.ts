import { Injectable } from '@angular/core';
import { Assessment } from '../entities/assessment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class AssessmentService {
  private assessmentsUrl = 'api/assessments';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(this.assessmentsUrl).pipe(
           tap(() => this.log('retreived assessments')),
           catchError(this.handleError('getAssessments', []))
    );
  }
}