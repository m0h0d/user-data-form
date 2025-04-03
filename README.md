# User Data Form

Moderní webová aplikace s formulářem pro sběr uživatelských dat. Zahrnuje pole pro uživatelské jméno, heslo, telefonní číslo, email, dlouhý text, věk, datum narození, číslo platební karty a číslo bankovního účtu.

## Technologie

- Next.js 14
- React 18
- TypeScript
- TailwindCSS pro styling
- React Hook Form pro správu formuláře
- Zod pro validaci dat

## Funkce

- Responzivní design
- Kompletní validace všech polí v reálném čase
- Přístupnost (a11y)
- Zpracování chyb
- Stylované UI komponenty

## Instalace

1. Naklonujte repozitář:

```bash
git clone https://github.com/m0h0d/user-data-form.git
cd user-data-form
```

2. Nainstalujte závislosti:

```bash
npm install
# nebo
yarn install
# nebo
pnpm install
```

3. Spusťte vývojový server:

```bash
npm run dev
# nebo
yarn dev
# nebo
pnpm dev
```

4. Otevřete [http://localhost:3000](http://localhost:3000) ve vašem prohlížeči.

## Validační pravidla

Formulář má následující validační pravidla:

- **Uživatelské jméno**: 3-50 znaků
- **Heslo**: Min. 8 znaků, musí obsahovat velké písmeno, malé písmeno a číslo
- **Telefonní číslo**: Formát +420 XXX XXX XXX nebo XXX XXX XXX
- **Email**: Standardní validace emailové adresy
- **Dlouhý text**: 10-1000 znaků
- **Věk**: 18-120 let
- **Datum narození**: Uživatel musí být starší 18 let
- **Číslo platební karty**: Formát XXXX XXXX XXXX XXXX
- **Číslo bankovního účtu**: Formát XXXXXX-XXXXXXXXXX/XXXX nebo XXXXXX/XXXX

## Produkční nasazení

Pro build produkční verze:

```bash
npm run build
npm start
# nebo
yarn build
yarn start
# nebo
pnpm build
pnpm start
```