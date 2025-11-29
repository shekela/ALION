import { NgFor } from '@angular/common';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-images-slider',
  imports: [NgFor],
  templateUrl: './images-slider.component.html',
  styleUrl: './images-slider.component.css'
})
export class ImagesSliderComponent{
  @Input() width = '100%';
  @Input() height = '150px';
  @Input() speed = 20; 
  @Input() background = 'transparent';
  @Input() direction: 'left' | 'right' = 'left';
  @Input() images: string[] = [];

  get isLeft() { return this.direction === 'left'; }
  get isRight() { return this.direction === 'right'; }
}
