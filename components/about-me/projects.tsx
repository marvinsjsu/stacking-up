import Image from 'next/image';

export default function Projects() { 
    return (
        <section id="projects" className="px-8 py-0 w-full">
            <h2 className="font-medium text-xl mb-4 md:mb-0 pt-8 pb-0 text-center md:text-left md:py-0">Projects</h2>
            <div className="divide-y-2 divide-dashed divide-gray-100">
                <div className="flex flex-col justify-between py-8 projectsMid:flex-row">
                    <div className="flex-shrink-0 h-min-full w-full flex text-left flex-col justify-center projectsMid:w-[45%]">
                        <h3 className="mb-2 text-primary-blue">Breadchaser</h3>
                        <h4 className="text-sm text-primary-orange mb-4 md:text-md md:text-left" >... make reaching out on LinkedIn easy!</h4>
                        <p className="text-[14px] font-light leading-[2]">
                            Job search is challenging, why not get some help from this Chrome extension?  Built with <strong>Plasmo framework</strong>, Breadchaser, formerly known as Jobs Without Borders, helps create personalized cover letters and messages based on job descriptions and your unique experience and skillsets.
                        </p>
                    </div>                    
                    <div className="text-center mt-4 md:h-max-[380px] flex flex-col justify-center items-center w-full">
                        <Image
                            src="/static/breadchaser.png"
                            alt="image of Breadchaser on Chrome Web Store"
                            height="150"
                            width="400"
                            loading="lazy"
                            placeholder='empty'
                            className="inline object-cover outline outline-8 outline-white shadow-lg shadow-slate-800 w-[300px]"
                        />
                        <p className="pt-7 text-center text-sm">
                            <a href="https://chromewebstore.google.com/detail/breadchaser-custom-networ/mgbijplmiommnaannjomlaiinkhhjblb?hl=en" target="_blank">Download from Chrome Web Store</a>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center py-8  projectsMid:flex-row-reverse">
                    <div className="w-full flex flex-col justify-center text-left projectsMid:[45%] projectsMid:ml-8 md:ml-0">
                        <h3 className="mb-2 text-primary-blue">CTRLYR</h3>
                        <h4 className="text-sm text-primary-orange mb-4 md:text-md md:text-left" >... exploring Next.js and Vercel!</h4>
                        <p className="text-[14px] font-light leading-[2]">
                            Collaborated with <a href="https://www.njive.com/" target="_blank">Nathan J. Iverson</a> in building CTRLYR&apos;s marketing website. I used <strong>Sass</strong> with <strong>CSS modules</strong>, and also played with <strong>Styled Components</strong>. This is my first project using <strong>Next.js</strong>, and I&apos;ll be building more apps with this soon.                                
                        </p>
                    </div>
                    <div className="text-center mt-4 md:h-max-[380px] flex flex-col justify-center items-center w-full">
                        <Image
                            src="/static/ctrlyr.webp"
                            alt="image of CTRLYR marketing website"
                            height="254"
                            width="450"
                            loading="lazy"
                            placeholder='empty'
                            className="inline object-cover outline outline-8 outline-white shadow-lg shadow-slate-800 w-[300px]"
                        />
                        <p className="pt-7 text-center text-sm">
                            <a href="https://www.ctrlyr.com/" target="_blank">See Live</a>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between py-8 projectsMid:flex-row">
                     <div className="flex-shrink-0 h-min-full w-full flex text-left flex-col justify-center projectsMid:w-[45%]">
                        <h3 className="mb-2 text-primary-blue">Ted Lasso Quotes</h3>
                        <h4 className="text-sm text-primary-orange mb-4 md:text-md md:text-left" >... to a much needed show</h4>
                        <p className="text-[14px] font-light leading-[2]">
                            This project plays with the browser&apos;s <strong>Audio API</strong> for text-to-speech via <a href="https://www.voicerss.org" target="_blank">Voice RSS API</a>. I use quotes from <a href="https://tedlassoquotes.com/" target="_blank">tedlassoquotes.com</a>.
                            
                        </p>
                        <p className="text-[14px] font-light leading-[2]">
                            To one of the more uplifting shows of all times, especially during Covid!
                        </p>
                    </div>
                    <div className="text-center mt-4 md:h-max-[380px] flex flex-col justify-center items-center w-full">
                        <Image
                            src="/static/ted-lasso.webp"
                            alt="image of Quotes and Jokes - Ted Lasso"
                            height="254"
                            width="450"
                            loading="lazy"
                            placeholder='empty'
                            className="inline object-cover outline outline-8 outline-white shadow-lg shadow-slate-800 w-[300px]"
                        />
                        <p className="pt-7 text-center text-sm">
                            <a href="https://marvinsjsu.github.io/quotes-n-jokes" target="_blank">Demo</a> | <a href="https://github.com/marvinsjsu/quotes-n-jokes" target="_blank">Source Code</a>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between py-8 projectsMid:flex-row-reverse">
                     <div className="flex-shrink-0 h-min-full w-full flex text-left flex-col justify-center projectsMid:w-[50%] projectsMid:ml-4 md:ml-0">
                        <h3 className="mb-2 text-primary-blue">Infinite Vans</h3>
                        <h4 className="text-sm text-primary-orange mb-4 md:text-md md:text-left" >... but they look like sneakers!</h4>
                        <p className="w-full text-[14px] font-light leading-[2]">
                            Having some fun with plain JS and Unsplash&apos;s API. With the Fetch API, new sets of images are fetched and displayed to create a sense of <strong>infinite scrolling</strong>.                               
                        </p>
                        <p className="w-full text-[14px] font-light leading-[2]">
                            Thanks to <strong>Google Fonts</strong>, <strong>HeroPatterns</strong>, <strong>Unsplash</strong>, and the many contributors for making assets rich and accessible 🙏
                        </p>
                    </div>
                    <div className="text-center mt-4 md:h-max-[380px] flex flex-col justify-center items-center w-full">
                        <Image
                            src="/static/sneakers.webp"
                            alt="image of Infinite Vans"
                            height="254"
                            width="450"
                            loading="lazy"
                            placeholder='empty'
                            className="inline object-cover outline outline-8 outline-white shadow-lg shadow-slate-800 w-[300px]"
                        />
                        <p className="pt-7 text-center text-sm">
                            <a href="https://marvinsjsu.github.io/infinite-scroll/" target="_blank">Demo</a> | <a href="https://github.com/marvinsjsu/infinite-scroll" target="_blank">Source Code</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
