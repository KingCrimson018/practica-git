import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name: String = ""
  price:number = 0
  quantity:number = 0
  completed:boolean = false
  constructor(private itemS: ItemService, private router:Router){}

  addItem(){
    const item = new Item()
    item.name = this.name
    item.price = this.price
    item.quantity = this.quantity
    item.completed = this.completed
    this.itemS.addItem(item).then(res=>{
      console.log(res)
      this.router.navigate(['/main'])
    })
  }
}
