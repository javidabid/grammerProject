import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'language-popover',
    loadChildren: () => import('./language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },
  {
    path: 'pro',
    loadChildren: () => import('./home/pages/pro/pro.module').then( m => m.ProPageModule)
  },
  {
    path: 'tense',
    loadChildren: () => import('./home/pages/tense/tense.module').then( m => m.TensePageModule)
  },
  {
    path: 'nouns',
    loadChildren: () => import('./home/pages/nouns/nouns.module').then( m => m.NounsPageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./home/pages/gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'simple-present',
    loadChildren: () => import('./home/pages/tense/simple-present/simple-present.module').then( m => m.SimplePresentPageModule)
  },
  {
    path: 'past-tense',
    loadChildren: () => import('./home/pages/tense/past-tense/past-tense.module').then( m => m.PastTensePageModule)
  },
  {
    path: 'continue-tense',
    loadChildren: () => import('./home/pages/tense/continue-tense/continue-tense.module').then( m => m.ContinueTensePageModule)
  },
  {
    path: 'future-tense',
    loadChildren: () => import('./home/pages/tense/future-tense/future-tense.module').then( m => m.FutureTensePageModule)
  },
  {
    path: 'perfect-tense',
    loadChildren: () => import('./home/pages/tense/perfect-tense/perfect-tense.module').then( m => m.PerfectTensePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'primary',
    loadChildren: () => import('./primary/primary.module').then( m => m.PrimaryPageModule)
  },
  {
    path: 'tobe',
    loadChildren: () => import('./main/tobe/tobe.module').then( m => m.TobePageModule)
  },
  {
    path: 'part',
    loadChildren: () => import('./home/pages/part/part.module').then( m => m.PartPageModule)
  },
  {
    path: 'adverb',
    loadChildren: () => import('./home/pages/adverb/adverb.module').then( m => m.AdverbPageModule)
  },
  {
    path: 'sentece',
    loadChildren: () => import('./home/pages/sentece/sentece.module').then( m => m.SentecePageModule)
  },
  {
    path: 'infinitive',
    loadChildren: () => import('./home/pages/infinitive/infinitive.module').then( m => m.InfinitivePageModule)
  },
  {
    path: 'gerund',
    loadChildren: () => import('./home/pages/gerund/gerund.module').then( m => m.GerundPageModule)
  },
  {
    path: 'regular',
    loadChildren: () => import('./home/pages/regular/regular.module').then( m => m.RegularPageModule)
  },
  {
    path: 'tagquestion',
    loadChildren: () => import('./home/pages/tagquestion/tagquestion.module').then( m => m.TagquestionPageModule)
  },
  {
    path: 'conditional',
    loadChildren: () => import('./home/pages/conditional/conditional.module').then( m => m.ConditionalPageModule)
  },
  {
    path: 'adjective',
    loadChildren: () => import('./home/pages/adjective/adjective.module').then( m => m.AdjectivePageModule)
  },
  {
    path: 'phonetics',
    loadChildren: () => import('./home/pages/phonetics/phonetics.module').then( m => m.PhoneticsPageModule)
  },
  {
    path: 'comma',
    loadChildren: () => import('./home/pages/comma/comma.module').then( m => m.CommaPageModule)
  },
  {
    path: 'intonation',
    loadChildren: () => import('./home/pages/intonation/intonation.module').then( m => m.IntonationPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
