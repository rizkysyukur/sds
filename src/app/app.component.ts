import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'sds_system';
}
