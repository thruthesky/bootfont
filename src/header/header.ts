import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'abc-header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss']
})

export class HeaderComponent implements OnInit {
    @Input() break: string = "md";
    //toggle: boolean = false;
    constructor(
        //private el: ElementRef
    ) { }

    ngOnInit() {
    }

//     toggleMenu() {
// let col = document.querySelector(".navbar-collapse");
// if ( col.className.indexOf(' show') != -1 ) col.className = col.className.replace(" show", "");
// else col.className += ' show';
//     }
}