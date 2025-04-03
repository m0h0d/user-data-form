import { UserDataForm } from "@/components/user-data-form";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Formulář pro sběr uživatelských dat
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Vyplňte prosím následující údaje pro registraci
          </p>
        </header>
        
        <UserDataForm />
      </div>
    </main>
  );
}