import { Component } from '@angular/core';
import { LogoComponent } from '../../header/logo/logo.component';
import { StateService } from '../../../state.service';

@Component({
  selector: 'app-predicted-squad',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './predicted-squad.component.html',
  styleUrl: './predicted-squad.component.css'
})
export class PredictedSquadComponent{
  
}
