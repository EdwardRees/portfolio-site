import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui";
type LanguageProp = {
  title: string;
  proficiency: string;
  image: StaticImageData;
  hidden?: boolean;
};
import Image, { StaticImageData } from "next/image";

const Language = ({ title, proficiency, image, hidden }: LanguageProp) => {
  if (hidden) {
    return <></>;
  }
  return (
    <>
      <HoverCard>
        <HoverCardTrigger>
          <div className="flex flex-row items-center justify-center text-center py-2">
            <Image
              src={image}
              height={100}
              alt={title}
              className="h-full pb-12 text-center"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col items-center justify-center text-center py-2">
            <Image src={image} width={100} height={100} alt={title} />
            <div className="text-xl font-bold">{title}</div>
            <div className="text-sm">{proficiency}</div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export { Language };
