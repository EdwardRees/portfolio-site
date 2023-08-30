import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie,faChalkboardTeacher, faLaptopCode, faPeopleCarry } from "@fortawesome/free-solid-svg-icons";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, ScrollArea } from "@/components/ui";

type ExperienceProps = {
  title: string;
  job: string;
  period: string;
  location: string;
  type: string;
  duties: string[];
  link: string;

  partTime?: boolean;
}

const Experience = ({ title, job, period, location, type, duties, link, partTime }: ExperienceProps ) => {
  return <></>;
}

export { Experience };