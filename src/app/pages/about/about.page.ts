import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music';
// import { Watch } from '@shared/components/watch/watch';
@Component({
  selector: 'about',
  template: `
    <section
      class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden"
    >
      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>
        <p class="justify-start">
          I’m Sarveswaran S D, a Full Stack Web Developer who loves turning
          ideas into real, working web applications. <br /><br />
          I started my journey with a B.A. in English, and over time, I found my
          passion in technology and problem-solving. Now, at CIS Automation, I
          build smart, secure, and scalable web apps using the MEAN and MERN
          stacks. <br /><br />
          I enjoy creating websites that are not only powerful but also simple
          and smooth to use. Every project I work on helps me learn something
          new and improve my skills. <br /><br />
          I’m always excited to learn, collaborate, and build amazing things
          with great people. ✨ 🚀
        </p>
        <p *ngFor="let a of aboutDetails">
          <b class="dark:text-white text-black">{{ a.title }}</b
          ><br />{{ a.desc }}
        </p>
      </div>
      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-semibold dark:text-white">Activity:</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <music />
          <!-- <watch /> -->
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-semibold dark:text-white">
          Contact Information:
        </h1>
        @for(c of contactInfo; track $index){
        <p>
          <b class="dark:text-white text-black ">{{ c.title }}:</b><br />
          <a [href]="c.link" class="hover:underline" target="_blank">{{
            c.desc
          }}</a>
        </p>
        }
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music],
  // imports: [NgFor, Music, Watch],
  standalone: true,
})
export class AboutPage {
  metaService = inject(MetaService);
  // traktTvService = inject(TraktTvService);
  constructor() {
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
    );
  }
  public aboutDetails = [
    {
      title: 'What I Do',
      desc: `I build full stack web applications using the MEAN and MERN stacks. My work focuses on creating secure, scalable, and user-friendly apps that solve real-world problems. I enjoy writing clean, efficient code and blending good design with strong functionality to deliver smooth digital experiences.`,
    },
    {
      title: 'Always Learning',
      desc: `Technology never stops changing, and neither do I. I love learning new tools, frameworks, and coding techniques. Whether it’s improving my backend logic or exploring new UI trends, I’m always eager to grow as a developer and stay ahead in the tech world.`,
    },
    {
      title: 'Off-Duty Fun',
      desc: `When I’m not coding, I enjoy watching anime, dramas, and web series. I also love exploring new tech ideas, playing both online and offline games, listening to music, and taking walks to relax my mind. Spending quality time with my family and friends keeps me inspired and balanced.`,
    },
    {
      title: 'Why I Code',
      desc: `Coding lets me turn ideas into real solutions. It’s creative, challenging, and rewarding all at once. Every project I build helps me learn something new and make a positive impact through technology.`,
    },
  ];
  public contactInfo = [
    {
      title: 'Address',
      desc: `Chennai, Tamil Nadu, India`,
      link: 'https://maps.app.goo.gl/4UJrPr6vE3vC6u6A6',
    },
    {
      title: 'Mobile Number',
      desc: '+91 8270282928',
      link: 'tel:+918270282928',
    },
    {
      title: 'Email',
      desc: 'sarveswaran.official@gmail.com',
      link: 'mailto:sarveswaran.official@gmail.com',
    },
    {
      title: 'LinkedIn',
      desc: 'linkedin.com/in/sarves2003',
      link: 'https://www.linkedin.com/in/sarves2003/',
    },
  ];
}
