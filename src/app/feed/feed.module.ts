import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ApiModule } from '../api/api.module';

import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { FeedUploadComponent } from './feed-upload/feed-upload.component';

import { FeedProviderService } from './services/feed.provider.service';

const components = [FeedListComponent, FeedItemComponent, FeedUploadComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components,
  providers: [FeedProviderService]
})
export class FeedModule {}
