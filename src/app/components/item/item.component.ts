import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item = new Item()

  constructor(private itemS: ItemService){}

  eliminar(){
    this.itemS.deleteItem(this.item)
  }
  toogle(){
    this.item.completed = !this.item.completed
  }


}
