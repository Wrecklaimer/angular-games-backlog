export class Game {
	id: number;
	title: string;
	release_date: string;
	status: number;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
