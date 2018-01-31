import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	person:string = 'Big Bob';
	age:number;
	Images:images;
	collections:string[];
		
  constructor() { }

  ngOnInit() {
  
  this.person = "Moe"
  this.age = 20;
  
  
  this.Images = {
  		name: "Marco",
  		user:"54654dvc6vxv",
  		url:"http://www.pyog.com/kjdkjf"
  		}
  		
  		this.collections = ['image 01','image02','image03'];
  }

}


interface images{
		name:string,
		user:string,
		url:string
}


