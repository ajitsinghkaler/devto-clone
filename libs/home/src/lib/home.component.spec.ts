import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ArticleContainerComponent } from './articles/article-container/article-container.component';
import { HomeComponent } from './home.component';
import { RightbarContainerComponent } from './rightbar/rightbar-container/rightbar-container.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HomeModule } from './home.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SidebarComponent,
        ArticleContainerComponent,
        RightbarContainerComponent,
      ],
      imports: [HomeModule, HttpClientTestingModule,  RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
