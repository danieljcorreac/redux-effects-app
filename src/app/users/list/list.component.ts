import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.reducer';
import * as fromActions from '../../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('users').subscribe(users => {
      this.users = users.users;
      this.loading = users.loading;
      this.error = users.error;
    });

    this.store.dispatch(new fromActions.LoadUsers());
  }
}
