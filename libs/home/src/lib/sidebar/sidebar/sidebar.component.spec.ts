import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeModule } from '../../home.module';
import { SidebarAdvertisementComponent } from '../sidebar-advertisement/sidebar-advertisement.component';
import { SidebarSocialLinksComponent } from '../sidebar-social-links/sidebar-social-links.component';
import { SidebarTagsComponent } from '../sidebar-tags/sidebar-tags.component';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SidebarComponent,
        SidebarAdvertisementComponent,
        SidebarTagsComponent,
        SidebarSocialLinksComponent,
      ],

      imports: [HomeModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
