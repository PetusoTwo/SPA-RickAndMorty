import { Component } from '@angular/core';
import { HerosService } from '../../services/heros.services'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [NgFor],
  templateUrl: './heros.component.html',
})

  
export class HerosComponent {
  heroes:any[]=[];
constructor(private _herosService: HerosService){
}

  ngOnInit(){
    this.heroes = this._herosService.getHeros();
    console.log(this.heroes);
  }

}

