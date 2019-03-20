import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FeedItem } from '../models/feed-item.model';
import { FeedProviderService } from '../services/feed.provider.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedListComponent implements OnInit {
  @Input() feedItems: FeedItem[];

  constructor( private feed: FeedProviderService ) { }

  async ngOnInit() {
    this.feedItems = await this.feed.fetch();
  }

}
