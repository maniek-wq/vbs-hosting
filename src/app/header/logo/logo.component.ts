import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../../state.service';
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  logoUrl: string | ArrayBuffer | null = '';
  hideInput = true;

  constructor(public stateService: StateService) {}

  // checkForm() {
  //   this.stateService.setFinishedState(false);
  // }

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

  hideButton() {
    if (confirm('Czy na pewno wszystko jest poprawne? Potwierdzenie sprawi, że dokument będzie ostateczną formą do druku, tudzież zapisu do pdf')) {
      this.hideInput = false;
      this.stateService.setFinishedState(false);
    }else{
      this.stateService.setFinishedState(true);
    }
  }
}
