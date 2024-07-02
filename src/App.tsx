import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    <div className="flex flex-col w-full min-h-screen mx-0 p-0 bg-black text-gray-200">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex-grow">
          {/* Conteúdo principal */}
        </div>
      </div>
      <footer className="w-full flex justify-center items-center py-4 bg-black">
        <h2>by 🧡 <code>&lt;Arthur Ramires /&gt;</code></h2>
      </footer>
    </div>
  );
}
