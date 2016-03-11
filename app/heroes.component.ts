import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
	directives: [HeroDetailComponent],
	selector: 'my-heroes',
	styleUrls: ['app/heroes.component.css'],
	templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private _router: Router, private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}


