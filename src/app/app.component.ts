import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PreloaderService } from './preloader.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Whizz';

  constructor(private preloader: PreloaderService) {}


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
