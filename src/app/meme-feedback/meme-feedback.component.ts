import { Component, Input } from '@angular/core';
import { Meme } from '../meme.service';

@Component({
    selector: 'app-meme-feedback',
    templateUrl: './meme-feedback.component.html',
    styles: [],
})
export class MemeFeedbackComponent {
    @Input()
    meme: Meme;
    constructor() {}
}
