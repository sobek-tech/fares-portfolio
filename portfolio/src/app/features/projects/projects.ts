import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  PortfolioProject,
  ProjectCard,
} from '../../shared/components/project-card/project-card';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, SectionTitle],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projects: readonly PortfolioProject[] = [
    {
      title: 'AI-Based Access Point Placement Optimization',
      organization: 'Technical University of Munich',
      period: 'Graduation 2026',
      location: 'Munich, Germany',
      category: 'Master’s Thesis',
      description:
        'A simulation-based framework that optimizes indoor wireless access point placement.',
      technologies: [
        'Python',
        'Reinforcement Learning',
        'TD3',
        'Bayesian Optimization',
        'Data Analysis',
      ],
      highlights: [
        'Automated experiments, benchmarking, and result analysis through Python pipelines.',
        'Compared scenarios using runtime, coverage, and feasibility metrics.',
        'Improved optimization speed using TD3-based reinforcement learning.',
      ],
    },
    {
      title: 'High-Level Feature Extraction Application',
      organization: 'TUM – Data Processing',
      period: 'Nov 2024 – May 2025',
      location: 'Munich, Germany',
      category: 'Academic Project',
      description:
        'An application for extracting high-level features from images and video with advanced machine-learning models.',
      technologies: ['BLIP-2', 'Hugging Face', 'Model Zoo', 'PySceneDetect'],
      highlights: [
        'Used BLIP-2 for image captioning and integrated models from Hugging Face and Model Zoo.',
        'Applied PySceneDetect to identify and select keyframes from video scenes.',
        'Combined keyframes into composite images and stored the extracted high-level features.',
        'Planned BLIP-3 integration for video captioning and further fine-tuning.',
      ],
    },
    {
      title: 'Online IDE Development',
      organization: 'TUM – Advanced Topics in Software Engineering',
      period: 'Oct 2024 – Apr 2025',
      location: 'Munich, Germany',
      category: 'Academic Project',
      description:
        'A collaborative online integrated development environment built with a microservice architecture.',
      technologies: [
        'Angular',
        'Spring Boot',
        'Spring Cloud',
        'Docker',
        'GitLab CI/CD',
        'OAuth 2.0',
      ],
      highlights: [
        'Designed the Angular component architecture and user interfaces, using the Observer Pattern for distributed events.',
        'Implemented service discovery, API gateway patterns, load balancing, and a container-per-service approach.',
        'Built REST services with Spring Security, JDBC/JPA/Hibernate, OAuth 2.0, and unit and integration tests.',
        'Used Docker, Docker Compose, and GitLab CI/CD for virtualization, orchestration, and continuous integration.',
      ],
    },
    {
      title: 'Sustainability Cockpit',
      organization: 'TUM & Capgemini',
      period: 'Oct 2023 – Feb 2024',
      location: 'Munich, Germany',
      category: 'Advanced Practical Course',
      description:
        'An enterprise sustainability application with backend functionality, data exchange, and frontend visualization.',
      technologies: ['SAP ABAP', 'OData', 'SAPUI5', 'Agile'],
      highlights: [
        'Collected stakeholder requirements and translated them into a product.',
        'Created an Agile roadmap, data model, and software architecture.',
        'Presented progress weekly and refined the roadmap with stakeholder feedback.',
        'Delivered company and high-level dashboards for tracing data and analyzing goal achievement.',
      ],
    },
    {
      title: 'Real-Time Car Violations Detection System',
      organization: 'AASTMT',
      period: 'Graduation 2021',
      location: 'Cairo, Egypt',
      category: 'Bachelor’s Thesis · A+',
      description:
        'A real-time system for detecting traffic-light, speed, and lane violations.',
      technologies: [
        'Python',
        'Flask',
        'OpenCV',
        'Raspberry Pi',
        'Azure',
        'Google Maps API',
      ],
      highlights: [
        'Combined cameras, IR, GPS, AI, OpenCV, and cloud computing on Raspberry Pi.',
        'Automatically presented detected violations on Azure.',
        'Built a Flask website connected to an Azure database for user access.',
        'Used the Google Maps API for location and speed data.',
      ],
    },
  ];
}
