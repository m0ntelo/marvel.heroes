import { Injectable, signal, computed } from '@angular/core';
import { Character } from '@models/character.model'

@Injectable({
  providedIn: 'root',
})
export class MarvelState {
  public characters = signal<Character[]>([])
  public loading = signal(false)
  public offset = signal(0)
  public total = signal(0)
  readonly allCharacters = computed(() => this.characters())
  
  public addCharacters(characters: Character[]): void {
    this.characters.update((current) => [...current, ...characters])
  }

  public getCharacterById(id: number): Character | undefined {
    return this.characters().find((char) => char.id === id)
  }

  public updateCharacter(updatedCharacter: Character): void {
    this.characters.update((current) =>
      current.map((char) => (char.id === updatedCharacter.id ? updatedCharacter : char))
    )
  }

  public deleteCharacter(id: number): void {
    this.characters.update((current) => current.filter((char) => char.id !== id))
  }

  public setLoading(isLoading: boolean): void {
    this.loading.set(isLoading)
  }

  public incrementOffset(value: number): void {
    this.offset.update((current) => current + value)
  }

  public setTotal(total: number): void {
    this.total.set(total);
  }
}
