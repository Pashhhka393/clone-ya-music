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
      </div>
    </div>
  );
};

export default App;
