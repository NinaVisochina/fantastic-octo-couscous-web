export interface ICategoryCreate{
    name: string;
    image:File | null;
}
export interface IProductCreate {
    name: string;
    description: string;
    price: string;
    quantity: string;
    category_id: number;
}