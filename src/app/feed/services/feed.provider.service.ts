import { Injectable } from '@angular/core';
import { FeedItem } from '../models/feed-item.model';

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {

  constructor() { }

  async fetch(): Promise<FeedItem[]> {
    return Promise.resolve([
                              {
                              url: '/assets/mock/xander0.jpg',
                              caption: 'Such a cute pup'
                              },
                              {
                              url: '/assets/mock/xander1.jpg',
                              caption: 'Who\'s a good boy?'
                              },
                              {
                              url: '/assets/mock/xander2.jpg',
                              caption: 'Majestic.'
                              }
                              ]);
  }
}
