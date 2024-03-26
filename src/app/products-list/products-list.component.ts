import { Component, OnInit } from '@angular/core';
import { document } from '../shared/model/document';
import { DocumentService } from '../service/document.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  documents:document[];
  
  constructor(private documentService :DocumentService,private route:ActivatedRoute){}
  
  ngOnInit():void {
    
    this.route.paramMap.subscribe(res=>{
      if (res.get('param1')) {
        console.log(res.get('param1'))
        this.documents=this.documentService.getAllDocuments().filter(doc=>doc.title.toLowerCase().includes(res.get('param1').toLowerCase()))
      }
      else{
        console.log(res.get('param1'))
        this.documents=this.documentService.getAllDocuments();
      }
    })
    
    
  }
  

}
