import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PhotoEditorComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit() {
  }

}
