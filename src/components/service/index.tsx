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
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-12">
        <FontAwesomeIcon icon={icon} size={size as SizeProp} />
      </div>
      <p className="text-2xl">{title}</p>
      <br />
      <p className="text-xl text-center">{desc}</p>
    </div>
  );
};

export { Service };
