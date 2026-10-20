import { ArrowRight, AudioWaveform, PlayIcon } from "lucide-react";
import PageHeader from "./shared/ui/PageHeader/PageHeader";
import Header from "./widgets/header/ui/Header";
import Sidebar from "./widgets/sidebar/ui/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 max-w-350 my-0 mx-auto">
        <Header />
        <PageHeader
          title="Всё начинается с музыки"
          subTitle="Ваши любимые треки и новые открытия. Каждый день."
        />

        <section>
          <div className="mt-8 flex items-center justify-between">
            <h2 className="text-[#f7f7f8] text-[32px] font-bold">
              Вам понравится
            </h2>
            <div className="flex items-center gap-1 cursor-pointer">
              <p className="text-[#9ca3af] ">Смотреть все</p>
              <ArrowRight className="w-4 h-4 text-[#a1a1aa] " />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-4">
            <div className="cursor-pointer ">
              <div className="relative ">
                <div className="z-10 absolute top-2.5 left-4 rounded-[100px] bg-black/85 flex items-center gap-2 py-2 px-2.5">
                  <AudioWaveform className="w-4 text-[#b998ff]" />
                  <p className="text-[#f7f7f8]">В плеере</p>
                </div>
                <img
                  className="border-2 border-[#7c3aed] rounded-[30px] "
                  src="/covers/track-2.svg"
                  alt=""
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />
                <div className="z-10 absolute right-5 bottom-4 bg-[#7c3aed] p-5 rounded-full cursor-pointer hover:bg-[#7429f5] transition">
                  <PlayIcon className="w-5.25" />
                </div>
              </div>
              <p className="text-[#b998ff] text-[24px] font-semibold pt-2.5 pb-1">
                Ночной город
              </p>
              <span className="text-[#9ca3af]">Дайте танк (!)</span>
            </div>

            <div className="cursor-pointer ">
              <div className="relative">
                <img
                  className="border-2 rounded-[30px]"
                  src="/covers/track-2.svg"
                  alt=""
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />
              </div>
              <p className="text-[#f7f7f8] text-[24px] font-semibold pt-2.5 pb-1">
                Ночной город
              </p>
              <span className="text-[#9ca3af]">Дайте танк (!)</span>
            </div>

            <div className="cursor-pointer ">
              <div className="relative">
                <img
                  className="border-2 rounded-[30px]"
                  src="/covers/track-2.svg"
                  alt=""
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />
              </div>
              <p className="text-[#f7f7f8] text-[24px] font-semibold pt-2.5 pb-1">
                Ночной город
              </p>
              <span className="text-[#9ca3af]">Дайте танк (!)</span>
            </div>

            <div className="cursor-pointer ">
              <div className="relative">
                <img
                  className="border-2 rounded-[30px]"
                  src="/covers/track-2.svg"
                  alt=""
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />
              </div>
              <p className="text-[#f7f7f8] text-[24px] font-semibold pt-2.5 pb-1">
                Ночной город
              </p>
              <span className="text-[#9ca3af]">Дайте танк (!)</span>
            </div>

            <div className="cursor-pointer ">
              <div className="relative">
                <img
                  className="border-2 rounded-[30px]"
                  src="/covers/track-2.svg"
                  alt=""
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />
              </div>
              <p className="text-[#f7f7f8] text-[24px] font-semibold pt-2.5 pb-1">
                Ночной город
              </p>
              <span className="text-[#9ca3af]">Дайте танк (!)</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
