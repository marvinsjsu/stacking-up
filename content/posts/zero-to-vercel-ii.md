---
title: 'From Zero To Vercel: My Freelance Leap with Next.js (Part II)'
date: '2023-02-20'
latest-update: '2024-01-14'
published: false
category: next.js
abstract: 'Building a small marketing website with Next.js may have been overkill, but then again it cut so much time from start to finish, that moving forward, Next.js and Vercel might just be my go-to framework and platform for future web projects.'
imgUrl: '/static/nextjs.png'
protocol:
    - "pretty powerful rendering options: Static Site Generation, SSR, ISR"
    - "deploying in Vercel is as easy as a few clicks"
---

## From Zero To Vercel: My Freelance Leap with Ctrlyr (Part II)

In my previous post, I focused a lot on what I learned about Next.js' out-of-the-box optimizations.  I continue here with sharing some of the details I've learned about rendering options Next.js offers, which gives us tighter control on how we can improve the performance of our app.

### Rendering Options

Before I used Next.js, I had a chance to work on a Universal/Isomorphic App (forever grateful to Tyler Brown and Rachel Klausner). This is where I learned about Server-Side Rendering (SSR) and hydration - where the server renders the initial HTML content, sends it to the browser, then React inserts interactive components into the DOM for dynamic behavior.

Here's a few of the benefits to this pattern or technique:
- **SEO-friendly**: the problem with content that's rendered on the client (like in SPAs) is that it's not easy for search engine crawlers to index the content because crawlers would have to rely on JavaScript to be loaded and executed for content to be rendered, which can be time-consuming and resource-intensive - and if there are any errors or timeouts, then the content will be missed entirely
- **improved performance**: the browser will receive the server-generated HTML so the user will quickly see the page, even though there may be an actual wait for the JavaScript to finish loading and executing
- **one codebase**: we don't have to maintain two separate codebases for front-end and backend, and so we can share logic and React components for both

### Client-side Rendering



### Static Site Generation

For Ctrlyr's marketing website ([ctrlyr-website on Github](https://github.com/marvinsjsu/ctrlyr-website/tree/main)), I leveraged **Static Site Generation (SSG)** as the primary rendering pattern across the five-page site. With Next.js' file-based routing system (Page Router), SSG is the default "mode". Any page in the `/pages` directory is treated as statically generated unless it explicitly fetches data at runtime. The rendering process happens at **build time**, meaning the HTML for each page is pre-rendered and ready to serve when users request it.

For scenarios where we need to fetch data and still want content to be statically generated, Next.js provides the **`getStaticProps`** function. This is somewhat analogous to React lifecycle methods, allowing us to define data-fetching logic that runs at build time. The data fetched within `getStaticProps` is passed to the React component as props, enabling pre-rendering of the page with that data.

This approach makes our pages incredibly fast, as the pre-rendered HTML is sent to the browser immediately without waiting for JavaScript to execute. But Next.js doesn’t stop there — it enhances performance further by **caching these rendered pages**. When deploying through **Vercel**, the generated static files are stored in a **Content Delivery Network (CDN)**, utilizing edge servers distributed worldwide. This means users are served the content from a server geographically closest to them, reducing latency and ensuring faster load times globally.

#### Server-side Rendering*

#### Incremental Site Regeneration*

#### Deploying on Vercel

- **Allow Vercel access to your Github account**


### Summary

Often times with frameworks, a lot of things are done for us as if it were magic, and so the trade-off is knowing what the framework is doing under the hood which are core concepts for building web applications.  Performance from optimizations removing a lot of complexity we would have to work and build for with just plain React.  We get SEO, automatic routing (from file-based routing), not having to mess with Webpack configuration.