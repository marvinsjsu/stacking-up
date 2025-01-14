---
title: 'From Zero To Vercel: My Freelance Leap with Next.js'
date: '2023-02-20'
published: true
category: next.js
abstract: 'Building a small marketing website with Next.js may have been overkill, but then again it cut so much time from start to finish, that moving forward, Next.js and Vercel might just be my go-to framework and platform for future web projects.'
imgUrl: '/static/nextjs.png'
protocol:
    - "awesome out-of-the-box optimizations with code-splitting, responsive images, pre-fetching, and so much more"
    - "pretty powerful rendering options: Static Site Generation, SSR, ISR"
    - "deploying in Vercel is as easy as a few clicks"
---

## From Zero To Vercel: My Freelance Leap with Ctrlyr

### React's Fullstack Framework

I first heard of Next.js from one of my colleagues at NextRoll and wondered how a full stack framework based on a front-end library would work and what the hype was about.  Quickly, I learned that this framework offered quite a lot! It gives us many optimizations right out of the box and flexibility of rendering either on the client or server-side, or both, on a page-by-page basis - which is quite powerful.  Then there's the Vercel platform, which has so far been one of the seamless experiences in deploying and maintaining a site.  And so far, with using Next.js to build [Ctrlyr](https://www.ctrlyr.com/)'s marketing website, it's been awesome!

### Optimizations

#### Chunking

At NextRoll, one of my projects involved migrating the login and registration forms from a Flask app to a stand-alone React-based SPA. Starting the project from scratch, I configured Webpack to bundle and optimize our React code. I also utilized React's Suspense API to implement code-splitting, a technique that allows the browser to load only the JavaScript needed for the current view.

The concept is straightforward: Webpack breaks our JavaScript code into smaller, manageable chunks. The browser then selectively loads and executes only the required chunks based on what's displayed on the page. This approach significantly improves the performance of the application since the browser avoids loading unnecessary JavaScript upfront, reducing the time to interactive.

In contrast, when using Next.js, this chunking is handled automatically without the need to manually configure Webpack. Next.js provides out-of-the-box code-splitting and minification, streamlining the development process and avoiding the potential complexity of Webpack configuration. 

#### Responsive Images

Being an engineer on NextRoll's Customer Experience team, we were tasked with two main objectives: updating and building all the UI across the AdRoll platform and maintaining our internal React component library. One of our earliest challenges was optimizing the pages in AdRoll, which involved rethinking how we handled images. It was during this time that I truly grasped how significant a role images play in web content — how they impact page load times and, ultimately, user engagement and satisfaction.

To optimize images effectively, we have the following techniques:
- **creating multiple size versions** of images to ensure the most appropriate size is displayed based on the viewport width.
- **converting images to web-optimized formats**, such as `webp`, which offers better compression and faster load times.
- **lazy loading images** to load only those that are above the fold, deferring the rest until the user scrolls down.
- **using placeholders** for larger images to provide a better user experience during loading.

You might already have guessed it, Next.js handles all these optimizations for us, right out of the box, at no additional cost! Each of the optimizations listed above can be time-intensive to implement manually. For example, I played with the concept of lazy loading using plain JavaScript in a mini-project called [Infinite Scroll](https://marvinsjsu.github.io/infinite-scroll/). While it was fun to build, it quickly became clear that implementing such optimizations for every project would be neither efficient nor scalable.

With Next.js's `<Image>` component, these optimizations are not just simplified — they're automatic, freeing up valuable time to focus on building the actual application. There is a caveat to this: to take full advantage of all that the `<Image>` component does, we need to deploy our app in Vercel.  Otherwise, though we still get the core optimization features like responsive images, lazy loading, and placeholders, we'll need to implement or use other tools for more advanced optimizations like format conversions, storing images in edge servers, and on-the-fly resizing.

#### Pre-fetching

For Ctrlyr's website, since it's relatively small and built using Next.js' `<Link>` component, all of its JavaScript and static content is pre-fetched as soon as a user visits the landing page. The Next.js `<Link>` component uses the browser's **Intersection Observer API** to detect which links are visible to the user. Once a link is visible, Next.js triggers the fetch for the associated static assets, which are then cached by the browser.

Pre-fetching enhances the user experience by loading data and assets (e.g., JavaScript and CSS) for a page in the background before the user navigates to it. This significantly reduces the wait time users experience when moving to another page in an app or website, making transitions feel seamless and instantaneous.

In the login/registration migration project I mentioned earlier, we utilized **Dynamic Imports** to conditionally load components based on user type. Specifically, the theme component that wrapped the forms would dynamically change depending on whether the user was a B2B or B2C customer. By pre-fetching the required assets in the background, we ensured that the correct theme was loaded without any visible delay, providing a smooth and responsive experience for all users.

This approach not only improved perceived performance but also optimized resource usage by loading only what was necessary, when it was needed. It’s a powerful example of how pre-fetching, combined with modern tools like Dynamic Imports, can enhance both performance and user satisfaction.

If Ctrlyr's website was much larger or if we had a Netflix-like app, pre-fetching would be such a valuable optimization as 


#### Serverless functions

With React we can either create our own routing or use a routing library like, `react-router`.

Node.js code for the backend can live in `/pages/api` and these are handlers.

These Serverless functions are analogous to AWS Lambdas
___

### Rendering Options

Before I used Next.js, I had a chance to work on a Universal/Isomorphic App. This is where I learned about Server-Side Rendering (SSR) and hydration - where the server renders the initial HTML content, sends it to the browser, then React inserts interactive components into the DOM for dynamic behavior.

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