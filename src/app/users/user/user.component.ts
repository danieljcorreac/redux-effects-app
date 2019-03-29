import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { User } from 'src/app/models/user.model';
import * as fromActions from '../../store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  loading: boolean;
  error: any;

  constructor(private route: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('user').subscribe(user => {
      this.user = user.user;
      this.loading = user.loading;
      this.error = user.error;
    });

    this.route.params.subscribe(params => {
      const id = params['id'];

      this.store.dispatch(new fromActions.LoadUser(id));
    });
  }
}
