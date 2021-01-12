import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCouse';

  // initial
  loadedPage = 'recipe';

  onNavigate(pageName:string){
    this.loadedPage = pageName;
  }

}
