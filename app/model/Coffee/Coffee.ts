export class Coffee {
	private id: number;
	private name: string;
	private image: string;
	private price: number;
	private rating: number;
	private votes: number;
	private popular: boolean;
	private available: boolean;

	constructor(id: number, name: string, image: string, price: number, rating: number, votes: number, popular: boolean, available: boolean) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.price = price;
		this.rating = rating;
		this.votes = votes;
		this.popular = popular;
		this.available = available;
	}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public getImage(): string {
		return this.image;
	}

	public getPrice(): number {
		return this.price;
	}

	public getRating(): number {
		return this.rating;
	}

	public getVotes(): number {
		return this.votes;
	}

	public isPopular(): boolean {
		return this.popular;
	}

	public isAvailable(): boolean {
		return this.available;
	}
}