import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { ExpertiseArea } from '@pages/home/components/expertise-area/expertise-area';
import { Intro } from '@pages/home/components/intro/intro';
import { LanguageTools } from '@pages/home/components/language-tools/language-tools';
import { InWork } from '@pages/home/components/in-work/in-work';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ExpertiseArea, Intro, LanguageTools, InWork, Loader],
  template: `
    @defer(on immediate){
    <intro />
    <expertise-area />
    <language-tools />
    <in-work />
    }@placeholder {
    <loader />
    }
  `,
})
export class HomePage {
  metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags(
      `Home - ${profileData.name}`,
      'Explore the portfolio of Sarveswaran S D — a MEAN stack developer from Chennai, India. Discover my work in web application development, cybersecurity integration, and functional safety systems. Join me in building secure and scalable digital solutions.',
      [
        'Sarveswaran S D',
        'Sarveswaran',
        'sarves2003',
        'MEAN stack developer',
        'Angular developer',
        'Node.js',
        'MongoDB',
        'web development',
        'cybersecurity',
        'functional safety',
        'CIS Automation',
        'portfolio',
      ]
    );
  }
}
