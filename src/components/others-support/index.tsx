import { IconDefinition, IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type OtherProps = {
  name: string;
  desc: string;
  icon: IconProp|IconDefinition;
  link?: string;
  linkText?: string;
};

const SupportingOther = ({ name, desc, icon, link, linkText }: OtherProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex flex-col items-center justify-center px-2 py-2 w-full">
          <FontAwesomeIcon icon={icon} size="3x" />
          <span className="text-xl">{name}</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="w-full">
          <h3 className="text-xl">{name}</h3>
          <p className="dark:text-gray-100 text-gray-700">{desc}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              {linkText ? linkText : link}
            </a>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export { SupportingOther };
