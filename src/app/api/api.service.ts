import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FeedItem } from '../feed/models/feed-item.model';
import { catchError, tap, map } from 'rxjs/operators';

const API_HOST = environment.apiHost;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async postFeedItemMeta(caption: string, file: File) {
    const url = `${API_HOST}/feed`;

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    const resp = await this.http.post(url, {url: file.name, caption: caption}, options).toPromise();
  }

  async uploadFeedItem(caption: string, file: File) {
    const url = `${API_HOST}/feed/signed-url/${file.name}`;
    const signed_url = (<any> await this.http.get(url, httpOptions).toPromise()).url;
    console.log(signed_url);

    const headers = new HttpHeaders({'Content-Type': file.type});

    const req = new HttpRequest( 'PUT', signed_url, file,
                                  {
                                    headers: headers,
                                    reportProgress: true, // track progress
                                  });

    return this.http.request(req).subscribe((resp) => {
      if (resp && (<any> resp).status && (<any> resp).status === 200) {
        this.postFeedItemMeta(caption, file);
      }
    });
  }

  async postFeedItem() {
    const url = `${API_HOST}/feed`;
    const req = this.http.get(url, httpOptions).pipe(map(this.extractData));
      // catchError(this.handleError));
    const resp = <any> (await req.toPromise());
    return resp.rows;
  }

  async getFeed() {
    const url = `${API_HOST}/feed`;
    const req = this.http.get(url, httpOptions).pipe(
      map(this.extractData));
      // catchError(this.handleError));
    const resp = <any> (await req.toPromise());
    return resp.rows;
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
}
