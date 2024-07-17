import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../header/logo/logo.component';
import { StateService } from '../../state.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './new-player.component.html',
  styleUrl: './new-player.component.css',
})
export class NewPlayerComponent implements OnInit {
  [x: string]: any;

  @Output() addRow = new EventEmitter<void>();

  onClick() {
    this.addRow.emit();
  }
  
  isFinished: boolean = true;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.isFinished$.subscribe((state) => {
      this.isFinished = state;
    });
  }
}
