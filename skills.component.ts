import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'HTML', width: '90%', inView: false },
    { name: 'Python', width: '85%', inView: false },
    { name: 'CSS', width: '80%', inView: false },
    { name: 'JavaScript', width: '75%', inView: false },
    { name: 'Angular', width: '70%', inView: false },
    { name: 'DevOps', width: '65%', inView: false },
    { name: 'Node', width: '60%', inView: false },
    { name: 'React', width: '55%', inView: false },
    { name: 'Git', width: '50%', inView: false },
    { name: 'Artificial Intelligence', width: '95%', inView: false },
    { name: 'Machine Learning', width: '85%', inView: false }
  ];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkProgressBars();
  }

  checkProgressBars(): void {
    const triggerHeight = window.innerHeight * 0.8;
    this.skills.forEach((skill, index) => {
      const element = document.getElementsByClassName('progress-bar')[index] as HTMLElement;
      const rect = element.getBoundingClientRect();
      if (rect.top < triggerHeight) {
        skill.inView = true;
      } else {
        skill.inView = false;
      }
    });
  }
}
