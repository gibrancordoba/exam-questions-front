import { Component, OnInit } from '@angular/core';

import { Question } from './../models/question';
import { QuestionService } from '../services/questions.service';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[];


  questionForm: FormGroup;
  items: any[] = [];



  constructor(
    private questionService: QuestionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getQuestions();
    this.questionForm = this.fb.group({
      title: '',
      description: '',
      type: '',
      options: this.fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      value: ''
    });
  }

  addItem(): void {
    this.items = this.questionForm.get('options') as FormArray;
    this.items.push(this.createItem());
  }

  deleteOption(option): void {
    console.log(option, this.items)
    if (this.items.controls && this.items.controls.length > 0)
      this.items.controls = this.items.controls.filter(o => o !== option);
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('titulo', form.value.title);
    console.log('description', form.value.description);
    console.log('options', form.value.options);
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  delete(question: Question): void {
    this.questions = this.questions.filter(q => q !== question);
  }
}
