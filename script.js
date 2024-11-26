document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const bar = entry.target;
            if (entry.isIntersecting) {
                const targetWidth = bar.getAttribute("data-target-width");
                bar.style.width = targetWidth;
            } else {
                bar.style.width = "0"; // Reset width for reanimation
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});

import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

npm install @angular/animations

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        animate(
          '1s ease-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ConnectComponent {}
