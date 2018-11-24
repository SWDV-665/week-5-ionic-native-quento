import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public dialogService: InputDialogServiceProvider) {

  }

  // Get initial groceries list from provider.
  loadItems(){
    return this.dataService.getItems();
  }

  removeItem(item, index){
    
    this.showToast("Remove", item.name);

    // Use Groceries Provider to remove item
    this.dataService.removeItem(index);    
  }

  shareItem(item, index){
    
    this.showToast("Share", item.name);

    // Use Groceries Provider to remove item
    //this.dataService.removeItem(index);    
  }

  editItem(item, index){
    
    this.showToast("Edit", item.name);

    // Delete item from items array    
    this.dialogService.showPrompt(item, index);
  }

  addItem(){
    console.log("Item added"); 
    this.dialogService.showPrompt();   
  }

  showToast(itemAction, itemName){
    // Show a toast message to Troubleshoot action occurrance.
    console.log(itemAction + " item .." + itemName);
    
    // Show item action message (toast)
    const toast = this.toastCtrl.create({
      message: itemAction + ' item - ' + itemName + " ...",
      duration: 3000
    });
    toast.present();
  }
}
