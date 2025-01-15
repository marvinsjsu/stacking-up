---
title: 'From Zero To Vercel: My Freelance Leap with Next.js (Part I)'
date: '2023-02-20'
latest-update: '2024-01-14'
published: true
category: next.js
abstract: 'Building a small marketing website with Next.js might seem like overkill, but its speed, simplicity, and powerful optimizations have proven to be game-changers for this freelance project. By leveraging Next.js and deploying on Vercel, I discovered a seamless workflow that made performance and scalability feel effortless.'
imgUrl: '/static/nextjs.png'
protocol:
    - "awesome out-of-the-box optimizations with code-splitting, responsive images, pre-fetching, and many more"
    - "Vercel built the infrastructure to help maximize Next.js optimizations"
---

## From Zero To Vercel: My Freelance Leap with Ctrlyr (Part I)

### React's Fullstack Framework

This post is the first of two where I share my journey of building Ctrlyr's website with Next.js. I'll explore the framework's standout features and why I think this will become my go-to tool for modern web development.

I first heard of Next.js from one of my colleagues at NextRoll and wondered how a full stack framework based on a front-end library would work and what the hype was about.  In using Next.js to build a marketing website, I quickly learned that this framework offered a lot! It gives us many optimizations right out of the box and the flexibility of rendering either on the client or server-side, or both, on a page-by-page basis - which is quite powerful.  Then there's the Vercel platform, which has been a seamless experience in deploying and maintaining a site.  Using Next.js to build [ctrlyr.com](https://www.ctrlyr.com/) has been an awesome experience!

### Optimizations


#### Chunking

At NextRoll, one of my projects involved migrating the login and registration forms from a Flask app to a stand-alone React-based SPA. Starting the project from scratch, I configured Webpack to bundle and optimize our React code. I also utilized React's Suspense API for additional code-splitting to dynamically apply the appropriate themes for Adroll and Rollworks (NextRoll's B2C and B2B platforms). This technique allows the browser to load only the JavaScript needed for the current view.

The concept is straightforward: Webpack breaks the JavaScript code into smaller, manageable chunks. The browser then selectively loads and executes only the required chunks based on what's displayed on the page. This approach significantly improves application performance by reducing the time to interactive, as the browser avoids loading unnecessary JavaScript upfront.

With my NextRoll project, it took considerable time for me to learn and test different configurations and plugins with Webpack. In contrast, when using Next.js, this chunking is handled automatically without requiring manual Webpack configuration (though we can still use plugins if needed). Next.js provides out-of-the-box code-splitting and minification, streamlining the development process and avoiding the complexities of managing Webpack configurations.

And here’s the icing on the cake: when deploying our app to **Vercel**, these chunked files are cached and served from Vercel's **edge servers**, ensuring rapid delivery to users worldwide. This global distribution further enhances the performance of your application, delivering JavaScript assets quickly and efficiently.


#### Responsive Images

Being on NextRoll's Customer Experience team, we were tasked with two main objectives: updating and building all the UI across the AdRoll platform and maintaining our internal React component library. One of our earliest challenges was optimizing the pages in AdRoll, which involved rethinking how we handled images. It was during this time that I truly grasped how significant a role images play in web content — how they impact page load times and, ultimately, user engagement and satisfaction.

To optimize images effectively, we have the following techniques:
- **creating multiple size versions** of images to ensure the most appropriate size is displayed based on the viewport width.
- **converting images to web-optimized formats**, such as `webp`, which offers better compression and faster load times.
- **lazy loading images** to load only those that are above the fold, deferring the rest until the user scrolls down.
- **using placeholders** for larger images to provide a better user experience during loading.

