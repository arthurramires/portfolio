import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from './../components/ui/button';
import { Github, Linkedin, Instagram } from 'lucide-react';
export function Header() {
  return (
    <header className="w-full fixed shadow-lg z-50 border-b-2 border-solid rounded-xl border-[#8000FF]">
      <div className="text-center p-4 pt-10">
        <Avatar className="rounded-full w-32 h-30 mx-auto">
          <AvatarImage src="/assets/avatar.png" />
        </Avatar>
        <h1 className="text-3xl font-bold mt-2"><code>&lt;Arthur Ramires /&gt;</code></h1>
        <h2 className="text-lg mt-1 text-gray-300">Backend Software Engineer at Before IT</h2>
        <p className="mt-2 text-gray-400">Crafting seamless backend solutions, one line of code at a time.</p>
      </div>
      <div className="mt-4 mb-6 flex space-x-4 lg:space-x-4 lg:flex-row lg:space-y-0 justify-center">
          <Button type='button' variant="link">
            <a href="https://github.com/arthurramires" target="_blank" rel="noopener noreferrer" className="text-primary">
              <Github />
            </a>
          </Button>
          <Button type='button' variant="link">
            <a href="https://www.linkedin.com/in/arthur-ramires-rodrigues-neto-9687a1193/" target="_blank" rel="noopener noreferrer" className="text-primary">
              <Linkedin />
            </a>
          </Button>
          <Button type='button' variant="link">
            <a href="https://www.instagram.com/aarthurito/" target="_blank" rel="noopener noreferrer" className="text-primary">
              <Instagram />
            </a>
          </Button>
        </div>
    </header>
  );
};


