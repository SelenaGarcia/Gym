import { Action } from "@ngrx/store";
import { Exercise } from "./exercise.model";

export const SET_AVAILABLE_EXERCISES = '[TRAINING] Set Available Exercises'
export const SET_FINISHED_EXERCISES = '[TRAINING] Set Finished Exercises'
export const START_TRAINING = '[TRAINING] Start Training'
export const STOP_TRAINING = '[TRAINING] Stop Training'

export class SetAvailableExercises implements Action{
    type = SET_AVAILABLE_EXERCISES;

    constructor(public payload: Exercise[]){}
}

export class SetFinishedExercises implements Action{
    type = SET_FINISHED_EXERCISES;

    constructor(public payload: Exercise[]){}
}

export class StartTraining implements Action{
    type = START_TRAINING;

    constructor(public payload: string){}
}

export class StopTraining implements Action{
    type = STOP_TRAINING;

    constructor(public payload?: any){}
}

export type TrainingActions = SetAvailableExercises | SetFinishedExercises | StartTraining | StopTraining;