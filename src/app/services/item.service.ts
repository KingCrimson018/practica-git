import { Injectable } from '@angular/core';
import { collectionData, addDoc, collection, deleteDoc, doc, Firestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private fireStore: Firestore) { }

  getItems(): Observable<Item[]>{
    const ref = collection(this.fireStore, "items")
    return collectionData(ref, {idField: 'id'}) as Observable<Item[]>
  }
  addItem(item: Item){
    var id = item.id
    var name = item.name
    var price = item.price
    var quantity = item.quantity
    var completed = item.completed
    const ref = collection(this.fireStore, "items")
    return addDoc(ref, {id, name, price, quantity, completed})
  }
  deleteItem(item: Item){
    return deleteDoc(doc(this.fireStore, `items/${item.id}`))
  }
}
