import { Component } from '@angular/core';

@Component({
  selector: 'app-listings-sidenav',
  template: `<aside>
    <form>
      <input
        class="header-search-input"
        type="text"
        name="q"
        placeholder="Search..."
        autocomplete="off"
        title="Search for articles"
        aria-label="search"
      />
      <div class="p-t"></div>
    </form>
    <nav class="listing-sidenav">
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings"
        >All listings</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/collabs"
        >Contributors/Collaborators Wanted</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/cfp"
        >Conference CFP</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/forhire"
        >Available for Hire</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/education"
        >Education/Courses</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/jobs"
        >Job Listings</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/mentors"
        >Offering Mentorship</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/mentees"
        >Seeking a Mentor</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/forsale"
        >Stuff for Sale</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/events"
        >Upcoming Events</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/misc"
        >Miscellaneous</a
      >
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        routerLink="/listings/products"
        >Products/Tools</a
      >
    </nav>
  </aside> `,
  styles: [
    `
      .listing-sidenav {
        padding: 0;
        a {
          width: 100%;
          padding: 0.5rem;
          display: inline-flex;
          align-items: center;
          color: #202428;
          border-radius: 5px;
          &:hover,
          &:active {
            background-color: rgba(8, 9, 10, 0.05);
            color: #323ebe;
          }
        }
      }
      .listing-sidenav .active {
        background: #fff;
      }
      form {
        padding-bottom: 1.5rem;
      }
      .p-t {
        padding-top: 0.5rem;
      }
    `,
  ],
})
export class ListingsSidenavComponent {}
