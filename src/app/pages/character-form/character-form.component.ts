import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { Character } from '@models/character.model'
import { MarvelState } from '@state/marvel.state'

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.scss'
})
export class CharacterFormComponent implements OnInit {
  public character: Character = {
    id: 0,
    name: '',
    description: '',
    thumbnail: { path: '', extension: '' },
  }
  public isEditMode = false
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marvelState: MarvelState) {}

  ngOnInit(): void {
    this.getCharacterById()
  }

  public getCharacterById(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id) {
      const character = this.marvelState.getCharacterById(+id)

      if (character) {
        this.character = { ...character }
        this.isEditMode = true
      } else {
        this.router.navigate(['/characters'])
      }
    }
  }
  
  public goToSave(): void {
    if (this.character) {
      this.marvelState.updateCharacter(this.character)
      this.router.navigate(['/characters'])
    }
  }

  public goToCancel(): void {
    this.router.navigate(['/characters']);
  }
}

