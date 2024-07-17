import { Component } from '@angular/core';
import { FieldComponent } from "../../field/field.component";

@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrl: './event.component.css',
    imports: [FieldComponent]
})
export class EventComponent {
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
}
