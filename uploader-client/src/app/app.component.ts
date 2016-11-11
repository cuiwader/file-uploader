import { Component } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  public url:string = 'http://localhost:8080';
  public uploader:FileUploader = new FileUploader({url: this.url});
}
