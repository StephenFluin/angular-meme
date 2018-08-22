import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Meme, MemeService } from '../meme.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
})
export class NewComponent {
    memeForm = this.fb.group({
        topText: ['', Validators.required],
        topTextColor: [null],
        topTextSize: [32],
        bottomText: ['', Validators.required],
        bottomTextColor: [null],
        bottomTextSize: [32],
        context: [''],
        template: [null, Validators.required],

    });
    constructor(private fb: FormBuilder, private ms: MemeService) {}

    create(meme: Meme) {

    }
}
