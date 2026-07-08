export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    phone: number
}



export interface Product {
    id:number;
    name:string;
    price:number;
    imageurl:string;
    description: string;
}



export interface CartItem extends Product {
  quantity: number;
}


export interface Coupon {
  code: string;
  discount: number;
}

