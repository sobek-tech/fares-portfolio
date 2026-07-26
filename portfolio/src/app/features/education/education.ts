import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionTitle } from '../../shared/components/section-title/section-title';

interface EducationItem {
  readonly institution: string;
  readonly degree: string;
  readonly period: string;
  readonly location: string;
  readonly major: string;
  readonly minor?: string;
  readonly grade?: string;
  readonly thesis: string;
  readonly thesisGrade?: string;
  readonly thesisDetails: readonly string[];
}

@Component({
  selector: 'app-education',
  imports: [SectionTitle],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  readonly education: readonly EducationItem[] = [
    {
      institution: 'Technical University of Munich (TUM)',
      degree: 'Master of Science: Data Engineering and Analytics',
      period: 'Graduation 2026',
      location: 'Munich, Germany',
      major: 'Data Engineering and Analytics',
      minor: 'Software Engineering',
      thesis: 'AI-Based Access Point Placement Optimization in Indoor Wireless Networks',
      thesisDetails: [
        'Developed a simulation-based optimization framework for indoor access point placement using reinforcement learning and Bayesian optimization.',
        'Built automated Python pipelines for experiments, benchmarking, and result analysis.',
        'Evaluated runtime, coverage, and feasibility metrics across multiple scenarios.',
        'Improved optimization speed with TD3-based reinforcement learning compared with traditional methods.',
      ],
    },
    {
      institution: 'Arab Academy for Science, Technology & Maritime Transport (AASTMT)',
      degree: 'Bachelor’s in Computing and Information Technology',
      period: 'Graduation 2021',
      location: 'Cairo, Egypt',
      major: 'Computer Science – Software Engineering',
      grade: '3.4 (US GPA)',
      thesis: 'Real-Time Car Violations Detection System',
      thesisGrade: 'A+',
      thesisDetails: [
        'Developed a real-time car violation detector with Raspberry Pi, cameras, IR, GPS, AI, OpenCV, and cloud computing.',
        'Detected traffic-light, speed, and lane violations and automatically presented results on Azure.',
        'Used the Google Maps API for location and speed and built a Python Flask site connected to an Azure database.',
        'Designed the system to reduce road-crash risks through advanced violation detection.',
      ],
    },
  ];
}
