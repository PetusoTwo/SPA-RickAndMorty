import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(private router:Router){

  }
  ngOnInit(){

  }
  
  buscarPersonaje( termino:string){
    //console.log(termino)
    this.router.navigate(['/buscar', termino]);
  
  }
}
