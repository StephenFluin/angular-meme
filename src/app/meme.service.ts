import { Injectable } from '@angular/core';
import { Template, TemplateService } from './template.service';


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
  providedIn: 'root'
})
export class MemeService {
  constructor() { }
}

