import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styles: []
})
export class PopularComponent implements OnInit {
    memes = this.ms.memes.pipe(
        tap(list => console.log('got a new meme list!',list)),
    );
  constructor(private ms: MemeService) {

   }

  ngOnInit() {
  }

}
