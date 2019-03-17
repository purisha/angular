import { Component, OnInit } from '@angular/core';

import { ChangeDetectorRef, QueryList } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav/typings';
import { MatCheckboxClickAction } from '@angular/material/checkbox/typings/checkbox-config'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
