import { Injectable } from '@angular/core';
import { Distractor } from '../entities/distractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DistractorService {
  
}