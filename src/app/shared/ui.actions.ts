import { Action } from "@ngrx/store";

export const START_LOADING = '[UI] Start Loading'
export const STOP_LOADING = '[UI] Stop Loading'

export class StartLoading implements Action{
    type = START_LOADING;
}

export class StopLoading implements Action{
    type = STOP_LOADING;
}

export type UIActions = StartLoading | StopLoading;