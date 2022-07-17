import { Deck } from 'src/app/model/deck';

export interface UserDeck
{
	_id?: string
	deck: Deck,

	storage?: string,
	cost?: number,
	addtional_note?: string
}
