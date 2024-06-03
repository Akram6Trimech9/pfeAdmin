import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../app/sign-up/sign-up.module').then(m => m.SignUpModule)
      }
];
