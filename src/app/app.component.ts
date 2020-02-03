import { Component ,OnInit} from '@angular/core';
// import { $ } from 'protractor';
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TSapp';



  ngOnInit(){

$(".submenu").css({
           "right":($(".sideMenu").width()+"px"),
          } );

          // WebFont.load({
          //   google: {
          //     families: ['Tajawal', 'sans-serif']
          //   }
          // });

          var WebFont = require('webfontloader');

  WebFont.load({
    google: {
      families: ['Tajawal', 'sans-serif']
    },
    active: function(){ 
        //when fonts loaded
        console.log('fonts loaded');
    }
 });

}


}
