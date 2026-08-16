import {z} from 'zod';



const AddressValidations =  z.object({
  addressLine1: z.string().trim().optional(),
  addressLine2: z.string().trim().optional(),
  city: z.string().trim().optional(),
  state: z.string().trim().optional(),
  postalCode: z.string().trim().optional(),
  country: z.string().trim().optional(),
});



const BusinessDetailsValidations = z.object({
    name: z.string().min(1,"Business Name is required"),
    email : z.string().email("Invalid email").optional(),
    phone : z.string().min(10,"Phone number must be at least 10 digits").optional(),
    logo : z.string().optional(),
    address : AddressValidations.optional(),
    gstNumber : z.string().optional()
})



const CustomerDetailsValidations = z.object({
    name: z.string().min(1,"Business Name is required"),
    email : z.string().email("Invalid email").optional(),
    phone : z.string().min(10,"Phone number must be at least 10 digits").optional(),
    address : AddressValidations.optional(),
    gstNumber : z.string().optional()
});


const InvoiceItemsValidation = z.object({
    name: z.string().min(1,"Item name is required"),
    description : z.string().optional(),
    quantity : z.number().min(1,"Quantity must be at least 1"),
    unitPrice : z.number().min(0,"Unit price cannot be negative"),
    discount : z.number().min(0,"Discount cannot be negative").optional(),
    taxRate : z.number().min(0,"Tax rate cannot be negative").max(100,"Tax rate cannot be greater than 100").optional(),
    total : z.number().min(0,"Total cannot be negative").optional()
});


const PaymentDetailsValidation = z.object({
    bankName : z.string().optional(),
    accountName : z.string().optional(),
    accountNumber : z.string().optional(),
    ifscCode : z.string().optional(),
    upiId : z.string().optional()
});



export const InvoiceValidation = z.object({
    invoiceNumber: z.string().min(1,"Invoice number is required"),
    invoiceDate: z.string().min(1,"Invoice date is required"),
    dueDate: z.string().optional(),
    currency: z.string().min(1,"Currency is required"),
    business: BusinessDetailsValidations,
    customer: CustomerDetailsValidations,
    items: z.array(InvoiceItemsValidation).min(1,"Items are required"),
    subtotal: z.number().min(0,"Subtotal cannot be negative"),
    discount: z.number().min(0,"Discount cannot be negative"),
    cgst: z.number().min(0,"CGST cannot be negative"),
    sgst: z.number().min(0,"SGST cannot be negative"),
    igst: z.number().min(0,"IGST cannot be negative"),
    shipping: z.number().min(0,"Shipping cannot be negative"),
    otherCharges: z.number().min(0,"Other charges cannot be negative"),
    grandTotal: z.number().min(0,"Grand total cannot be negative"),
    notes: z.string().optional(),
    terms: z.string().optional(),
    paymentDetails: PaymentDetailsValidation.optional(),
    status: z.enum(["draft","sent","paid","overdue","cancelled"]),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional()
});


