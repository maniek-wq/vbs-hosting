import { Component,Renderer2, ElementRef, } from '@angular/core';
import { NewPlayerComponent } from '../../new-player/new-player.component';
import { NewRowComponent } from '../../new-row/new-row.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-players-list',
  standalone: true,
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css',
  imports: [NewPlayerComponent, NewRowComponent, CommonModule],
})
export class PlayersListComponent {
  rows: number[] = [];
  isExisting = true;
  check(){
    if(this.rows.length === 0){
      console.log("zaden wiersz nie istnieje!");
    }
  }
  addRow() {
    this.rows.push(this.rows.length + 1);
    if (this.rows.length >= 16) {
      if(confirm('Liczba zawodników jest większa niż przewidywana, czy chcesz kontynuować dodawanie zawodników?')){
        this.rows.push();
      }
      else{
        this.rows.pop();
      }
    }
    // if (document.body.scrollHeight > window.innerHeight) {
    //   window.alert("Tabela wykracza poza obszar pierwszej strony! Ale pamiętaj, że po kliknięciu w przycisk 'submit' u góry strony, ten obszar się skróci o dwa wiersze!");
    //   return;
    // }
  }

  removeRow(index: number) {
    if (index > -1) {
      this.rows.splice(index, 1);
    }
  }
}
