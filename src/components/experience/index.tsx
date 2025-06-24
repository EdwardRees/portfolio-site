import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import {
  faUserTie,
  faChalkboardTeacher,
  faLaptopCode,
  faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  ScrollArea,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui";

import { ExperienceType } from "@/lib/experience-types";

type ExperienceProps = {
  title: string;
  job: string;
  period: string;
  location: string;
  type: ExperienceType;
  duties: string[] | Map<string, string[]>;
  link: string;
  hidden?: boolean;

  partTime?: boolean;
};

const Experience = ({
  title,
  job,
  period,
  location,
  type,
  duties,
  link,
  partTime,
  hidden,
}: ExperienceProps) => {
  if (hidden) {
    return <></>;
  }
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={cn(
            "flex flex-col items-center justify-center text-center py-2"
          )}
        >
          <div className="w-12 pb-2">
            <FontAwesomeIcon
              icon={
                type === ExperienceType.TEACHING
                  ? faChalkboardTeacher
                  : type === ExperienceType.MANAGEMENT
                  ? faUserTie
                  : type === ExperienceType.PROGRAMMING
                  ? faLaptopCode
                  : faPeopleCarry
              }
              size="3x"
            />
          </div>
          <p className="text-xl">{title}</p>
          <p className="text-md text-center">{job}</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <p className="text-2xl">
            {title} - {job}
          </p>
        </DialogTitle>
        <ScrollArea className="h-96 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-xl">{period}</p>
            <p className="text-xl">{location}</p>
            <p className="text-xl">{partTime ? "Part Time" : "Full Time"}</p>
            <p className="text-md">
              <a href={link} className="text-blue-500" target="_blank">
                Link
              </a>
            </p>
            <p className="text-xl">Duties:</p>
            <div className="flex flex-col items-center justify-center text-center">
              {Array.isArray(duties)
                ? duties.map((duty: string) => (
                    <li key={duty} className="text-md">
                      {duty}
                    </li>
                  ))
                : Array.from(duties).map(
                    ([key, value]: [key: string, value: string[]]) => (
                      <Accordion key={key} type="single" collapsible>
                        <AccordionItem value={key}>
                          <AccordionTrigger>
                            <p className="text-xl pr-4">{key}</p>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="flex flex-col">
                              {value.map((duty: string) => (
                                <li key={duty} className="text-md">
                                  - {duty}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )
                  )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export { Experience };
