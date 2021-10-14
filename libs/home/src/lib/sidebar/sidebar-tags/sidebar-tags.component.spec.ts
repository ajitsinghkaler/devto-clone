import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LetModule } from '@rx-angular/template';
import { of } from 'rxjs';
import { TagsStore } from '../services/tags.store';

import { SidebarTagsComponent } from './sidebar-tags.component';

describe('SidebarTagsComponent', () => {
  let component: SidebarTagsComponent;
  let fixture: ComponentFixture<SidebarTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetModule],
      declarations: [SidebarTagsComponent],
      providers: [{ provide: TagsStore, useValue: mockTagsStore }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTagsComponent);
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

const mockTagsStore = {
  tags: of([
    {
      id: 6,
      name: 'javascript',
      bg_color_hex: '#F7DF1E',
      text_color_hex: '#000000',
    },
    {
      id: 8,
      name: 'webdev',
      bg_color_hex: '#562765',
      text_color_hex: '#ffffff',
    },
  ]),
};
