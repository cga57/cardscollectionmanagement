import { Component, OnInit, Input } from '@angular/core';
import { Deck } from 'src/app/model/deck';

@Component({
	selector: 'app-carousel3d',
	templateUrl: './carousel3d.component.html',
	styleUrls: ['./carousel3d.component.scss']
})
export class Carousel3dComponent implements OnInit 
{
	@Input() slides : Deck[] = [];
	activeIndex = 0;

	constructor() { }

	ngOnInit(): void { }

	jumpToSlide( index : number ) : void
	{
		this.activeIndex = index;
	}

	nextSlide() : void
	{
		if( this.activeIndex < this.slides.length )
		{
			this.activeIndex++;
		}
	}

	prevSlide() : void
	{
		if( this.activeIndex > 0 )
		{
			this.activeIndex--;
		}
	}
}
