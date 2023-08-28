import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-jquery-demo',
  templateUrl: './jquery-demo.component.html',
  styleUrls: ['./jquery-demo.component.css']
})
export class JqueryDemoComponent implements OnInit {

  ngOnInit(): void {
    $('.toggle').click(function (e) {
      e.preventDefault();

      let $this = $(this);

      if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
      } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
      }
    });
  }

}
