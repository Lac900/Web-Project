import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-c',
  templateUrl: './button-c.component.html',
  styleUrls: ['./button-c.component.scss']
})

export class ButtonCComponent implements OnInit {

  @Input() text = 'Before';
  @Input() clickFunction;
  constructor() {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    console.log(this.text, ' DDD');
  }

}
