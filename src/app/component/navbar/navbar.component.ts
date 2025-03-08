import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Scroll to the given section smoothly
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // Subtract navbar height if it's fixed
        behavior: 'smooth'           // Smooth scrolling behavior
      });
    }
  }
}
