import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionTitle } from '../../shared/components/section-title/section-title';

interface ContactMethod {
  readonly label: string;
  readonly value: string;
  readonly href?: string;
  readonly external?: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [SectionTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  readonly contactMethods: readonly ContactMethod[] = [
    {
      label: 'Email',
      value: 'Fares.sobky@gmail.com',
      href: 'mailto:Fares.sobky@gmail.com',
    },
    {
      label: 'Phone',
      value: '+49 177 5843940',
      href: 'tel:+491775843940',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/fares-elsobky',
      href: 'https://www.linkedin.com/in/fares-elsobky/',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/Fareselsobky99',
      href: 'https://github.com/Fareselsobky99',
      external: true,
    },
    {
      label: 'Location',
      value: 'Munich, Germany',
    },
  ];
}
