import { Brand } from 'src/app/model/brand';

export interface Deck 
{
	_id?: string,
	isPublic: boolean,
	name: string,
	edition: string,
	image: string, // temporary
	brand: Brand,

	// optional
	date_of_issue?: any,
	stock?: string,
	finish?: string,
	print_run?: any,
	retail_price?: any,
	manufacturer?: string,
	total?: any;
	sealed?: any;
	opened?: any;
	style?: any;
	product_description?: any;
}
