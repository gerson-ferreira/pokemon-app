import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './reducers';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: !environment.production,
        strictActionTypeUniqueness: !environment.production,
      },
    }),
  ],
})
export class AppStoreModule {}
