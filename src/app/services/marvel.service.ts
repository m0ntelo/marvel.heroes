import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ApiResponse } from '@models/api-response.model'
import { Character } from '@models/character.model'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js'
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private readonly baseUrl = environment.API_URL
  private readonly publicKey = environment.MARVEL_PUBLIC_KEY
  private readonly privateKey = environment.MARVEL_PRIVATE_KEY

  constructor(
    private http: HttpClient) {}

  private generateHash(): { ts: string; hash: string } {
    const ts = new Date().getTime().toString()
    const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString()
    return { ts, hash }
  }

  public getCharacters(limit: number, offset: number): Observable<ApiResponse<Character>> {
    const { ts, hash } = this.generateHash();
    return this.http.get<ApiResponse<Character>>(`${this.baseUrl}characters`, {
      params: {
        apikey: this.publicKey,
        ts,
        hash,
        limit: limit.toString(),
        offset: offset.toString(),
      },
    }).pipe(
      catchError((error) => {
        return throwError(() => error)
      })
    )
  }

  public getCharacterById(id: number): Observable<ApiResponse<Character>> {
    const { ts, hash } = this.generateHash();
    return this.http.get<ApiResponse<Character>>(
      `${this.baseUrl}characters/${id}`,
      { params: { apikey: this.publicKey, ts, hash } }
    )
  }
}