const API_DOMAIN = 'https://fakestoreapi.com/';

export interface Product { 
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number,
        count: number
    }
}

export interface ArrayOfProducts {
    products: Product[];

}

export async function getAllProducts(): Promise<Product[]> {
    const response = await fetch(`${API_DOMAIN}products`);
    const json = await response.json();

    return json;
}