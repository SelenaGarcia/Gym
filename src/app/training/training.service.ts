import { Subscription } from 'rxjs';
import { map, take } from "rxjs/operators";
import { Exercise } from './exercise.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { UIService } from '../shared/ui.service';
import * as fromTraining from './training.reducer';
import { Store } from '@ngrx/store';
import * as UI from '../shared/ui.actions';
import * as Training from './training.actions';

@Injectable()
export class TrainingService{ 
   
          
    private suscriptions: Subscription[] = [];
   

     constructor(private db: AngularFirestore,
        private uiService: UIService,
        private store: Store<fromTraining.State>) {}

    fetchAvailableExercises(){
        this.store.dispatch(new UI.StartLoading())
        this.suscriptions.push(this.db.collection('availableExercises')
        .snapshotChanges()
        .pipe(
            map(docArray => {      
            return docArray.map(doc=>{
                    return {
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data() as Exercise
                    }
                })
            })
        )                
        .subscribe((exercises: Exercise[])=>{
            this.store.dispatch(new UI.StopLoading())
            this.store.dispatch(new Training.SetAvailableExercises(exercises));           
        }, error => {
            this.store.dispatch(new UI.StopLoading())
            this.uiService.showSnackBar("Error ocurred while fetchig exercises",null,3000);                   
        }));
    }

    startExercise(exerciseId: string){
        this.store.dispatch(new Training.StartTraining(exerciseId));       
    }

    completeExercise(){
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
            this.saveDataToDatabase({
                ...ex, 
                date: new Date(), 
                state: 'completed'});
            
            this.store.dispatch(new Training.StopTraining());
        });
        
    }

    cancelExercise(progress: number){
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {            
            this.saveDataToDatabase({
                ...ex, 
                duration: ex.duration * (progress / 100),
                calories: ex.calories * (progress / 100),
                date: new Date(), 
                state: 'cancelled'});
    
            this.store.dispatch(new Training.StopTraining());        
        });        
    }   

    fetchCanceledOrCompletedExercises(){
        this.suscriptions.push(this.db.collection('finishedExercises')
        .valueChanges()
        .subscribe((exercises: Exercise[])=>{
            this.store.dispatch(new Training.SetFinishedExercises(exercises));            
        }));
    }

    cancelSubscriptions(){
        this.suscriptions.forEach(sub => {
            sub.unsubscribe();
        })
    }

    private saveDataToDatabase(exercise: Exercise){
        this.db.collection('finishedExercises').add(exercise);
    }
}