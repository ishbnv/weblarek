import { IBuyer, TPayment } from "../../types";

export class Customer implements IBuyer {
    payment: TPayment;
    email: string;
    phone: string;
    address: string;

    constructor(payment: TPayment = '', email: string = '', phone: string = '', address: string = '') {
        this.payment = payment;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    setUserData(data: Partial<IBuyer>): void {
        if (data.payment !== undefined) {
            this.payment = data.payment;
        }
        if (data.email !== undefined) {
            this.email = data.email;
        }
        if (data.phone !== undefined) {
            this.phone = data.phone;
        }
        if (data.address !== undefined) {
            this.address = data.address;
        }
    }

    getUserData(): IBuyer {
        return {
            payment: this.payment,
            email: this.email,
            phone: this.phone,
            address: this.address
        };
    }

    removeUserData(): void {
        this.payment = '';
        this.email = '';
        this.phone = '';
        this.address = '';
    }
    
    validateUserData(): { [key: string]: string } {
        const error: { [key: string]: string } = {};

        if (!this.payment) {
            error.payment = 'Необходимо выбрать способ оплаты';
        }
        if (!this.email) {
            error.email = 'Необходимо указать email';
        }
        if (!this.phone) {
            error.phone = 'Необходимо указать телефон';
        }
        if (!this.address) {
            error.address = 'Необходимо указать адрес';
        }

        return error;
    }

    isValid(): boolean {
        return Object.keys(this.validateUserData()).length === 0;
    }
}