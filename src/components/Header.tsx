import { Avatar, AvatarImage } from "./ui/avatar";

export function Header() {
  return (
    <header className=" top-0 left-0 w-full p-4 shadow-md z-50 border-4 border-solid rounded-xl border-[#8000FF]">
      <div className="text-center p-4">
        <Avatar className="rounded-full w-36 h-36 mx-auto">
          <AvatarImage src="/assets/profile.png" />
        </Avatar>
        <h1 className="text-3xl font-bold mt-2">Arthur Ramires</h1>
        <h2 className="text-lg mt-1 text-gray-300">Backend Software Engineer at Before IT</h2>
        <p className="mt-2 text-gray-400">Crafting seamless backend solutions, one line of code at a time.</p>

      </div>
    </header>
  );
};


