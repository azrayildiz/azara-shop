import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderImage } from '../slider-images/slider-images.component';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  newsletter: FormGroup; 
  facebook = faFacebook;
  twitter = faTwitter;
  instagram = faInstagram;

  images: SliderImage[] = [   
    {
      source: './assets/images/kerze1.webp',
      alt:'00'
    }, 
  ]

  constructor(){}

  ngOnInit(): void {    
    this.newsletter = new FormGroup({
      'newsletter': new FormControl('', [Validators.required, Validators.email])
  }) 
  }
  onSubmit(){
    let email = this.newsletter.value.newsletter; 
    console.log("Test new newsletter input: " + email); 
    this.newsletter.reset();
  }
}

