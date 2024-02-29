import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturemoduleComponent } from './featuremodule.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturemoduleComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home-one',
      },
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'terms',
        loadChildren: () =>
          import('./terms-condition/terms-condition.module').then((m) => m.TermsConditionModule),
      }
      ,
      {
        path: 'privacy',
        loadChildren: () =>
          import('./privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blogs/blog.module').then((m) => m.BlogGridSidebarModule),
      },
      {
        path: 'blog-details/:id',
        loadChildren: () =>
          import('./blog-details/blog-details.module').then((m) => m.BlogDetailsModule),
      },
      {
        path: 'collage-details',
        loadChildren: () =>
          import('./collage-details/collage-details.module').then((m) => m.CollageDetailsModules),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./collage-list/collage-list.module').then((m) => m.CollageListModule),
      },
      {
        path: 'college-predictor',
        loadChildren: () =>
          import('./college-predictor/college-predictor.module').then((m) => m.CollegePredictorModule),
      },
      {
        path: 'college-predictor-details',
        loadChildren: () =>
          import('./college-predictor-details/college-predictor-details-routing.module').then((m) => m.CollegePredictorDetailsRouting),
      },
      {
        path: 'by-location',
        loadChildren: () =>
          import('./list-by-location/list-by-location-routing.module').then((m) => m.ListByLocationRoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturemoduleRoutingModule {}
