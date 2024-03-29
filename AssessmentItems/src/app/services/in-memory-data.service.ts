import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Assessment } from '../entities/assessment';
import { Distractor } from '../entities/distractor';
import { Item } from '../entities/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let assessments = [
      { Id: 1, AssessmentName: 'Assessment One' },
      { Id: 2, AssessmentName: 'Assessment Two' },
      { Id: 3, AssessmentName: 'Assessment Three' }
    ];

    let items = [
      {ItemId: 1, AssessmentId: 1, ItemName: 'Item One', Distractors: [] },
      {ItemId: 2, AssessmentId: 1, ItemName: 'Item Two', Distractors: [] },
      {ItemId: 3, AssessmentId: 1, ItemName: 'Item Three', Distractors: [] },
      {ItemId: 4, AssessmentId: 1, ItemName: 'Item Four', Distractors: [] },
      {ItemId: 5, AssessmentId: 2, ItemName: 'Item One', Distractors: [] },
      {ItemId: 6, AssessmentId: 2, ItemName: 'Item Two', Distractors: [] },
      {ItemId: 7, AssessmentId: 2, ItemName: 'Item Three', Distractors: [] },
      {ItemId: 8, AssessmentId: 2, ItemName: 'Item Four', Distractors: [] },
      {ItemId: 9, AssessmentId: 3, ItemName: 'Item One', Distractors: [] },
      {ItemId: 10, AssessmentId: 3, ItemName: 'Item Two', Distractors: [] },
      {ItemId: 11, AssessmentId: 3, ItemName: 'Item Three', Distractors: [] },
      {ItemId: 12, AssessmentId: 3, ItemName: 'Item Four', Distractors: [] }
    ];

    let distractors = [
      {DistractorId: 1, ItemId: 1, DistractorName: 'Strongly Disagree'},
      {DistractorId: 2, ItemId: 1, DistractorName: 'Disagree'},
      {DistractorId: 3, ItemId: 1, DistractorName: 'Neutral'},
      {DistractorId: 4, ItemId: 1, DistractorName: 'Agree'},
      {DistractorId: 5, ItemId: 1, DistractorName: 'Strongly Agree'},
      {DistractorId: 6, ItemId: 2, DistractorName: 'Strongly Disagree'},
      {DistractorId: 7, ItemId: 2, DistractorName: 'Disagree'},
      {DistractorId: 8, ItemId: 2, DistractorName: 'Neutral'},
      {DistractorId: 9, ItemId: 2, DistractorName: 'Agree'},
      {DistractorId: 10, ItemId: 2, DistractorName: 'Strongly Agree'},
      {DistractorId: 11, ItemId: 3, DistractorName: 'Strongly Disagree'},
      {DistractorId: 12, ItemId: 3, DistractorName: 'Disagree'},
      {DistractorId: 13, ItemId: 3, DistractorName: 'Neutral'},
      {DistractorId: 14, ItemId: 3, DistractorName: 'Agree'},
      {DistractorId: 15, ItemId: 3, DistractorName: 'Strongly Agree'},
      {DistractorId: 16, ItemId: 4, DistractorName: 'Strongly Disagree'},
      {DistractorId: 17, ItemId: 4, DistractorName: 'Disagree'},
      {DistractorId: 18, ItemId: 4, DistractorName: 'Neutral'},
      {DistractorId: 19, ItemId: 4, DistractorName: 'Agree'},
      {DistractorId: 20, ItemId: 4, DistractorName: 'Strongly Agree'},
      {DistractorId: 21, ItemId: 5, DistractorName: 'Strongly Disagree'},
      {DistractorId: 22, ItemId: 5, DistractorName: 'Disagree'},
      {DistractorId: 23, ItemId: 5, DistractorName: 'Neutral'},
      {DistractorId: 24, ItemId: 5, DistractorName: 'Agree'},
      {DistractorId: 25, ItemId: 5, DistractorName: 'Strongly Agree'},
      {DistractorId: 26, ItemId: 6, DistractorName: 'Strongly Disagree'},
      {DistractorId: 27, ItemId: 6, DistractorName: 'Disagree'},
      {DistractorId: 28, ItemId: 6, DistractorName: 'Neutral'},
      {DistractorId: 29, ItemId: 6, DistractorName: 'Agree'},
      {DistractorId: 30, ItemId: 6, DistractorName: 'Strongly Agree'},
      {DistractorId: 31, ItemId: 7, DistractorName: 'Strongly Disagree'},
      {DistractorId: 32, ItemId: 7, DistractorName: 'Disagree'},
      {DistractorId: 33, ItemId: 7, DistractorName: 'Neutral'},
      {DistractorId: 34, ItemId: 7, DistractorName: 'Agree'},
      {DistractorId: 35, ItemId: 7, DistractorName: 'Strongly Agree'},
      {DistractorId: 36, ItemId: 8, DistractorName: 'Strongly Disagree'},
      {DistractorId: 37, ItemId: 8, DistractorName: 'Disagree'},
      {DistractorId: 38, ItemId: 8, DistractorName: 'Neutral'},
      {DistractorId: 39, ItemId: 8, DistractorName: 'Agree'},
      {DistractorId: 40, ItemId: 8, DistractorName: 'Strongly Agree'},
      {DistractorId: 41, ItemId: 9, DistractorName: 'Strongly Disagree'},
      {DistractorId: 42, ItemId: 9, DistractorName: 'Disagree'},
      {DistractorId: 43, ItemId: 9, DistractorName: 'Neutral'},
      {DistractorId: 44, ItemId: 9, DistractorName: 'Agree'},
      {DistractorId: 45, ItemId: 9, DistractorName: 'Strongly Agree'},
      {DistractorId: 46, ItemId: 10, DistractorName: 'Strongly Disagree'},
      {DistractorId: 47, ItemId: 10, DistractorName: 'Disagree'},
      {DistractorId: 48, ItemId: 10, DistractorName: 'Neutral'},
      {DistractorId: 49, ItemId: 10, DistractorName: 'Agree'},
      {DistractorId: 50, ItemId: 10, DistractorName: 'Strongly Agree'},
      {DistractorId: 51, ItemId: 11, DistractorName: 'Strongly Disagree'},
      {DistractorId: 52, ItemId: 11, DistractorName: 'Disagree'},
      {DistractorId: 53, ItemId: 11, DistractorName: 'Neutral'},
      {DistractorId: 54, ItemId: 11, DistractorName: 'Agree'},
      {DistractorId: 55, ItemId: 11, DistractorName: 'Strongly Agree'},
      {DistractorId: 56, ItemId: 12, DistractorName: 'Strongly Disagree'},
      {DistractorId: 57, ItemId: 12, DistractorName: 'Disagree'},
      {DistractorId: 58, ItemId: 12, DistractorName: 'Neutral'},
      {DistractorId: 59, ItemId: 12, DistractorName: 'Agree'},
      {DistractorId: 60, ItemId: 12, DistractorName: 'Strongly Agree'},
    ]

    return {assessments, items, distractors};
  }

  genId(assessments: Assessment[]): number {
    return assessments.length > 0 ? Math.max(...assessments.map(assessment => assessment.Id)) + 1 : 1;
  }
}
