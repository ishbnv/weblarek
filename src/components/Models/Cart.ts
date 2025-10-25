import { IProduct } from "../../types";

export class Cart {
    private items: IProduct[] = [];

    getCartList(): IProduct[] {
        return this.items
    }

    addToCart(item: IProduct): void {
        this.items.push(item);
    }

    removeFromCart(item: IProduct): void {
        this.items = this.items.filter(p => p.id !== item.id);
    }

    emptyCart(): void {
        this.items = [];
    }

    getCartSum(): number {
        return this.items.reduce((sum, item) => {
            return sum + (item.price || 0);
        }, 0);
    }
    
    getCartCount(): number {
        return this.items.length
    }

    getItemAvailability(id: string): boolean {
        const product = this.items.find(item => item.id === id) || null;
        if (!product || product.price === null) {
            return false
        }
        return true
    }
}
