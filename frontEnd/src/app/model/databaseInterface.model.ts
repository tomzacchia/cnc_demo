import { Hours } from './shop.model';

export class dbProduct {
    constructor (
        public pid: string,
        public name: string,
        public cost: number,
        public specificCost: number,
        public img: string,
        public quantity?: number
    ) {}
}

export class dbShop {
    constructor (
        public name: string,
        public address: string,
        public owner: string,
        public phone: string,
        public Hours: Hours
    ) {}
}

export class dbUser {
    constructor(
        public uid: string,
        public uname: string,
        public password: string,
        public email: string
    ) {}
}