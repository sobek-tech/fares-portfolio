import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface PortfolioProject {
  readonly title: string;
  readonly organization: string;
  readonly period: string;
  readonly location: string;
  readonly category: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input<PortfolioProject | null>(null);
}
