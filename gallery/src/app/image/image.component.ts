import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})

export class ImageComponent {
  
  @Input() selectedImage!: { url: string, description: string };
  @Output() _closeImage = new EventEmitter<void>();
  
  // Muestra la imagen en grande
  viewImage(image: any): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this._closeImage.emit(); // Emite el evento cuando se cierra la imagen
  }

}
