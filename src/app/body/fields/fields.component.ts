import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../../state.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-fields',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.css'
})
export class FieldsComponent implements OnInit{
  logoUrl: string | ArrayBuffer | null = '';
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.logoUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  isFinished: boolean = true;
  constructor(public stateService: StateService) {}
  ngOnInit() {
    this.stateService.isFinished$.subscribe((state) => {
      this.isFinished = state;
    });
  }
}
