# Elias Julekalender

En komplett, gratis og statisk julete musikk-julekalender bygget med HTML, CSS og JavaScript.

## Kjør lokalt

Du kan åpne `index.html` direkte i nettleseren.

Hvis du vil kjøre en enkel lokal server:

```bash
python3 -m http.server 5173
```

Åpne deretter:

```text
http://localhost:5173
```

## Gratis deploy

Prosjektet er statisk og trenger ingen backend, database, cookies eller betalte API-er.

- GitHub Pages: push filene til et repo, gå til `Settings` -> `Pages`, og velg branchen som kilde.
- Netlify: dra prosjektmappen inn i Netlify Drop, eller koble til GitHub-repoet.
- Vercel: importer GitHub-repoet som et statisk prosjekt. Ingen build command trengs.

## Endre innhold

Alle sanger, sjangere, artister, produksjonsstiler og stemninger ligger i `wheelData` øverst i `script.js`. Legg til nye elementer i riktig `items`-array.

## Admin

Admin er en enkel frontend-admin for privat bruk. Den er ikke sikker innlogging, fordi credentials ligger i JavaScript-koden.

Standard admin:

```text
Brukernavn: elias.dinneboss@gmail.com
Passord: Slikkepott123
```

Endre admin-brukernavn og passord i `ADMIN_CREDENTIALS` øverst i `script.js`.

Kalenderlenker lagres lokalt i nettleseren med `localStorage`. For å slette alle lagrede luker, åpne DevTools Console i nettleseren og kjør:

```js
localStorage.removeItem("eliasJulekalenderDoors");
location.reload();
```

E-post sendes med en gratis `mailto:`-lenke til:

```text
elias.dinneboss@gmail.com
```
