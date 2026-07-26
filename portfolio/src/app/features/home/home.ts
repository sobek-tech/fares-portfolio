import { ChangeDetectionStrategy, Component } from '@angular/core';

interface HeroAction {
  readonly label: string;
  readonly href: string;
  readonly style: 'primary' | 'secondary';
  readonly download?: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly name = 'Fares Elsobky';
  readonly professionalTitle = 'Data Engineering & Analytics Graduate';
  readonly introduction =
    'Software engineer with experience in automation, data processing, backend services, CI/CD pipelines, and containerized applications.';

  readonly actions: readonly HeroAction[] = [
    { label: 'Explore my work', href: '#projects', style: 'primary' },
    { label: 'Contact me', href: '#contact', style: 'secondary' },
    {
      label: 'Download CV',
      href: 'CV.pdf',
      style: 'secondary',
      download: 'Fares-Elsobky-CV.pdf',
    },
  ];
}
