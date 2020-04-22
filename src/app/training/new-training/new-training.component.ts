import { Exercise } from './../exercise.model';
import { TrainingService } from './../training.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import * as fromTraining from '../training.reducer';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
 
  exercises$: Observable<Exercise[]>;  
  isLoading$: Observable<boolean>;  

  constructor(private trainingService: TrainingService,   
    private store: Store<fromTraining.State>) { }

  ngOnInit() {
    this.fetchAvailableExercises();
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);   
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
  }

  fetchAvailableExercises(){
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm){
    this.trainingService.startExercise(form.value.exercise);
  } 

}
