import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    {
      title: 'What does an orange tast like?',
      content: 'An orange taste like an orange',
    },
    { title: 'What color is the cat?', content: 'The cat is orange' },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
