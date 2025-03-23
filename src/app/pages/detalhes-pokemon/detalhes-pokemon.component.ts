import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemons.service';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.scss']
})
export class DetalhesPokemonComponent implements OnInit {
  pokemon: any;
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.buscarPorCodigo(Number(id)).subscribe(pokemon => {
    this.pokemon = pokemon;
    console.log(this.pokemon);
  });
  }

}
