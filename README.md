# Movie Explorer (React + TMDB)

A simple **React** application that consumes the **TMDB API** to display popular movies, search by title, and manage a list of favorites.

This project was built to practice core frontend skills:
- Routing with React Router
- Global state with React Context
- API consumption with `fetch`
- Basic UX states (loading, error)
- Componentization and clean structure

---

## Features

- ✅ List **popular movies** (TMDB `/movie/popular`)
- 🔎 Search movies by title (TMDB `/search/movie`)
- ❤️ Add / remove movies from **Favorites**
- 🧠 Favorites state managed globally via **React Context**
- ⏳ Loading and error handling for API calls

---

## Tech Stack

- React (React 19)
- Vite
- React Router DOM
- TMDB API
- CSS Modules/Files (plain CSS)

---

## Project Structure

```text
src
├── App.jsx
├── main.jsx
├── components
│   ├── MovieCard.jsx
│   └── NavBar.jsx
├── context
│   └── MovieContext.jsx
├── pages
│   ├── Home.jsx
│   └── Favorites.jsx
├── services
│   └── api.js
└── css
    ├── App.css
    ├── Favorites.css
    ├── Home.css
    ├── index.css
    ├── MovieCard.css
    └── Navbar.css
````

---

## Getting Started

```bash
cd frontend
```

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root:

```bash
VITE_TMDB_API_KEY=your_api_key_here
```

> You can get an API key by creating an account on TMDB.

### 3) Run the project

```bash
npm run dev
```

Vite will start the development server, usually at:

```text
http://localhost:5173
```

---

## TMDB Integration

The project uses TMDB endpoints:

* `GET /movie/popular` to fetch trending popular movies
* `GET /search/movie` to search by text query

Poster images are rendered using TMDB image base URL:

```text
https://image.tmdb.org/t/p/w500/<poster_path>
```

---

## Favorites

Favorites are managed globally using **React Context** (`MovieContext`), allowing:

* checking if a movie is favorite (`isFavorite`)
* adding a movie to favorites (`addToFavorites`)
* removing from favorites (`removeFromFavorites`)

The `MovieCard` component exposes a heart button to toggle favorite status.

---

## Notes / Improvements

Planned improvements (optional ideas):

* Movie details page (`/movie/:id`) with more TMDB endpoints
* Persist favorites in `localStorage`
* Better search filtering (currently filters by `startsWith`)
* Debounced search
* Pagination / infinite scroll
* Better UI states (empty results, skeletons)

---

## Author

Lucas Garcia
Frontend • Backend • Data Systems

````

---

### Ajuste rápido que você DEVERIA fazer no `api.js` (vale a pena)
Hoje você tem:

```js
const API_KEY = "..."
````
