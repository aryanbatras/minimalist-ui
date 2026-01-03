import { Link } from "react-router-dom"
import { Button } from "../../signal-layers"
import { docsSections } from "./DocsData"

export function DocsSidebarDesktop(){
    return (
        <div className="h-screen w-64 overflow-y-auto fixed left-0 top-16 z-50 flex-col gap-2 p-4 items-start justify-start hidden lg:flex">
            
            <div className="hidden lg:block font-light text-xs tracking-widest leading-loose uppercase my-4">Start here</div>
            <div className="hidden lg:flex flex-col items-start justify-start gap-1">
                {docsSections[0].map((section) => (
                    <Link key={section.id} to={section.route} onClick={() => window.scrollTo(0, 0)}>
                        <Button ghost lg>
                            {section.title}
                        </Button>
                    </Link>
                ))}
            </div>

            <div className="hidden lg:block font-light text-xs tracking-widest leading-loose uppercase my-4">Foundational Components</div>
            <div className="hidden lg:flex flex-col items-start justify-start gap-1">
                {docsSections[1].map((section) => (
                    <Link key={section.id} to={section.route} onClick={() => window.scrollTo(0, 0)}>
                        <Button ghost lg>
                            {section.title}
                        </Button>
                    </Link>
                ))}
            </div>

            <div className="hidden lg:block font-light text-xs tracking-widest leading-loose uppercase my-4">Advanced</div>
            <div className="hidden lg:flex flex-col items-start justify-start gap-1">
                {docsSections[2].map((section) => (
                    <Link key={section.id} to={section.route} onClick={() => window.scrollTo(0, 0)}>
                        <Button ghost lg>
                            {section.title}
                        </Button>
                    </Link>
                ))}
            </div>

        </div>
    );
}