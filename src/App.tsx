import { Search } from "lucide-react";
import Sidebar from "./widgets/sidebar/ui/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 max-w-350 my-0 mx-auto">
        <header className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <h1 className="text-[#f7f7f8] text-[24px] border-r border-[#27272b] pr-2.5 cursor-pointer">
                музыка
              </h1>

              <nav>
                <ul className="flex items-center gap-7.5">
                  <li>
                    <button className="font-semibold text-[#f7f7f8] border-b-2 border-[#7c3aed] cursor-pointer">
                      Для вас
                    </button>
                  </li>
                  <li>
                    <button className="text-[#9ca3af] cursor-pointer">
                      Подкасты
                    </button>
                  </li>
                  <li>
                    <button className="text-[#9ca3af] cursor-pointer">
                      Детям
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <form
                className="w-75 flex items-center bg-[#18181b] rounded-[100px] px-4 py-2"
                action=""
              >
                <Search className="w-5 h-5 text-[#a1a1aa] mr-2 shrink-0" />
                <input
                  className="w-full bg-transparent outline-none text-sm placeholder:text-[#9ca3af]"
                  type="text"
                  placeholder="Трек, альбом или исполнитель"
                />
              </form>

              <div>
                <img src="/src/shared/assets/images/profile.svg" alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default App;
