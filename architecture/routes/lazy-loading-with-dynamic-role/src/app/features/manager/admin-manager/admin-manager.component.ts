import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
