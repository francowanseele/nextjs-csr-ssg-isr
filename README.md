# React + Next.js: Data Fetching (CSR, SSR, SSG, ISR)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

## Features

Next.js has many data fetching strategies. Although initially Next.js was well known to be a Server-Side Rendering Framework, it turns out that Next.js has 4 methods of Data Fetching. Here is the short explanation each so you get familiar with the abbreviation of CSR, SSR, SSG, ISR.

- CSR - Client-Side Rendering, this is the usual kind of data fetching using useEffect, it will fetch the data from the API every single page request on the client-side (after the page is rendered, then the function will run).

- SSR - Server-Side Rendering, will run a special function to fetch data from API every page request on the server-side (before the page is loaded, that special function will run first, creating a delay, then after that, it will serve the page).

- SSG - Static Site Generation, will run a special function to fetch data once when that page builds.

- ISR – Incremental Static Regeneration, this is a new thing, shortly put, a combination of SSG, and SSR, where it served statically, but at a certain time and certain condition that page will rebuild and fetch the data from the API again.

This project is a quick demo of each of the above methods.

## Setup & Run

1. Clone repository

2. Run:
```
yarn install
```

3. Run app
```
yarn dev
```
