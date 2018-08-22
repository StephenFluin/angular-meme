import { Injectable } from '@angular/core';
import { Template, TemplateService } from './template.service';
import { Observable, Subject, of as observableOf } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

/**
 * A meme!
 * Text is assume to be black if not provided
 */
export interface Meme {
    template: Template;
    id: string;
    topText: string;
    topTextColor?: string;
    /**
     * The size in pixels
     */
    topTextSize?: number;
    bottomText: string;
    bottomTextColor?: string;
    /**
     * The size in pixels
     */
    bottomTextSize?: number;
    context?: string;
}

@Injectable({
    providedIn: 'root',
})
export class MemeService {
    _internalMemes = [];
    _internalMemeSubject = new Subject<Meme[]>();
    memes: Observable<Meme[]> = this._internalMemeSubject.pipe(
        shareReplay(1),
    );

    constructor() {}

    create(meme: Meme) {
        this._internalMemes.push(meme);
        console.log('Creating meme', meme, '. Memes are now: ', this._internalMemes);
        this._internalMemeSubject.next(this._internalMemes);
    }
}
