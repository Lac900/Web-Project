import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-c',
  templateUrl: './button-c.component.html',
  styleUrls: ['./button-c.component.scss']
})

export class ButtonCComponent implements OnInit {

  @Input() text = 'Before';
  @Output() clickFunction = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.clickFunction.emit();
  }

}
