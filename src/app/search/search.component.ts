import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchTerm:string="";
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      console.log(res.get('param1'))
      if (res.get('param1')) {
        this.searchTerm=res.get('param1');
      }
    })
  }

}
