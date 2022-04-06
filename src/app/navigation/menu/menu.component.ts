import { Component, OnInit } from '@angular/core';
import { Nav } from './linkInterface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/register',
      name: 'Registro',
      exact: true,
      admin: false
    },
    {
      link: '/product-list',
      name: 'Produtos',
      exact: true,
      admin: false
    },
    {
      link: '/about',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/contact',
      name: 'Contatos',
      exact: true,
      admin: false
    },
    {
      link: '/features-data-binding',
      name: 'Funcionalidades',
      exact: true,
      admin: false
    },
  ]

}
