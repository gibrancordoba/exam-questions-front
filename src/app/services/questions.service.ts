import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Question } from '../models/question';
import { QUESTIONS } from '../mocks/mock-questions';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
    return of(QUESTIONS);
  }

}
