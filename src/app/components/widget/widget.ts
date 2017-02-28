// This is an example widget component.
// To make a new component and make it available, clone this "widget" directory
// underneath components, rename everything as appropriate and most importantly:
// DON'T FORGET TO ADD THE FOLLOWING LINE TO src/app/components/index.ts TO MAKE IT AVAILABLE IN THE REST OF THE APP.
//       export * from './widget/widget';


import { Component } from '@angular/core'; // always imported to create components

@Component({
    selector: "widget", // this is the element name: <widget></widget>
    templateUrl: "widget.html", // a path to this component's .html file relative to the directory of the current file. (usually same directory, so only file name)
    styleUrls: ["widget.scss"] // same as above for .scss
})
export class Widget { // export makes this class available to other classes who import it.
    // Code goes here.
    // Components are dumb for now...
}