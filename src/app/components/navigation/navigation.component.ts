import { Component, OnInit } from '@angular/core';
import { navigation } from '../../../app-data/app-navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public navlist: any;

  constructor() { }

  ngOnInit() {
    console.log('navigation.list => ', navigation.list);
    this.navlist = navigation.list;
  }

}
