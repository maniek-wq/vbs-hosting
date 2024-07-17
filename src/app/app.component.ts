import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './header/logo/logo.component';
import { EventComponent } from './header/event/event.component';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './body/players-list/players-list.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NewRowComponent } from './new-row/new-row.component';
import { PredictedSquadComponent } from "./body/predicted-squad/predicted-squad.component";
import { FieldsComponent } from "./body/fields/fields.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        LogoComponent,
        EventComponent,
        PlayersListComponent,
        NewPlayerComponent,
        NewRowComponent,
        PredictedSquadComponent,
        FieldsComponent
    ]
})
export class AppComponent {
  title = 'VB-Statistics';
}
