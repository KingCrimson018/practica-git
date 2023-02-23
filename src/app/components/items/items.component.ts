import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items:Item[] = []
  uid:String = ""

  constructor(private itemS: ItemService, private userS:UserService){}
  ngOnInit(): void{
    this.getItems()
    this.getName()
  }
  getItems(){
    this.itemS.getItems().subscribe(items => {
      this.items = items
    })
  }

  getName(){
    
    this.uid = this.userS.uid
  }

  
}
