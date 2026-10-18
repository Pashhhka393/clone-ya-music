import {
  AudioWaveform,
  Heart,
  Home,
  Library,
  Mic2,
  Search,
  Settings2,
} from "lucide-react";

const App = () => {
  return (
    <aside className="w-23.75 flex flex-col items-center h-screen justify-between py-5 border-r border-[#27272b] bg-[#101011]">
      <div>
        <div className="bg-[#7c3aed] rounded-[16px] w-fit py-0.75 px-0.75 cursor-pointer">
          <AudioWaveform className="w-12 h-12" />
        </div>

        <nav className="mt-5">
          <ul className="flex flex-col items-center gap-1.75">
            <li>
              <button className="flex flex-col items-center cursor-pointer gap-1.75">
                <div className="py-2.5 px-3.75 bg-[#211532] rounded-[12px]">
                  <Home className="w-4.5 h-5 text-[#b998ff] " />
                </div>
                <span className="text-[#b998ff] text-[14px]">Главная</span>
              </button>
            </li>

            <li>
              <button className=" cursor-pointer">
                <Search className="w-4.5 h-5 text-[#a1a1aa] hover:text-white transition" />
              </button>
            </li>

            <li>
              <button className=" cursor-pointer">
                <Library className="w-4.5 h-5 text-[#a1a1aa] hover:text-white transition" />
              </button>
            </li>

            <li>
              <button className=" cursor-pointer">
                <Heart className="w-4.5 h-5 text-[#a1a1aa] hover:text-white transition" />
              </button>
            </li>

            <li>
              <button className=" cursor-pointer">
                <Mic2 className="w-4.5 h-5 text-[#a1a1aa] hover:text-white transition" />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar-settings">
        <button className="cursor-pointer">
          <Settings2 className="w-4.5 h-5 text-[#a1a1aa] hover:text-white transition" />
        </button>
      </div>
    </aside>
  );
};

export default App;
