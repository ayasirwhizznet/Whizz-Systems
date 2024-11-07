import { NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CbuttonComponent } from "../cbutton/cbutton.component";

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [NgIf, CbuttonComponent],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.scss'
})
export class ServicesCardComponent {
 
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() content: string = '';


  
}
