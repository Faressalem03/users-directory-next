# Users Directory — Next.js version

A users directory built with Next.js (App Router): data is fetched on the server, rendered as HTML, and filtered on the client.

This is the same app as my [React version](https://github.com/faressalem03/users-directory), rebuilt to compare the two approaches.

**Live demo:** https://users-directory-next.vercel.app

---

## Screenshots

**Users list with live search**

![Users list](.src/app/screenshots/list.png)

**User details page**

![User details](.src/app/screenshots/details.png)


**view from a mobile to confirm the responsiveness**

![mobile view](.src/app/screenshots/mobile.png)

---

## Features

- Users fetched from the DummyJSON API
- Live search filtering by name
- A details page for each user at `/users/[userId]`
- Loading UI with `loading.js`
- Empty state when no user matches the search
- Responsive card grid, no media queries needed
- Page metadata for SEO

---

## What changed from the React version

| | React (CRA) | Next.js |
|---|---|---|
| Data fetching | `useEffect` + `axios` in the browser | `async` server component, before the HTML is sent |
| Loading state | `useState` + a conditional | `loading.js`, handled by the framework |
| Routing | React Router (`Routes`, `Link`, `useParams`) | folders and files (`app/users/[userId]/page.js`) |
| URL params | `useParams()` | the `params` prop |
| SEO | one empty `<div id="root">` in the HTML | full HTML with the content, plus metadata |

The main difference is **where the work happens**. In the React version the browser downloads the JavaScript, then fetches, then draws. In the Next version the server fetches and sends finished HTML, so the content is there on first paint.

---

## Server and client components

Most of the app is server components. Only the search needs the browser:

- **Server:** the users page, the details page, the cards — they only fetch and display
- **Client (`"use client"`):** the search section, because it uses `useState` and `onChange`

The data is fetched on the server and passed down to the client component, which filters it.

---

## Built with

- Next.js (App Router)
- React
- CSS Modules
- DummyJSON API

---

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

---

## Notes

The API is a mock service, so the data is read-only and nothing is persisted.
