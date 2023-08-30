import { cn } from "@/lib/utils";
const Section = ({
  children,
  title,
  primary,
  ...props
}: {
  children: React.ReactNode;
  title: string;
  primary?: boolean;
  className?: string;
  id?: string;
}) => (
  <section
    className={cn(
      props.className,
      "flex flex-col items-center justify-center py-10 px-10 bg-sky-100 dark:bg-sky-950",
      primary ? "bg-sky-100 dark:bg-sky-950" : "bg-cyan-100 dark:bg-cyan-950"
    )}
    {...props}
  >
    <div>
      <p className="text-4xl text-center py-5 px-10">{title}</p>
      <hr className="w-full pt-5" />
    </div>
    {children}
  </section>
);

export { Section };
