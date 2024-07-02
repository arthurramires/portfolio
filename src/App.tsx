import { Header } from './components/Header';
import { TabsDemo } from './components/InfoTabs';
import './global.css';

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center w-full pt-64">
        <div className="w-full max-w-5xl p-8 h-auto">
          <TabsDemo />
        </div>
      </main>
      <footer className="w-full flex justify-center items-center py-4 bg-black">
        <h2>by 🧡 <code>&lt;Arthur Ramires /&gt;</code></h2>
      </footer>
    </div>
  );
}
