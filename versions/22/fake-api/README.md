# Fake Travel API (NestJS + MongoDB)

API rapide pour gerer des journees de voyage et leurs etapes.

## Demarrage

1. Avoir MongoDB local lance sur `mongodb://127.0.0.1:27017`
2. Installer les deps:
   - `npm install`
3. Lancer en dev:
   - `npm run start:dev`

L'API tourne sur `http://localhost:3000`.

## Structure metier

- Une `travel day` contient:
  - `date`
  - `steps[]`
- Une `step` contient:
  - `place`
  - `peopleSeen[]`
  - `coolness` (note de 0 a 5)

## Endpoints

- `POST /travel-days`
- `GET /travel-days`
- `GET /travel-days/:id`
- `PATCH /travel-days/:id`
- `DELETE /travel-days/:id`

### Exemple POST

```json
{
  "date": "2026-07-06",
  "steps": [
    {
      "place": "Montagnes flottantes d'Aereth",
      "peopleSeen": ["Milo", "Capitaine Nia"],
      "coolness": 5
    },
    {
      "place": "Cafe de Reykjavik",
      "peopleSeen": ["Lina"],
      "coolness": 4
    }
  ]
}
```
