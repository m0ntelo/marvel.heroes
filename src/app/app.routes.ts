import { Routes } from '@angular/router'
import { CharacterListComponent } from './pages/character-list/character-list.component'
import { CharacterFormComponent } from './pages/character-form/character-form.component'

export const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/new', component: CharacterFormComponent },
  { path: 'characters/edit/:id', component: CharacterFormComponent },
  { path: '**', redirectTo: 'characters' }
]
