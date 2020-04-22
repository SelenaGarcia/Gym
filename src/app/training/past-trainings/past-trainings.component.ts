import { Subscription } from 'rxjs';
import { TrainingService } from './../training.service';
import { Exercise } from './../exercise.model';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromTraining from '../training.reducer';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['date','name','calories', 'duration', 'state'];

  dataSource = new MatTableDataSource<Exercise>();

  exchangeSubscription: Subscription;

  constructor(private trainingService:TrainingService,
    private store: Store<fromTraining.State>) { }

  ngOnInit() {
    this.exchangeSubscription = this.store.select(fromTraining.getFinishedExercises)
    .subscribe((exercises: Exercise[])=>{
      console.log(exercises);
      this.dataSource.data = exercises;
    })
    this.trainingService.fetchCanceledOrCompletedExercises();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFiltering(filter:string){
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  ngOnDestroy(){
    if(this.exchangeSubscription){
      this.exchangeSubscription.unsubscribe();
    }
  }

}
