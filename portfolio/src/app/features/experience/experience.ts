import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionTitle } from '../../shared/components/section-title/section-title';

interface WorkExperience {
  readonly company: string;
  readonly role: string;
  readonly employmentType: string;
  readonly period: string;
  readonly location: string;
  readonly responsibilities: readonly string[];
}

@Component({
  selector: 'app-experience',
  imports: [SectionTitle],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  readonly experiences: readonly WorkExperience[] = [
    {
      company: 'Airbus Defense & Space',
      role: 'Software Engineer: Nomination Tool Developer',
      employmentType: 'Working Student',
      period: 'Oct 2022 – Oct 2024',
      location: 'Munich, Germany',
      responsibilities: [
        'Developed and maintained an in-house Nomination Tool with Google Apps Script (JavaScript), digitizing the end-to-end nomination process and improving efficiency.',
        'Tested each version before release, resolved user problems and errors, and deployed releases while upgrading the tool from version 6 to version 11.',
        'Added features from stakeholder requirements, including a new nomination validation layer, automated Google Workspace data collection, and streamlined form and email creation.',
        'Improved the user experience through modularization and extensive automation while maintaining data coherence for the department.',
        'Supported daily operations, worked with key stakeholders, and continuously assessed performance and user feedback to guide improvements.',
      ],
    },
  ];
}
