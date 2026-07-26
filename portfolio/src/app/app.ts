import { Component } from '@angular/core';

import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience';
import { Education } from './features/education/education';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Home,
    About,
    Experience,
    Education,
    Projects,
    Skills,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}