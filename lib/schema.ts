import { z } from "zod";

export const userFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Uživatelské jméno musí mít alespoň 3 znaky" })
    .max(50, { message: "Uživatelské jméno může mít maximálně 50 znaků" }),
  
  password: z
    .string()
    .min(8, { message: "Heslo musí mít alespoň 8 znaků" })
    .regex(/[A-Z]/, { message: "Heslo musí obsahovat alespoň jedno velké písmeno" })
    .regex(/[a-z]/, { message: "Heslo musí obsahovat alespoň jedno malé písmeno" })
    .regex(/[0-9]/, { message: "Heslo musí obsahovat alespoň jedno číslo" }),
  
  phoneNumber: z
    .string()
    .regex(/^(\+420)?\s*[0-9]{3}\s*[0-9]{3}\s*[0-9]{3}$/, { 
      message: "Telefonní číslo musí být ve formátu +420 XXX XXX XXX nebo XXX XXX XXX" 
    }),
  
  email: z
    .string()
    .email({ message: "Neplatná emailová adresa" }),
  
  longText: z
    .string()
    .min(10, { message: "Text musí mít alespoň 10 znaků" })
    .max(1000, { message: "Text může mít maximálně 1000 znaků" }),
  
  age: z
    .number()
    .min(18, { message: "Věk musí být alespoň 18 let" })
    .max(120, { message: "Věk může být maximálně 120 let" }),
  
  birthDate: z
    .date()
    .refine((date) => {
      const today = new Date();
      const minimumAge = new Date();
      minimumAge.setFullYear(today.getFullYear() - 18);
      return date <= minimumAge;
    }, { message: "Musíte být starší 18 let" }),
  
  creditCard: z
    .string()
    .regex(/^[0-9]{4}\s*[0-9]{4}\s*[0-9]{4}\s*[0-9]{4}$/, { 
      message: "Číslo platební karty musí být ve formátu XXXX XXXX XXXX XXXX" 
    }),
  
  bankAccount: z
    .string()
    .regex(/^[0-9]{1,6}-?[0-9]{1,10}\/[0-9]{4}$/, { 
      message: "Číslo bankovního účtu musí být ve formátu XXXXXX-XXXXXXXXXX/XXXX nebo XXXXXX/XXXX" 
    }),
});