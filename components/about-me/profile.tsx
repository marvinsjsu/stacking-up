import Image from 'next/image';

export default function MainProfile() { 
    return (
        <section id="about" className="px-8 pt-24 pb-2 flex flex-col items-center md:block md:justify-start">
            <div className="flex justify-center items-center bg-white h-[200px] w-[154px] outline outline-2 outline-primary-orange mb-[24px]">
                <div className="animate-pulsate h-[180px] w-[135px] bg-primary-orange">
                    <Image
                        src="/static/Marvin-Mante-profile.webp"
                        alt="Image of myself"
                        height="180"
                        width="135"
                        className="grayscale-[80%]"
                    />
                </div>
            </div>
            <p className="leading-extra text-[16px] text-left md:text-left">
                Hello there! I&apos;m Marvin, a software engineer currently based in the Central Coast of California. I love building UIs and backend services with JavaScript.  I typically use React/Redux for my front-end projects and use Node.js with Express for the backend. I&apos;ve also built production apps with Python and PHP and have worked on mobile apps with React Native.
            </p>
            <p className="leading-extra text-[16px] text-left md:text-left">
            I attended <a href="https://www.appacademy.io/" target="_blank">App Academy</a> and completed my B.S. in Computer Science at <a href="https://www.sjsu.edu/cs/" target="_blank">San Jose State University</a>.
            </p>
        </section>
    );
}
