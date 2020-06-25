import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl:'./department.component.html',
  styles: [
  ]
})
export class DepartmentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

departments=[{"id":1,"name":"virat"},{"id":2,"name":"dhoni"},{"id":3,"name":"ganguly"},{"id":4,"name":"rohit"}];


  ngOnInit(): void {
  }
  onselect(dept)
  {
    this.router.navigate([dept.id],{relativeTo:this.route});
  }

}
