import { Component, HostListener, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarvelService } from '@services/marvel.service'
import { Character } from '@models/character.model'
import { RouterModule } from '@angular/router'
import { Router } from '@angular/router'
import { MarvelState } from '@state/marvel.state'

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports:[
    RouterModule,
    CommonModule
  ],
  providers: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit {
  public characters: Character[] = []
  private readonly limit = 20
  public loading = false
  
  constructor(
    private marvelService: MarvelService,
    public marvelState: MarvelState,
    private router: Router) {}
    
  ngOnInit(): void {
    if (this.marvelState.characters().length === 0) {
      this.loadCharacters()
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isBottomReached() && this.canLoadMore() && !this.marvelState.loading()) {
      this.loadCharacters()
    }
  }

  private isBottomReached(): boolean {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    return Math.ceil(scrollTop + clientHeight) >= scrollHeight - 50
  }
  
  private canLoadMore(): boolean {
    return this.marvelState.offset() < this.marvelState.total()
  }

  private loadCharacters(): void {

    this.marvelState.setLoading(true)
    this.loading = this.marvelState.loading()
    const offset = this.marvelState.offset()

    this.marvelService
        .getCharacters(this.limit, offset)
        .subscribe({
          next: (response) => {
            const { results, total } = response.data

            this.marvelState.addCharacters(results)
            this.marvelState.incrementOffset(this.limit)
            this.marvelState.setTotal(total)
            this.marvelState.setLoading(false)
          },
          error: (error) => {
            this.marvelState.setLoading(false)
            console.error('Erro ao carregar personagens:', error)
          },
        })
  }

  public getUrl(character: Character): string {
    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }

  public getDescription(text: string): string {
    return (text.length > 10 ? text.slice(0, 50) + '...' : 'Sem descrição disponível.')
  }

  public goToEdit(character: Character): void {
    this.router
        .navigate(['/characters/edit', character.id])
  }
  
  public goToRemove(character: Character): void {
    this.marvelState
        .deleteCharacter(character.id)
  }
}


