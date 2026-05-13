import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { AboutComponent } from '../features/about/about.component';
import { ExperienceComponent } from '../features/experience/experience.component';
import { ProjectsComponent } from '../features/projects/projects.component';
import { ContactComponent } from '../features/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
