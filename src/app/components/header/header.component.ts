import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, FormsModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleMenu(event: MouseEvent | TouchEvent): void {
    
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    const nav: HTMLElement | null = document.getElementById('nav');
    if (nav) {
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');
      (event.currentTarget as HTMLElement).setAttribute('aria-expanded', active.toString());
      if (active) {
        (event.currentTarget as HTMLElement).setAttribute('aria-label', 'Fechar Menu');
      } else {
        (event.currentTarget as HTMLElement).setAttribute('aria-label', 'Abrir Menu');
      }
    }
}
    isDarkMode: boolean = false;

  constructor() { }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    const bodyElement = document.body;
    if (this.isDarkMode) {
      bodyElement.classList.add('dark');
      bodyElement.classList.remove('light');
    } else {
      bodyElement.classList.add('light');
      bodyElement.classList.remove('dark');
    }
  }

  }

  


