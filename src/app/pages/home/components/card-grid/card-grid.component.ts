import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon';
import { PokemonFiltro, PokemonService } from 'src/app/core/services/pokemons.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonsDetail: any = [];
  loading: boolean = false;
  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    let pokemonFiltro = new PokemonFiltro;
    pokemonFiltro.offset = "0";
    pokemonFiltro.limit = "100";

    this.loading = true;

    this.pokemonService.pesquisar(pokemonFiltro).subscribe(pokemons => {
      this.pokemons = pokemons.results;

      // Cria um array de observables
      const detailRequests = this.pokemons.map((pokemon: any, index) =>
        this.pokemonService.buscarPorCodigo(index + 1)
      );

      // Executa todas as requisições e aguarda todas completarem
      forkJoin(detailRequests).subscribe(detailResults => {
        this.pokemonsDetail = detailResults;
        console.log(this.pokemonsDetail);

        // Adiciona um delay mínimo de 1 segundo antes de esconder o loading
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }, error => {
        console.error('Erro ao carregar detalhes:', error);
        this.loading = false;
      });
    }, error => {
      console.error('Erro ao pesquisar pokemons:', error);
      this.loading = false;
    });
  }


}
