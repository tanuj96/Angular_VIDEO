import { Component, OnInit } from '@angular/core';
import { FileSendService } from 'src/app/file-send.service';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {

  uploadedFiles: any;

  constructor(private fileSend: FileSendService) { }

  ngOnInit(): void {
  }

  fileChange(element: any) {
    this.uploadedFiles = element.target.files;
  }

  uploadVideo() {
    this.fileSend.send(this.uploadedFiles).subscribe((response) => {
      console.log('response received is ', response);
    })
  }

}
