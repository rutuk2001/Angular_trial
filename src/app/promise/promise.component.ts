import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  dellAvailable() {
    return setTimeout(() => {
      return true
    }, 3000)
  }

  hpAvailable() {
    return setTimeout(() => {
      return false
    }, 3000)
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        resolve('Dell is purchased')
      } else if (this.hpAvailable()) {
        resolve("Hp is purcshaed")
      } else {
        reject("Laptop was not available in store")
      }
    });
    buyLaptop.then(res => {
      console.log("then code =>", res);
    }).catch(res => {
      console.log("catch code =>", res)
    })
  }

}
