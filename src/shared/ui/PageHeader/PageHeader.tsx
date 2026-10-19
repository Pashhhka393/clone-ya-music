import { Sparkles } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subTitle: string;
}

const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between mt-9">
      <div>
        <h1 className="text-[#f7f7f8] font-bold text-[40px]">{title}</h1>
        <span className="text-[#9ca3af]">{subTitle}</span>
      </div>

      <div className="flex gap-2">
        <Sparkles className="text-[#b998ff]" />
        <p className="text-[#9ca3af]">Настроено на вас</p>
      </div>
    </div>
  );
};

export default PageHeader;
