import { Component, OnInit } from '@angular/core';

export class Hero {
  name: string;
}

export const HEROES = [
  {name: 'Mr. IQ'},
  {name: 'Magneta'},
  {name: 'Bombasto'}
];


export class Image {
  id: number;
  name: string;
  path: string;
}


const IMAGES: Image[] = [
  { id: 1, name: 'Mestia1', path: 'assets/images/1.jpg' },
  { id: 2, name: 'Mestia2', path: 'assets/images/2.jpg' },
  { id: 3, name: 'Mestia3', path: 'assets/images/3.jpg' },
  { id: 4, name: 'Mestia4', path: 'assets/images/4.jpg' },
  { id: 5, name: 'Mestia5', path: 'assets/images/5.jpg' },
  { id: 6, name: 'Mestia6', path: 'assets/images/6.jpg' },
  { id: 7, name: 'Mestia7', path: 'assets/images/7.jpg' },
  { id: 8, name: 'Mestia8', path: 'assets/images/8.jpg' },
  { id: 9, name: 'Mestia9', path: 'assets/images/9.jpg' },
  { id: 10, name: 'Mestia10', path: 'assets/images/10.jpg' },
  { id: 11, name: 'Mestia11', path: 'assets/images/11.jpg' },
  { id: 12, name: 'Mestia12', path: 'assets/images/12.jpg' },
  { id: 13, name: 'Mestia13', path: 'assets/images/13.jpg' },
  { id: 14, name: 'Mestia14', path: 'assets/images/14.jpg' },
  { id: 15, name: 'Mestia15', path: 'assets/images/15.jpg' },
  { id: 16, name: 'Mestia16', path: 'assets/images/16.jpg' },
  { id: 17, name: 'Mestia17', path: 'assets/images/17.jpg' },
  { id: 18, name: 'Mestia18', path: 'assets/images/18.jpg' },
  { id: 19, name: 'Mestia19', path: 'assets/images/19.jpg' },
  { id: 20, name: 'Mestia20', path: 'assets/images/20.jpg' },
];

@Component({
  selector: 'app-tourobjects',
  templateUrl: './tourobjects.component.html',
  styleUrls: ['./tourobjects.component.css']
})
export class TourobjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
