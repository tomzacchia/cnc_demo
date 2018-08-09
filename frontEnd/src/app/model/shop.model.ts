export class ShopInfoModel{

    name: string;
    address:Address;
    phoneNumber: string;
    image: string;
    hours: Hours;
    // hours:{
    //     mon: string;
    //     tue: string;
    //     wed: string;
    //     thu: string;
    //     fri: string;
    //     sat: string;
    //     sun: string;
    // }

    constructor( name: string, phoneNumber: string, image:string, mon: string){
        //Initialize objects
        this.hours = new Hours();
        
        this.name = name;
        // this.address.streetAddress = streetAddress;
        // this.address.city = city;
        // this.address.province = province;
        // this.address.postalCode = postalCode;
        this.phoneNumber = phoneNumber;
        this.image = image;
        this.hours.mon = mon;
        // this.hours.tue = tue;
        // this.hours.wed = wed;
        // this.hours.thu = thu;
        // this.hours.fri = fri;
        // this.hours.sat = sat;
        // this.hours.sun = sun;
    }
}

export class Address{
     streetAddress: string;
     city: string;
     province: string;
     postalCode: string;

    constructor( ){};

}
export class Hours{
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;

    constructor(){};

}
