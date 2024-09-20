import { NgFor, NgIf } from '@angular/common';
import { Component, } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf,NgFor,ImageComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
    
  images = [
    { url: 'assets/images/image1.jpg', description: 'Image 1' },
    { url: 'assets/images/image2.jpg', description: 'Image 2' },
    { url: 'assets/images/image3.jpg', description: 'Image 3' },
    { url: 'assets/images/image4.jpg', description: 'Image 4' }
  ];

  selectedImage: { url: string, description: string } | null = null;

  viewImage(image: { url: string, description: string }): void {
    this.selectedImage = image;
  }

}
