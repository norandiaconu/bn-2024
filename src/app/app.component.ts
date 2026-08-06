import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    protected title = 'bn-2024';
    protected days = signal<number>(0);
    protected hours = signal<number>(0);
    protected minutes = signal<number>(0);
    protected seconds = signal<number>(0);

    constructor() {
        const countDownDate = new Date('Nov 16, 2024 15:00:00').getTime();
        setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            this.days.set(Math.floor(distance / 86400000));
            this.hours.set(Math.floor((distance % 86400000) / 3600000));
            this.minutes.set(Math.floor((distance % 3600000) / 60000));
            this.seconds.set(Math.floor((distance % 60000) / 1000));
        }, 1000);
    }

    protected scroll(el: HTMLElement): void {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
