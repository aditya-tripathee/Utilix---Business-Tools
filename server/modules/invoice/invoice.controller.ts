import { Request, Response } from "express"
import { InvoiceValidation } from "./invoice.validations"

export const createInvoice = async (req: Request, res: Response) => {
    try {
        const result = InvoiceValidation.safeParse(req.body);
        
        



    } catch (error) {

    }
}


