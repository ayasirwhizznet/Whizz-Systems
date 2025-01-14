import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  // iframeSrc: string = "https://your-pipedrive-form-link.com"; // Replace with your form URL
  // iframeHeight: number = 600; // Default height for the iframe

  // @ViewChild('pipedriveIframe')
  // iframe!: ElementRef;

  // constructor() {}

  // ngOnInit(): void {
  //   // Listen for messages from the iframe
  //   window.addEventListener('message', this.onIframeMessage.bind(this), false);
  // }

  // // Handle messages from the iframe
  // onIframeMessage(event: MessageEvent): void {
  //   // Ensure the message is from the trusted origin (Pipedrive form URL)
  //   if (event.origin === "https://your-pipedrive-form-link.com") {
  //     const { height } = event.data;
  //     if (height) {
  //       this.iframeHeight = height; // Dynamically update iframe height
  //     }
  //   }
  // }
}