You might already have guessed it, Next.js handles all these optimizations for us, right out of the box, at no additional cost (if on Hobby tier 😅)! Each of the optimizations listed above can be time-intensive to implement manually. For example, I played with the concept of lazy loading using plain JavaScript in a mini-project called [Infinite Scroll](https://marvinsjsu.github.io/infinite-scroll/). While it was fun to build, it quickly became clear that implementing such optimizations for every project would be neither efficient nor scalable.

With Next.js's `<Image>` component, these optimizations are not just simplified — they're automatic, freeing up valuable time to focus on building the actual application. There is a caveat to this: to take full advantage of all that the `<Image>` component does, we need to deploy our app in Vercel.  Otherwise, though we still get the core optimization features like responsive images, lazy loading, and placeholders, we'll need to implement or use other tools for more advanced optimizations like format conversions, storing images in edge servers, and on-the-fly resizing.


#### Pre-fetching

For Ctrlyr's website, since it's relatively small and built using Next.js' `<Link>` component, all of its JavaScript and static content is pre-fetched as soon as a user visits the landing page. The Next.js `<Link>` component leverages the browser's **[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)** to detect which links are visible to the user. Once a link is visible, Next.js triggers the fetch for the associated static assets, which are then cached by the browser.

Pre-fetching significantly enhances the user experience by loading data and assets (e.g., JavaScript and CSS) for a page in the background before the user navigates to it. This reduces the wait time users experience when moving to another page in an app or website, making transitions feel seamless and instantaneous.

In the login/registration migration project I mentioned earlier, we utilized **Dynamic Imports** to conditionally load components based on user type. Specifically, the theme component that wrapped the forms dynamically changed depending on whether the user was a B2B or B2C customer. By pre-fetching the required assets in the background, we ensured that the correct theme was loaded without any visible delay, providing a smooth and responsive experience for all users.

This approach not only improved perceived performance but also optimized resource usage by loading only what was necessary, when it was needed. It’s a powerful example of how pre-fetching, combined with modern tools like Dynamic Imports, can enhance both performance and user satisfaction.

While pre-fetching added value for Ctrlyr's relatively small website, its true potential shines in larger applications, such as e-commerce platforms or content-heavy apps like Netflix. In these scenarios, where users navigate through numerous pages or sections with extensive assets, pre-fetching ensures faster transitions and reduces overall load times, significantly improving the user experience.


#### Serverless functions

One of the benefits of (Universal/Isomorphic applications)[https://medium.com/capital-one-tech/why-everyone-is-talking-about-isomorphic-universal-javascript-and-why-it-matters-38c07c87905] is the ability to have both front-end and back-end code live in the same codebase. With Next.js and its file-based routing system, the framework dedicates the `/pages/api` directory for our backend code. Files in this directory act as **request handlers**, where the defined function receives standard `Request` and `Response` objects, similar to how it works in Express.

For example:
```javascript
// in /pages/api/hello.js
export default function handler(req, res) {
    res.status(200).json({ message: 'hola, Taka!'});
}
```

Each file in this directory corresponds to an API endpoint, powered by **serverless functions**. These functions enable developers to write backend logic without the need to manage or maintain a traditional server. Serverless functions are stateless, scale automatically based on demand, and are ideal for lightweight backend tasks.

I had the opportunity to implement this while working on Ctrlyr's contact form. The form submission triggered a serverless function that processed the form data and sent a message to one of the team's Slack channels. This simple yet effective use case demonstrated how serverless functions can handle backend tasks seamlessly within the same Next.js project.

These serverless functions are analogous to **AWS Lambda** and **Google Cloud Functions**. Like those services, they remove the need to keep a server running during idle periods, significantly reducing costs and complexity. Additionally, when deployed on **Vercel**, serverless functions benefit from:
- **global distribution**: Functions are deployed to edge servers worldwide, ensuring low latency for users regardless of their location.
- **built-In caching**: Responses can be cached at the edge, further improving performance.

While serverless functions offer numerous advantages, there are some limitations to be aware of:
- **timeout limits**: By default, functions on Vercel have a 10-second execution limit, which may not be suitable for long-running tasks.
- **cold starts**: Similar to AWS Lambdas, serverless functions may experience slight delays during their first invocation after being idle.

Despite these limitations, serverless functions in Next.js provide a powerful and efficient way to handle backend functionality directly within the framework, making it easier to build and deploy our apps.

---

### Summary

With these optimizations alone, Next.js has given us a formidable framework to use.  As developers, we get many of these performance benefits as if it were magic, but knowing what the framework is doing under the hood, which really are important core concepts for building web applications, is something I remind myself to strive to understand and dig deep into.  In Part II, I'll dive into the rendering options Next.js gives us and the ease of deploying in Vercel.

