import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboard'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for unauthenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
        ]
    },

     // Admin routes
     {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        data: {
            layout: 'compact'
        },
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'dashboard', loadChildren: ()=> import('app/records/dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'school', loadChildren: ()=> import('app/records/school/school.module').then(m => m.SchoolModule)},
            {path: 'churches', loadChildren: ()=> import('app/records/church/church.module').then(m => m.ChurchModule)},
            {path: 'finance', loadChildren: ()=> import('app/records/finance/finance.module').then(m => m.FinanceModule)},
            {path: 'project', loadChildren: ()=> import('app/records/project/project.module').then(m => m.ProjectModule)},
            {path: 'humanresources', loadChildren: ()=> import('app/records/humanresources/humanresources.module').then(m => m.HumanresourcesModule)},

            {path: 'ministry', loadChildren: ()=> import('app/records/ministry/ministry.module').then(m => m.MinistryModule)},
            {path: 'province', loadChildren: ()=> import('app/records/province/province.module').then(m => m.ProvinceModule)},
            {path: 'procurement', loadChildren: ()=> import('app/records/procurement/procurement.module').then(m => m.ProcurementModule)},
        ]
    }

];
