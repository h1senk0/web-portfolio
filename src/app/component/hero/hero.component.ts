import { Component, ChangeDetectorRef, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('fadeInSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroComponent {
  showExtraProjects: boolean = false;

  projects = [
    {
      title: 'Moonix.cz',
      type: 'Webová stránka',
      description: 'Moderní stránky pro začínající Minecraft projekt s hráčskou integrací a funkčním vlastním obchodem.',
      image: 'https://i.imgur.com/uLccv2Z.png',
      link: 'https://hisenshowcase.github.io/moonix-showcase/',
      tech: [
        '<i class="fa-brands fa-html5"></i>',
        '<i class="fa-brands fa-css3"></i>',
        '<i class="fa-brands fa-angular"></i>',
        '<i class="fa-brands fa-paypal"></i>'
      ],      
      status: 'Public',
      year: 2021,
      customLinkText: ' moonix.cz',  // Custom link text
      actualLink: 'https://hisenshowcase.github.io/moonix-showcase/'  // The hidden actual link
    },
    {
      title: 'eSaveItem',
      type: 'Herní plugin - Minecraft',
      description: 'Originální tvůrce oblíbeného pluginu do Minecraftu. Předmět, který vám zachrání vaše předměty. Vysoce konfigurovatelný.',
      image: 'https://i.imgur.com/AH8Giub.png',
      link: 'https://www.spigotmc.org/resources/%E2%9C%A8-esaveitem-%E2%9C%A8-keep-inventory-item-that-will-save-inventory-and-levels-after-death-1-8-1-20.105971/',
      tech: [
        '<i class="fa-brands fa-java"></i>',
        '<i class="fa-solid fa-photo-film"></i>',
        '<i class="fa-solid fa-database"></i>'
      ],          
      status: 'Public',
      year: 2020,
      customLinkText: ' spigot.org/esi',  // Custom link text
      actualLink: 'https://www.spigotmc.org/resources/%E2%9C%A8-esaveitem-%E2%9C%A8-keep-inventory-item-that-will-save-inventory-and-levels-after-death-1-8-1-20.105971/'  // The hidden actual link
    },
    {
      title: 'Starlex Bot',
      type: 'Discord bot',
      description: 'Discord bot s unikátním ticket, moderačním, reputačním a hudebním systémem. Mnoho jedinečných příkazů a funkcí.',
      image: 'https://i.imgur.com/HXmWqyh.png',
      link: 'Nedostupný',
      tech: [
        '<i class="fa-brands fa-java"></i>',
        '<i class="fa-brands fa-discord"></i>',
        '<i class="fa-solid fa-server"></i>',

      ],          
      status: 'Private',
      year: 2022,
      customLinkText: ' Neveřejný',  // Custom link text
      actualLink: '_blank'  // The hidden actual link
    },
    {
      title: 'Ethernal.cz',
      type: 'Komplexní herní plugin',
      description: 'Obrovský Minecraft plugin, který řídil celý server – od uživatelských dat po zabezpečení a herní funkce. Více než 3 roky vývoje.',
      image: 'https://i.imgur.com/9dS6ujf.png',
      link: 'Nedostupný',
      tech: [
        '<i class="fa-brands fa-java"></i>',
        '<i class="fa-solid fa-database"></i>',
        '<i class="fa-solid fa-server"></i>'

      ],  
      status: 'Private',
      year: 2019,
      customLinkText: ' Neveřejný',  // Custom link text
      actualLink: '_blank'  // The hidden actual link
    },
    {
      title: 'Trailer - Ethernal',
      type: 'Trailer - Adobe After Effects',
      description: 'Trailer pro projekt Ethernal sestříhaný primárně v Adobe AE s občasným použitím Adobe Premiere, Photoshopu a Replay modu.',
      image: 'https://i.imgur.com/FAIkuPW.png',
      link: 'https://youtu.be/FxTT80Sc45M',
      tech: [
        '<i class="fa-solid fa-file-video"></i>',
        '<i class="fa-solid fa-photo-film"></i>',
        '<i class="fa-brands fa-youtube"></i>',
      ],        
      status: 'Public',
      year: 2023,
      customLinkText: ' youtube.com/hisen',  // Custom link text
      actualLink: 'https://youtu.be/FxTT80Sc45M'  // The hidden actual link
    },
    {
      title: 'CityClub Hranice',
      type: 'Webová stránka',
      description: 'Stránka pro oblíbený klub v Hranicích na Moravě. Drink menu, nadcházející akce, time-line akcí a mnohem více.',
      image: 'https://i.imgur.com/cRDtfTg.png',
      link: 'https://www.ficnar.xyz',
      tech: [
        '<i class="fa-brands fa-html5"></i>',
        '<i class="fa-brands fa-css3"></i>',
        '<i class="fa-brands fa-angular"></i>'
      ],       
      status: 'In Development',
      year: 2024,
      customLinkText: ' Ve Vývoji',  // Custom link text
      actualLink: 'https://www.ficnar.xyz'  // The hidden actual link
    }
  ];

  extraProjects = [
    {
      title: 'Trailer - Ethernal',
      type: 'Trailer - Adobe After Effects',
      description: 'Trailer pro projekt Ethernal sestříhaný primárně v Adobe AE s občasným použitím Adobe Premiere, Photoshopu a Replay modu.',
      image: 'https://i.imgur.com/FAIkuPW.png',
      link: 'https://youtu.be/FxTT80Sc45M',
      tech: [
        '<i class="fa-solid fa-file-video"></i>',
        '<i class="fa-solid fa-photo-film"></i>',
        '<i class="fa-brands fa-youtube"></i>',
      ],        
      status: 'Public',
      year: 2023,
      customLinkText: ' youtube.com/hisen',
      actualLink: 'https://youtu.be/FxTT80Sc45M'
    },
    {
      title: 'CityClub Hranice',
      type: 'Webová stránka',
      description: 'Stránka pro oblíbený klub v Hranicích na Moravě. Drink menu, nadcházející akce, time-line akcí a mnohem více.',
      image: 'https://i.imgur.com/cRDtfTg.png',
      link: 'https://www.cityclubhranice.cz',
      tech: [
        '<i class="fa-brands fa-html5"></i>',
        '<i class="fa-brands fa-css3"></i>',
        '<i class="fa-brands fa-angular"></i>'
      ],       
      status: 'In Development',
      year: 2024,
      customLinkText: ' Ve Vývoji',
      actualLink: 'https://www.cityclubhranice.cz'
    }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.applyAnimations();
  }

  applyAnimations() {
    // Convert NodeList to an array with specific type HTMLElement[]
    const elements: HTMLElement[] = Array.from(this.el.nativeElement.querySelectorAll('.animate'));
  
    elements.forEach((element: HTMLElement) => {
      this.renderer.addClass(element, 'animated');
    });
  }

  toggleProjects(): void {
    console.log('Toggling projects');
    this.showExtraProjects = !this.showExtraProjects;
  }
  
}
