export interface IAddress{
    address1:String,
    address2: String,
    city:String,
    district:String,
    state:String,
    pincode:String,
    country:String,
}


export interface IClientDetails{
    name:String,
    email?:String,
    phone?:String,
    addres?:IAddress,
    gstNumber?: String,
    billingAddress?:IAddress
}


export interface IBusinessDetails{
    name?:String,
    email?:String,
    phone?:String,
    logo?:String,
    address?:IAddress,
    gstNumber?:string
}

export interface IInvoiceItems{
    name:String,
    description?:String,
    quantity:number,
    unitPrice:number,
    discount?:number,
    taxRate:number,
    total:number
}

export interface ITaxDetails{
    taxRate:number,
    taxAmount:number
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

  business: IBusinessDetails;
  customer: IClientDetails;

  items: IInvoiceItems[];

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

  status:
    | "draft"
    | "sent"
    | "paid"
    | "overdue"
    | "cancelled";

  createdAt?: Date;
  updatedAt?: Date;
}