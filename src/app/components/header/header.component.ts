import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';






@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, FormsModule, CommonModule],
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
   


    darkMode: boolean = false;

    toggleDarkMode(event: Event) {
      const target = event.target as HTMLInputElement;
      this.darkMode = target.checked;
      if (this.darkMode) {
        document.body?.classList.add('dark');
      } else {
        document.body?.classList.remove('dark');
      }
    }

  }

  


