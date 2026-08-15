export interface IAddress {
    address1: String,
    address2: String,
    city: string,
    state: string,
    pincode: string,
    country: string,
};

export interface IBusiness {
    name: String,
    logo?: String,
    email?: String,
    phone?: String,
    gstin: String,  
    address?: IAddress
}

export interface ICustomer {
    name: String,
    email?: String,
    phone?: String,
    billingAddress?: IAddress,
    shippingAddress?: IAddress,
    gstin?: String
}


export interface IItem {
    name?: String,
    description?: String,
    hsnSac?: string;
    quantity: number;
    unit?: string;
    price: number;
    discount?: number;
    gstRate?: number;
    total: number;
}

export interface IPaymentDetails {
    bankName?: string;
    accountName?: string;
    accountNumber?: string;
    ifscCode?: string;
    upiId?: string;
}



export interface IInvoice {
    invoiceNumber: string;

    invoiceDate: Date;

    dueDate?: Date;

    currency: string;

    status:
    | "draft"
    | "sent"
    | "paid"
    | "overdue"
    | "cancelled";

    business: IBusiness;

    customer: ICustomer;

    items: IItem[];

    subtotal: number;

    discount: number;

    cgst: number;

    sgst: number;

    igst: number;

    shipping: number;

    otherCharges: number;

    grandTotal: number;

    notes?: string;

    terms?: string;

    paymentDetails?: IPaymentDetails;

    createdAt?: Date;

    updatedAt?: Date;
}