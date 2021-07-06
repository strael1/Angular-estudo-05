import { Component, OnInit, EventEmitter, Output, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-form-server',
  templateUrl: './form-server.component.html',
  styleUrls: ['./form-server.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
})

// None
// ShadowDom 

// open  
// style.css
// close 

export class FormServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string, serverType: string}>();
  
  newServerName = '';
  newServerContent = '';

  onAddServer(newServer, newServerContent) {
    // console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: newServer.value,
      serverContent: newServerContent.value,
      serverType: 'server'
      // serverName: this.newServerName,
      // serverContent: this.newServerContent,
      // serverType: 'server'
    });
  }

  onAddBlueprint() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
      serverType: 'blueprint'
    });
  }

}









  // @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string, serverType: string}>();

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverType: 'server',
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   })
  // }

  // onAddBlueprint() {
  //   this.serverCreated.emit({
  //     serverType: 'blueprint',
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }


 


