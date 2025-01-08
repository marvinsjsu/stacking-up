
 
import Profile from '../../components/about-me/profile';
import Experience from '../../components/about-me/experience';
import Projects from '../../components/about-me/projects';

export default function AboutMe() {
    return (
        <div className="animate-fadeIn items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-lexend)]">
            <main className="text-blue bg-white flex flex-col max-w-screen-lg gap-2 row-start-2 items-center sm:items-start">
                <Profile />
                <Experience />
                <Projects />
            </main>
        </div>
    );
}

