import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'b-header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss']
})

export class HeaderComponent implements OnInit {
    @Input() break: string = "md";
    constructor(
    ) { }

    ngOnInit() {
    }

}