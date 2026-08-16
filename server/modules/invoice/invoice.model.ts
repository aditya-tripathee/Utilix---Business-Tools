import { model, Schema } from "mongoose";
import { IAddress, IBusinessDetails, IClientDetails, IInvoice, IInvoiceItems, IPaymentDetails } from "./invoice.types";


const AddressSchema = new Schema<IAddress>({
     address1:{
      type:String,
      required:true
     },
     address2:{
      type:String,
     },
     city:{
      type:String,
      required:true
     },
     district:{
      type:String,
      required:true
     },
     state:{
      type:String,
      required:true
     },
     pincode:{
      type:String,
      required:true
     },
     country:{
      type:String,
      default:true
     }
},{
   _id:false
})


const BusinessDetailsSchema = new Schema<IBusinessDetails>({
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      },
      phone:{
        type:String,
        required:true
      },
        logo:{
        type:String,
      },
      address:{
        type:AddressSchema,
        required:true
      },
      gstNumber:{
        type:String,
        required:true
      }
},{
  _id:false
})


export const ClientDetailsSchema = new Schema<IClientDetails>({
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
      },
      phone:{
        type:String,
      },
      address:{
        type:AddressSchema,
      },
      gstNumber:{
        type:String,
      },
      billingAddress:{
        type:AddressSchema,
      }
},{
  _id:false
})


export const InvoiceItemSchema = new Schema<IInvoiceItems>({
      name:{
        type:String,
        required:true
      },
      description:{
        type:String,
      },
      quantity:{
        type:Number,
        required:true
      },
      unitPrice:{
        type:Number,
        required:true
      },
      discount:{
        type:Number,
      },
      taxRate:{
        type:Number,
        required:true
      },
      total:{
        type:Number,
        required:true
      }
},{_id:false})


export const PaymentDetailsSchema = new Schema<IPaymentDetails>({
      bankName:{
        type:String,
      },
      accountName:{
        type:String,
      },
      accountNumber:{
        type:String,
      },
      ifscCode:{
        type:String,
      },
      upiId:{
        type:String,
      }
},{
  _id:false
})


export const InvoiceSchema = new Schema<IInvoice>({
      invoiceNumber:{
        type:String,
        required:true
      },
      invoiceDate:{
        type:Date,
        required:true
      },
      dueDate:{
        type:Date,
      },
      currency:{
        type:String,
        required:true
      },
      business:{
        type:BusinessDetailsSchema,
        required:true
      },
      customer:{
        type:ClientDetailsSchema,
        required:true
      },
      items:{
        type:[InvoiceItemSchema],
        required:true
      },
      subtotal:{
        type:Number,
        required:true
      },
      discount:{
        type:Number,
        required:true
      },
      cgst:{
        type:Number,
        required:true
      },
      sgst:{
        type:Number,
        required:true
      },
      igst:{
        type:Number,
        required:true
      },
      shipping:{
        type:Number,
        required:true
      },
      otherCharges:{
        type:Number,
        required:true
      },
      grandTotal:{
        type:Number,
        required:true
      },
      notes:{
        type:String,
      },
      terms:{
        type:String,
      },
      paymentDetails:{
        type:PaymentDetailsSchema,
      },
      status:{
        type:String,
        required:true
      },
      createdAt:{
        type:Date,
        default:Date.now
      },
      updatedAt:{
        type:Date,
        default:Date.now
      }
},{
  _id:true
})


export const InvoiceModel = model<IInvoice>("Invoice",InvoiceSchema);


