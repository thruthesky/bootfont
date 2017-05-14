import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: 'abc-icon',
    templateUrl: './icon.html',
    styleUrls: ['./icon.scss']
})

export class IconComponent implements OnInit {
    @Input() name = 'times';
    constructor( private el: ElementRef ) { }

    ngOnInit() {
    }

    @HostListener('click') onClick() {
        let el = this.el.nativeElement;
        if ( el.className.indexOf("navbar-toggler") != -1 ) this.toggleMenu();
    }
    toggleMenu() {
        let col = document.querySelector(".navbar-collapse");
        if (col.className.indexOf(' show') != -1) col.className = col.className.replace(" show", "");
        else col.className += ' show';
    }
}