import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit () {
    this.httpClient.request(
      new HttpRequest('GET', 'https://na.cdn.cyph.com/cyph.ws/current')
    ).subscribe(
      event => {
        console.log({event});
      }
    );
  }

  constructor (private readonly httpClient: HttpClient) {}
}
