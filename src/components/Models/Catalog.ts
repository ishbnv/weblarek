import { IProduct } from "../../types";

export class Catalog {
    private items: IProduct[] = [];
    private currentItem: IProduct | null = null;
    
    setItems(items: IProduct[]): void {
        this.items = items;
    }

    getItems(): IProduct[] {
        return this.items;
    }

    getItemById(id: string): IProduct {
        const item = this.items.find(item => item.id === id);
        if (!item) {
            throw new Error(`Товар по id ${id} не был найден`);
        }
        return item;
    }

    setCurrentItem(product: IProduct): void {
        this.currentItem = product;
    }
    
    getCurrentItem(): IProduct | null {
        return this.currentItem;
    }
}