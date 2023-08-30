import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@/components/ui";

type ExperienceProps = {
  title: string;
  job: string;
  period: string;
  location: string;
  type: string;
  duties: string[];
  link: string;

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
}: ExperienceProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-12 h-full">
            <FontAwesomeIcon
              icon={
                type === "education"
                  ? faChalkboardTeacher
                  : type === "work"
                  ? faUserTie
                  : type === "project"
                  ? faLaptopCode
                  : faPeopleCarry
              }
              size="3x"
            />
          </div>
          <p className="text-2xl">{title}</p>
          <p className="text-xl text-center">{job}</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ScrollArea className="h-full w-full">
          <DialogTitle>
            <p className="text-2xl">
              {title} - {job}
            </p>
          </DialogTitle>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export { Experience };
