import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../services/heros.services';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [NgFor],
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit{
  termino:string = '';
  heroes:any[] = []
  

  constructor( private activatedRoute: ActivatedRoute,
    private _herosService: HerosService
  ){}
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._herosService.buscarPersonajes( params['termino'])
      console.log(this.heroes);
    })
  }
}
