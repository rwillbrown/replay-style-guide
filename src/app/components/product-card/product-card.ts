// This is an example widget component.
// To make a new component and make it available, clone this "site-header" directory
// underneath components, rename everything as appropriate and most importantly:
// DON'T FORGET TO ADD THE FOLLOWING LINE TO src/app/components/index.ts TO MAKE IT AVAILABLE IN THE REST OF THE APP.
//       export * from './header/header';


import { Component } from '@angular/core'; // always imported to create components

@Component({
    selector: "product-card", // this is the element name: <site-header></site-header>
    templateUrl: "product-card.html", // a path to this component's .html file relative to the directory of the current file. (usually same directory, so only file name)
})
export class productCard { // export makes this class available to other classes who import it.
    // Code goes here.
    // Components are dumb for now...
}