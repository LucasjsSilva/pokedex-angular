import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PokemoneDetail } from "../models/pokemoneDetail";
import { environment } from "src/environments/environment";
import { Pokemon } from "../models/pokemon";

export class PokemonFiltro {
  limit?: string;
  offset?: string;
}

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/pokemon`;
  }

  pesquisar(filtro: PokemonFiltro): Observable<Pokemon> {
    let params: any = {};
    if (filtro.limit) {
      params.limit = filtro.limit;
    }
    if (filtro.offset) {
      params.offset = filtro.offset;
    }

    return this.http.get<any>(this.url, { params });
  }

  buscarPorCodigo(id: number): Observable<PokemoneDetail> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
