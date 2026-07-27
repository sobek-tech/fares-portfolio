import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionTitle } from '../../shared/components/section-title/section-title';

interface BackgroundFact {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'app-about',
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly paragraphs: readonly string[] = [
    'I am a Data Engineering and Analytics graduate from the Technical University of Munich, with experience in software development, automation, data processing, and cloud and DevOps practices.',
    'My background includes building automation tools, backend services, CI/CD pipelines, and containerized applications with technologies including Python, Java, SQL, Spring Boot, PostgreSQL, Docker, Kubernetes, GitLab CI/CD, REST APIs, and Google Apps Script.',
    'I am interested in data engineering, backend development, cloud infrastructure, and DevOps/SRE, and I am open to junior or entry-level opportunities where I can contribute, learn, and grow.',
  ];

  readonly facts: readonly BackgroundFact[] = [
    { label: 'Based in', value: 'Munich, Germany' },
    { label: 'Graduate degree', value: 'M.Sc. Data Engineering & Analytics' },
    { label: 'Languages', value: 'Arabic (native), English (fluent)' },
  ];
}
