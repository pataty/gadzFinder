import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  

  constructor(public navCtrl: NavController) {
    $.getJSON('../../assets/information/information.json', function(data) {
    	alert(data.gadz[0].prenom);
    });
  }
  
}
