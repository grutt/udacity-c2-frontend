import { Injectable } from '@angular/core';
import { FeedItem, feedItemMocks } from '../models/feed-item.model';

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {

  constructor() { }

  async fetch(): Promise<FeedItem[]> {
    return Promise.resolve(feedItemMocks);
  }
}
