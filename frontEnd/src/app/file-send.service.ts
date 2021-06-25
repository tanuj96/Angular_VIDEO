import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileSendService {

  constructor(private http: HttpClient) { }

  send(video: any) {
    let formData = new FormData();
    for (var i = 0; i < video.length; i++) {
      formData.append("uploads[]", video[i], video[i].name);
    }
    return this.http.post('/api/upload', formData)
  }

}
