import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
const item: string[] = [];
item.push("table1");


@Component({ 
selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any='user';
  Constructor() {
   
  }
  ngOnInit() {
    this.user = {
      name: 'for Bar!',
      title: 'Software Developer',
      address: '1234 Main st,City,State,100010',
      phone: ['123-123-123', '456-456-456', '456-456-456']

    };
  }

}
