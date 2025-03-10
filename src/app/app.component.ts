import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroComponent } from "./component/hero/hero.component";
import { ContactComponent } from "./component/contact/contact.component";
import { FooterComponent } from "./component/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ficnar';
}
