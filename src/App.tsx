import { Header } from './components/Header';
import './global.css';
import { Button } from './components/ui/button';
import { Github, Linkedin, Instagram } from 'lucide-react'
import { TabsDemo } from './components/InfoTabs';

export function App() {
  return (
    <div className="flex min-h-screen bg-black text-gray-200">
      <aside className="bg-black p-4 fixed h-full flex flex-col ">
        <Header />
        <nav className="mt-4 flex justify-center space-x-4">
          <Button type='button' variant="ghost"><strong>About</strong></Button>
          <Button type='button' variant="ghost"><strong>Experience</strong></Button>
          <Button type='button' variant="ghost"><strong>Skills</strong></Button>
        </nav>
        <div className="mt-4 flex justify-center space-x-4">
          <Button type='button' variant="link">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary">
             <Github />
            </a>
          </Button>
          <Button type='button' variant="link">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary">
             <Linkedin />
            </a>
          </Button>
          <Button type='button' variant="link">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary">
             <Instagram />
            </a>
          </Button>
        </div>
        <div className='self-center mt-8'> 
          <h2>by 🧡 <strong>Arthur Bueno</strong></h2>
        </div>
      </aside>
      <div className="m-auto min-h-screen pt-32 p-8 bg-black">
        <TabsDemo />
      </div>
    </div>
  );
}
