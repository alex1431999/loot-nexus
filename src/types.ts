export interface Item {
	name: string;
	price: number;
	weight: number;
	stackable: boolean;
	sellto: Array<string>;
}

export interface Player {
	name: string;
}
