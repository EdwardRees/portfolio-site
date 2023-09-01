import Image, { StaticImageData } from "next/image";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "../ui";

type ProjectProps = {
  name: string;
  icon: StaticImageData;
  desc: string;
  tech?: string[];
  link?: string;
};

const Project = ({ name, icon, desc, link, tech }: ProjectProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col items-center justify-center w-64 h-64 p-4 m-4 cursor-pointer">
          <Image src={icon} alt={name} width={150} height={150} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <span className="text-xl">{name}</span>
        </DialogTitle>
        <p className="dark:text-gray-100 text-gray-700">{desc}</p>
        {tech && (
          <>
            <h3 className="mt-4 text-md font-semibold">Tech Stack</h3>
            <ul className="px-5 mx-2">
              {tech.map((t) => (
                <li key={t} className="list-disc">
                  {t}
                </li>
              ))}
            </ul>
          </>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            {link}
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { Project };
