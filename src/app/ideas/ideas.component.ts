import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CbuttonComponent } from "../cbutton/cbutton.component";

@Component({
  selector: 'app-ideas',
  standalone: true,
  imports: [NgFor, CbuttonComponent],
  templateUrl: './ideas.component.html',
  styleUrl: './ideas.component.scss'
})
export class IdeasComponent {
 achievemnets = [
  {quantity: '25+', desc: 'Years of building growth'},
  {quantity: '10+', desc: 'Industries served'},
  {quantity: 'XX+', desc: 'Projects completed'},
 ];

 certifications = [
  {imgUrl: '../../assets/ideas/certification1.png'},
  {imgUrl: '../../assets/ideas/certification2.png'},
  {imgUrl: '../../assets/ideas/certification3.png'},
  {imgUrl: '../../assets/ideas/certification4.png'},
  {imgUrl: '../../assets/ideas/certification5.png'},
 ];
}
