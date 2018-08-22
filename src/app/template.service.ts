import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';

export interface Template {
    id: string;
    name: string;
    url: string;
}

@Injectable({
    providedIn: 'root',
})
export class TemplateService {
    templates: Observable<Template[]> = observableOf([
        { id: '1', url: '/assets/stephen.jpg', name: 'Stephen Fluin' },
        { id: '2', url: '/assets/cat.jpg', name: 'A cat by a rock' },
        { id: '3', url: '/assets/rado.jpg', name: 'Rado K' },
    ]);

    constructor() {}
}
