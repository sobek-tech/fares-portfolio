import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitle {
  readonly eyebrow = input('');
  readonly title = input('');
  readonly description = input('');
  readonly align = input<'left' | 'center'>('left');
  readonly headingId = input('');
}
