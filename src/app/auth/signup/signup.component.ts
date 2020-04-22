import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;

  isLoading$: Observable<boolean>;
  //private loadingSubs: Subscription;

  constructor(private authService: AuthService,    
    private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);   
    this.maxDate = new FormControl(new Date(2018,11,15));
  }

  onSubmit(form: NgForm){
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }
}
