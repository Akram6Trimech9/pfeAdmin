import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClarityModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adminPanel';
}
