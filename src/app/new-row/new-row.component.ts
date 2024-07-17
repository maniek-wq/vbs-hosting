import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayersListComponent } from '../body/players-list/players-list.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../header/logo/logo.component';
import { StateService } from '../../state.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-new-row',
  standalone: true,
  templateUrl: './new-row.component.html',
  styleUrl: './new-row.component.css',
  imports: [
    PlayersListComponent,
    CommonModule,
    LogoComponent,
  ],
})
export class NewRowComponent implements OnInit {
  className = String;

  @Input() rowData: any;
  @Input() rowIndex!: number;
  @Output() rowRemoved = new EventEmitter<number>();

  isFinished: boolean = true;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.isFinished$.subscribe((state) => {
      this.isFinished = state;
    });
  }
  removeRow() {
    if (confirm('Na pewno chcesz usunąć ten wiersz?')) {
      this.rowRemoved.emit(this.rowIndex);
    }
  }


}
