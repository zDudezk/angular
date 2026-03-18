import { Component, Input, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'column',
  imports: [RouterOutlet,],
  templateUrl: './column.html',
  styleUrl: './column.scss'
})
export class Column {
@Input() image: string = "";
@Input() content: string = "";
@Input() title: string = "";
}
