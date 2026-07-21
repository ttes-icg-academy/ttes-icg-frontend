import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grille-motif',
  standalone: true,
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 120 120" aria-hidden="true">
      @for (row of [0,1,2,3]; track row) {
        @for (col of [0,1,2,3]; track col) {
          <rect
            [attr.x]="col * 30 + 2"
            [attr.y]="row * 30 + 2"
            width="26"
            height="26"
            rx="4"
            [attr.fill]="(row + col) % 3 === 0 ? 'var(--gold)' : 'var(--navy-light)'"
            [attr.opacity]="(row + col) % 3 === 0 ? 1 : 0.15"
          />
        }
      }
    </svg>
  `,
})
export class GrilleMotifComponent {
  @Input() size = 120;
}
