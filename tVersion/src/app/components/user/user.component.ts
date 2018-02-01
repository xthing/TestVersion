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
	// collections:string[];
	
	collections = ['image 01','image 02','image 03'];	
  constructor() { }

  ngOnInit() {
  
	  this.person = "Moe";
	  this.age = 20;
	  
	  
	  this.Images = {
	  		name: "Marco",
	  		user:"54654dvc6vxv",
	  		url:"http://www.pyog.com/kjdkjf"
	  		}
	  		
	  		// this.collections = ['image 01','image 02','image 03'];
	
  }
  
  
	addCollection(collect){
		this.collections.unshift(collect);
		console.log("show this");
		
		return false;
	}

	onclick(){
	this.collections.push("New Collection");
		this.person = "Big Mac";
		console.log("hello ");
	}

	deleteCol(collection){
		for(let i = 0; i<this.collections.length;i++){
		if(this.collections[i] == collection){
			this.collections.splice(i, 1);	
			}
		}
	}
}


interface images{
		name:string,
		user:string,
		url:string
}


