import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserDetails } from 'src/app/models/user';
import { UserApiService } from './user-api.service';

interface UserState {
  user: UserDetails | null;
}

@Injectable({
  providedIn: 'root',
})
export class UserStore extends ComponentStore<UserState> {
  readonly user$ = this.select((state) => state.user);
  readonly setUser = this.updater((state: UserState, user: UserDetails) => ({
    ...state,
    user,
  }));
  readonly getUser = this.effect((username: Observable<string>) =>
    username.pipe(
      switchMap((username) =>
        this.userApiS.getUser(username).pipe(
          tapResponse(
            (user) => this.setUser(user),
            (error) => this.logError(error)
          )
        )
      )
    )
  );

  constructor(private userApiS: UserApiService) {
    super({ user: null });
  }

  private logError(error: unknown) {
    console.error(error);
  }
}
