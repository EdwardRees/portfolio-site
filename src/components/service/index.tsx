import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

type ServiceProps = {
  title: string;
  icon: IconProp;
  desc: string;
  size: string;
};

const Service = ({ title, icon, desc, size }: ServiceProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-2">
      <div className="w-12">
        <FontAwesomeIcon icon={icon} size={size as SizeProp} />
      </div>
      <p className="text-xl pt-1 pb-2">{title}</p>
      <p className="text-md text-center">{desc}</p>
    </div>
  );
};

export { Service };
