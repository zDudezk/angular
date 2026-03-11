import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'column',
  imports: [RouterOutlet,],
  templateUrl: './column.html',
  styleUrl: './column.scss'
})
export class Column {
}
