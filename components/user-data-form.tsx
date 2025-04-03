import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { userFormSchema } from "@/lib/schema";
import { FormField } from "./ui/form-field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type FormValues = z.infer<typeof userFormSchema>;

export const UserDataForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      username: "",
      password: "",
      phoneNumber: "",
      email: "",
      longText: "",
      age: undefined,
      birthDate: undefined,
      creditCard: "",
      bankAccount: "",
    },
  });

  const handleFormSubmit = async (data: FormValues) => {
    setSubmissionStatus("submitting");
    
    try {
      // In a real app, you would send this data to an API
      console.log("Form data:", data);
      
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmissionStatus("success");
      reset();
      
      // Reset success status after 3 seconds
      setTimeout(() => {
        setSubmissionStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Uživatelský formulář</h1>
      
      {submissionStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
          Formulář byl úspěšně odeslán!
        </div>
      )}
      
      {submissionStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
          Při odesílání formuláře došlo k chybě. Zkuste to prosím znovu.
        </div>
      )}
      
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username field */}
          <FormField
            label="Uživatelské jméno"
            htmlFor="username"
            error={errors.username?.message}
          >
            <Input
              id="username"
              type="text"
              placeholder="JanNovak123"
              error={!!errors.username}
              {...register("username")}
            />
          </FormField>

          {/* Password field */}
          <FormField
            label="Heslo"
            htmlFor="password"
            error={errors.password?.message}
          >
            <Input
              id="password"
              type="password"
              placeholder="********"
              error={!!errors.password}
              {...register("password")}
            />
          </FormField>

          {/* Phone number field */}
          <FormField
            label="Telefonní číslo"
            htmlFor="phoneNumber"
            error={errors.phoneNumber?.message}
          >
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+420 123 456 789"
              error={!!errors.phoneNumber}
              {...register("phoneNumber")}
            />
          </FormField>

          {/* Email field */}
          <FormField
            label="Email"
            htmlFor="email"
            error={errors.email?.message}
          >
            <Input
              id="email"
              type="email"
              placeholder="jan.novak@example.com"
              error={!!errors.email}
              {...register("email")}
            />
          </FormField>

          {/* Age field */}
          <FormField
            label="Věk"
            htmlFor="age"
            error={errors.age?.message}
          >
            <Input
              id="age"
              type="number"
              placeholder="30"
              error={!!errors.age}
              {...register("age", { valueAsNumber: true })}
            />
          </FormField>

          {/* Birth date field */}
          <FormField
            label="Datum narození"
            htmlFor="birthDate"
            error={errors.birthDate?.message}
          >
            <Input
              id="birthDate"
              type="date"
              error={!!errors.birthDate}
              {...register("birthDate", { 
                setValueAs: (value) => value ? new Date(value) : undefined 
              })}
            />
          </FormField>

          {/* Credit card field */}
          <FormField
            label="Číslo platební karty"
            htmlFor="creditCard"
            error={errors.creditCard?.message}
          >
            <Input
              id="creditCard"
              type="text"
              placeholder="1234 5678 9012 3456"
              error={!!errors.creditCard}
              {...register("creditCard")}
            />
          </FormField>

          {/* Bank account field */}
          <FormField
            label="Číslo bankovního účtu"
            htmlFor="bankAccount"
            error={errors.bankAccount?.message}
          >
            <Input
              id="bankAccount"
              type="text"
              placeholder="123456-7890123456/0800"
              error={!!errors.bankAccount}
              {...register("bankAccount")}
            />
          </FormField>
        </div>

        {/* Long text field */}
        <FormField
          label="Delší text"
          htmlFor="longText"
          error={errors.longText?.message}
        >
          <Textarea
            id="longText"
            placeholder="Napište sem delší text..."
            error={!!errors.longText}
            {...register("longText")}
          />
        </FormField>

        <div className="flex justify-end space-x-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => reset()}
          >
            Vymazat
          </Button>
          <Button 
            type="submit" 
            disabled={submissionStatus === "submitting"}
          >
            {submissionStatus === "submitting" ? "Odesílám..." : "Odeslat"}
          </Button>
        </div>
      </form>
    </div>
  );
};