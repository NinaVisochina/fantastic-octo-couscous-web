// scr/component/product/types.ts

export interface IProductItem {
    id: number;
    name: string;
    description: string;
    price: string;
    quantity: string;
    category_id: number;
    product_images: { id: number, name: string, priority: number }[];
}


