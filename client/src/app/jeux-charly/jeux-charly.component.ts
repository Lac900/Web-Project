import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeux-charly',
  templateUrl: './jeux-charly.component.html',
  styleUrls: ['./jeux-charly.component.scss']
})
export class JeuxCharlyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const div = document.createElement('Div');
    div.innerText = 'allllllllllllllllo';
    document.getElementById('GameBoard').append(div);
  }

}
