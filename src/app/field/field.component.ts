import { Component, AfterViewInit, ViewChild, ElementRef,EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../header/logo/logo.component';
import { OnInit } from '@angular/core';
import { StateService } from '../../state.service';
@Component({
  selector: 'app-field',
  standalone: true,
  imports: [LogoComponent,CommonModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent implements AfterViewInit, OnInit {
  isFinished: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.isFinished$.subscribe((state) => {
      this.isFinished = state;
    });
  }
  @ViewChildren('canvas') canvases!: QueryList<ElementRef<HTMLCanvasElement>>;
  private ctxs: CanvasRenderingContext2D[] = [];
  private painting: boolean = false;
  private color: string = 'red';
  private courtImage: ImageData[] = [];

  ngAfterViewInit() {
    this.canvases.forEach((canvas, index) => {
      const ctx = canvas.nativeElement.getContext('2d')!;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = this.color;
      this.ctxs.push(ctx);
      
      // Dodaj nasłuchiwacze zdarzeń
      canvas.nativeElement.addEventListener('mousedown', (event) => this.startPosition(event, index));
      canvas.nativeElement.addEventListener('mouseup', this.endPosition.bind(this));
      canvas.nativeElement.addEventListener('mousemove', (event) => this.draw(event, index));
      
      // Zapisz boisko po narysowaniu
      this.drawCourt(ctx);
      this.saveCourtImage(index); // Zapisz obrazek
  });
  }
  private startPosition(event: MouseEvent, index: number) {
    this.painting = true;
    const canvas = this.canvases.toArray()[index].nativeElement;
    const rect = canvas.getBoundingClientRect(); // Uzyskaj pozycję canvas

    const x = event.clientX - rect.left; // Skoryguj współrzędne X
    const y = event.clientY - rect.top;  // Skoryguj współrzędne Y

    this.ctxs[index].beginPath();
    this.ctxs[index].moveTo(x, y);
    this.draw(event, index); // Rozpocznij rysowanie
}

private endPosition() {
  this.painting = false;
  this.ctxs.forEach(ctx => ctx.beginPath()); // Resetuj wszystkie konteksty
}
  
  private drawCourt(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    
    const canvas = ctx.canvas;
    const thirdHeight = canvas.height / 4;

    ctx.beginPath();
    ctx.moveTo(0, thirdHeight - 10);
    ctx.lineTo(canvas.width, thirdHeight - 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 2 * thirdHeight - 20);
    ctx.lineTo(canvas.width, 2 * thirdHeight - 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 3 * thirdHeight - 30);
    ctx.lineTo(canvas.width, 3 * thirdHeight - 30);
    ctx.stroke();
  }

  private saveCourtImage(index: number) {
    const canvas = this.canvases.toArray()[index].nativeElement;
    this.courtImage[index] = this.ctxs[index].getImageData(0, 0, canvas.width, canvas.height);
}

private restoreCourtImage(index: number) {
    if (this.courtImage[index]) {
        this.ctxs[index].putImageData(this.courtImage[index], 0, 0);
    }
}
clearCanvas(index: number) {
  const canvas = this.canvases.toArray()[index].nativeElement;
  this.ctxs[index].clearRect(0, 0, canvas.width, canvas.height);
  this.restoreCourtImage(index);
}

changeColor(event: Event) {
  const color = (event.target as HTMLInputElement).value;
  this.ctxs.forEach(ctx => {
      ctx.strokeStyle = color; // Ustaw kolor dla każdego kontekstu
  });
}

 
  private draw(event: MouseEvent,index: number) {
    if (!this.painting) return;

    const canvas = this.canvases.toArray()[index].nativeElement;
    const rect = canvas.getBoundingClientRect(); // Uzyskaj pozycję canvas

    const x = event.clientX - rect.left; // Skoryguj współrzędne X
    const y = event.clientY - rect.top;  // Skoryguj współrzędne Y

    this.ctxs[index].lineTo(x, y);
    this.ctxs[index].stroke();
  }
 


}
