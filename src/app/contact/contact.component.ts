import { Component, OnInit } from '@angular/core';
import { Hero, HEROES } from '../tourobjects/tourobjects.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  heroes = HEROES;
 
 

  constructor() { }
  ngOnInit() {
  }

}
