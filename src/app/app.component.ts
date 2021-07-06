// import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  
  // @Input() element!: {server: string, serverContent: string};
  // @Output eventoTal = new EventEmitter<{serveString: string, serverContentString: string}>();

  serverElements = [];

  addNewServer(serverDatas: 
    { serverName: string, serverContent: string, serverType: string}) {
      this.serverElements.push(
        {
          name: serverDatas.serverName,
          content: serverDatas.serverContent,
          type: serverDatas.serverType
        }
      );
  }

}
