import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionTitle } from '../../shared/components/section-title/section-title';

interface SkillGroup {
  readonly category: string;
  readonly skills: readonly string[];
}

@Component({
  selector: 'app-skills',
  imports: [SectionTitle],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  readonly skillGroups: readonly SkillGroup[] = [
    {
      category: 'Programming languages',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL'],
    },
    {
      category: 'Backend & web',
      skills: [
        'Spring Boot',
        'Spring Cloud',
        'Angular',
        'Flask',
        'REST APIs',
        'OAuth 2.0',
      ],
    },
    {
      category: 'AI & data',
      skills: [
        'PyTorch',
        'TensorFlow',
        'Deep Learning',
        'Reinforcement Learning',
        'Data Analysis',
        'Bayesian Optimization',
        'OpenCV',
      ],
    },
    {
      category: 'DevOps & cloud',
      skills: [
        'Docker',
        'Docker Compose',
        'Kubernetes',
        'GitLab CI/CD',
        'Azure',
      ],
    },
    {
      category: 'Databases & data access',
      skills: ['PostgreSQL', 'JDBC', 'JPA', 'Hibernate'],
    },
    {
      category: 'Testing & tools',
      skills: ['Playwright', 'Rest Assured', 'Git', 'Jira'],
    },
    {
      category: 'Platforms & other',
      skills: [
        'Google Apps Script',
        'Google Workspace',
        'SAP ABAP',
        'SAPUI5',
        'OData',
        'Raspberry Pi',
        'PySceneDetect',
      ],
    },
  ];
}
