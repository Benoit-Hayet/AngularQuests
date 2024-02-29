import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlockComponent,UserProfileComponent,FormsModule,DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components';
}
