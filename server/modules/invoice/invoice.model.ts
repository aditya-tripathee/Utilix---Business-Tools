import { model, Schema } from "mongoose";
import { IAddress, IBusiness, ICustomer, IInvoice, IItem, IPaymentDetails } from "./invoice.types";

const AddressSchema = new Schema<IAddress>({
      address1: {
        type: String,
        required:true,
      },
      address2:{
        type: String,
      },
      city:{
        type:String,
        required:true,
      },
      state:{
        type:String,
        required:true,
      },
      pincode:{
        type:String,
        required:true,
      },
      country:{
        type:String,
        required:true,
      },
},
{
    _id:false
});


const BusinessSchema = new Schema<IBusiness>({
      name:{
        type:String,
        required:true,
        trim:true,
      },
      logo:{
        type:String,
      },
      email:{
        type:String,
        lowercase:true,
        trim:true,
        match:[/^[\w\.-]+@[\w\.-]+\.\w+$/]
      },
      phone:{
        type:String,
      },
      gstin:{
        type:String,
        required:true,
        uppercase:true,
        trim:true,
        match:[/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[1-9A-Z]{1}$/]
      },
      address:{
        type:AddressSchema,
        required:true,
      }

},{
    _id:false
})


const CustomerSchema = new Schema<ICustomer>({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        match:[/^[\w\.-]+@[\w\.-]+\.\w+$/]
    },
    phone:{
        type:String,
    },
    billingAddress:{
        type:AddressSchema,
        required:true,
    },
    shippingAddress:{
        type:AddressSchema,
        required:true,
    },
    gstin:{
        type:String,
        uppercase:true,
        trim:true,
        match:[/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[1-9A-Z]{1}$/]
    }
    
},{
    _id:false
})


const ItemSchema = new Schema<IItem>({
      name:{
        type:String,
        required:true,
        trim:true,
      },
      description:{
        type:String,
      },
      hsnSac:{
        type:String,
        uppercase:true,
        trim:true,
      },
      quantity:{
        type:Number,
        required:true,
        min:0,
      },
      unit:{
        type:String,
      },
      price:{
        type:Number,
        required:true,
        min:0,
      },
      discount:{
        type:Number,
        default:0,
        min:0,
      },
      gstRate:{
        type:Number,
        default:0,
        min:0,
      },
      total:{
        type:Number,
        required:true,
        min:0,
      }
},{
  _id:false
})

const PaymentDetailsSchema = new Schema<IPaymentDetails>({
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



const InvoiceSchema = new Schema<IInvoice>({
      invoiceNumber:{
        type:String,
        required:true,
        unique:true,
      },
      invoiceDate:{
        type:Date,
        required:true,
      },
      dueDate:{
        type:Date,
      },
      currency:{
        type:String,
        required:true,
      },
      status:{
        type:String,
        required:true,
      },
      business:{
        type:BusinessSchema,
        required:true,
      },
      customer:{
        type:CustomerSchema,
        required:true,
      },
      items:{
        type:[ItemSchema],
        required:true,
      },
      subtotal:{
        type:Number,
        required:true,
      },
      discount:{
        type:Number,
        required:true,
      },
      cgst:{
        type:Number,
        required:true,
      },
      sgst:{
        type:Number,
        required:true,
      },
      igst:{
        type:Number,
        required:true,
      },
      shipping:{
        type:Number,
        required:true,
      },
      otherCharges:{
        type:Number,
        required:true,
      },
      grandTotal:{
        type:Number,
        required:true,
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
      createdAt:{
        type:Date,
        default:Date.now,
      },
      updatedAt:{
        type:Date,
        default:Date.now,
      }
},
{
    timestamps:{
      createdAt:"createdAt",
      updatedAt:"updatedAt"
    }
}
)


export const InvoiceModel = model<IInvoice>("invoice",InvoiceSchema);


