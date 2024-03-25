import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.scss'
})
export class EspecialidadesComponent {
  tecnologias = [
    { nome: 'Angular', icone: 'assets/icons-especialidades/angular.svg' },
    { nome: 'Java', icone: 'assets/icons-especialidades/java.svg' },
    { nome: 'Typescript', icone: 'assets/icons-especialidades/typescript.svg' },
    { nome: 'Mysql', icone: 'assets/icons-especialidades/mysql.svg' },
    { nome: 'Scss', icone: 'assets/icons-especialidades/sass.svg' },
    { nome: 'Php', icone: 'assets/icons-especialidades/php.svg' }
  ];
}
