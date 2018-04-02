import { Component } from '@angular/core';
import { Math } from 'core-js/library/web/timers';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    emoji = ['😁', '😋', '🤩', '😝'];
    activeEmoji: string;
    changeEmoji() {
        // Not Working Math.floor();
        // const number = Math.floor(Math.random() * 11);
        this.activeEmoji = this.emoji[2];
    }
}
