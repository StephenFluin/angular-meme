import { Component, Input } from '@angular/core';
import { Meme } from '../meme.service';

@Component({
    selector: 'app-meme',
    templateUrl: './meme.component.html',
})
export class MemeComponent {
    @Input() meme: Meme;
}
