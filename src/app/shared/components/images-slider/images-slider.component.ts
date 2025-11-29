import { NgFor } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-slider',
  imports: [NgFor],
  templateUrl: './images-slider.component.html',
  styleUrl: './images-slider.component.css'
})
export class ImagesSliderComponent{
  @Input() width: string = '100%';
  @Input() height: string = '150px';
  @Input() speed: number = 20; 
  @Input() background: string = 'transparent';
  @Input() direction: 'left' | 'right' = 'left';
  @Input() images: string[] = [];

  get isLeft() { return this.direction === 'left'; }
  get isRight() { return this.direction === 'right'; }
}
