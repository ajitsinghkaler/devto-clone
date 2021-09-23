import { Component, Input } from '@angular/core';
import { UserDetails } from '@devto/core/models';

@Component({
  selector: 'app-user-detail',
  template: `<aside>
    <div class="aside-card">
      <div class="aside-username">
        <a href="/users/{{ user.username }}" class="flex">
          <span class="aside-avatar">
            <img [src]="user.profile_image" alt="" loading="lazy" />
          </span>
          <span class="aside-name">{{ user.name }}</span>
        </a>
      </div>
      <div class="aside-summary">
        {{ user.summary }}
      </div>
      &nbsp;

      <div>
        <ul class="m-0 p-0">
          <li *ngIf="user.location">
            <div class="key">Location</div>
            <div class="value">
              <time datetime="2020-12-08T08:18:06Z" class="date">{{
                user.location
              }}</time>
            </div>
          </li>
          <li>
            <div class="key">Joined</div>
            <div class="value">
              <time datetime="2020-12-08T08:18:06Z" class="date">{{
                user.joined_at
              }}</time>
            </div>
          </li>
          <li *ngIf="user.website_url">
            <div class="key">Website</div>
            <div class="value">
              <time datetime="2020-12-08T08:18:06Z" class="date">{{
                user.website_url
              }}</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <app-user-articles [name]="user.name"></app-user-articles>
  </aside> `,
  styles: [
    `
      aside {
        position: sticky;
        top: calc(var(--header-height) + 1rem);
        word-break: break-word;
        display: grid;
        grid-gap: 1rem;
      }

      .aside-card {
        padding: 0 1rem 1rem;
        display: grid;
        border-top-color: #000;
        grid-gap: 1rem;
        background-color: #f9fafa;
        color: #202428;
        box-shadow: rgba(8, 9, 10, 0.05) 0px 0px 0px 1px;
        border-radius: 5px;
        overflow-wrap: anywhere;
        border-top: 2rem solid;
      }

      .aside-username {
        margin-top: -1rem;
      }

      .aside-avatar {
        margin-right: 0.5rem;
        flex-shrink: 0;
        width: 3rem;
        height: 3rem;
        background-color: #64707d;
        border-radius: 100%;
        img {
          border-radius: 100%;
          width: 100%;
          height: 100%;
          display: inline-block;
          vertical-align: bottom;
        }
      }

      .aside-name {
        margin-top: 1.25rem;
        color: #202428;
        font-size: 1.25rem;
        font-weight: 700;
      }

      .aside-summary {
        color: #4d5760;
      }

      ul {
        .key {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #64707d;
        }
      }
    `,
  ],
})
export class UserDetailComponent {
  @Input() user!: UserDetails;
}
