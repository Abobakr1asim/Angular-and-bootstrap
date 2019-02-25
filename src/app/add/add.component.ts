import { Component, OnInit } from '@angular/core';


import { AngularFireDatabaseModule } from '@angular/fire/database';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: ''
  color:''
  type:''
  City:''
  State:''
  Zip:''

  constructor() { }

  ngOnInit() {

  }

}
