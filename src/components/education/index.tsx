import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  ScrollArea,
} from "@/components/ui/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

type EducationProps = {
  degree: string;
  school: string;
  year: string;
  gpa: string;
  location: string;
  courses: string[];
  other?: Map<string, string>;
};

const Education = ({
  degree,
  school,
  year,
  gpa,
  location,
  courses,
  other,
}: EducationProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-12 h-full">
            <FontAwesomeIcon icon={faGraduationCap} size="3x" />
          </div>
          <p className="text-2xl">{degree}</p>
          <p className="text-xl text-center">{school}</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <p className="text-2xl">
            {school} - {degree}
          </p>
        </DialogTitle>
        <ScrollArea className="h-96 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-2xl">{year}</p>
            <br />
            <p className="text-xl text-center">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <br />
            <p className="text-xl text-center">
              <span className="font-semibold">GPA:</span> {gpa}
            </p>
            {other && (
              <>
                {Array.from(other).map(([key, value]) => (
                  <>
                    <p key={key} className="text-md text-center">
                      <span className="font-semibold">{key}:</span> {value}
                    </p>
                  </>
                ))}
                <br />
              </>
            )}
            <p className="text-xl text-center">Courses:</p>
            <ul>
              {courses.map((course) => (
                <li key={course} className="text-center">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export { Education };
