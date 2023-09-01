"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Language } from "../language";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui";
import html from "@/img/languages/html5.png";
import css from "@/img/languages/css.png";
import javascript from "@/img/languages/javascript.png";
import python from "@/img/languages/python.png";
import java from "@/img/languages/java.png";
import typescript from "@/img/languages/typescript.png";
import c from "@/img/languages/c.png";
import csharp from "@/img/languages/C_sharp_2.png";
import cpp from "@/img/languages/cpp.png";
import rust from "@/img/languages/rust.png";
import go from "@/img/languages/go.png";
import swift from "@/img/languages/swift.png";

import bootstrap from "@/img/languages/Boostrap_logo.png";
import react from "@/img/languages/react.png";
import tailwind from "@/img/languages/tailwindcss.png";
import nextjs from "@/img/languages/nextjs.png";

import flutter from "@/img/languages/flutter.png";
import android from "@/img/languages/android.png";
import ios from "@/img/languages/ios.png";

import express from "@/img/languages/express.png";
import postgres from "@/img/languages/postgres.png";
import prisma from "@/img/languages/prisma-icon-solo.png";
import supabase from "@/img/languages/supabase.png";

import linux from "@/img/languages/linux.png";
import windows from "@/img/languages/windows.png";

const enum LanguageFilterType {
  ALL = "all",
  LANGUAGE = "language",
  FRAMEWORK = "framework",
  MOBILE = "mobile",
  BACKEND = "backend",
  OPERATING_SYSTEM = "operating-system",
}

const Group = ({
  title,
  children,
  hidden,
  className,
}: {
  title: string;
  children: React.ReactNode;
  hidden?: boolean;
  className?: string;
}) => {
  if (hidden) {
    return <></>;
  }
  return (
    <div className="flex flex-col text-center w-full justify-center">
      <div className="text-2xl font-semibold">{title}</div>
      <div
        className={cn(
          "grid lg:grid-cols-auto md:grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 gap-4",
          className
        )}
      >
        {children}
      </div>
      <br />
    </div>
  );
};

const Languages = () => {
  const [languageFilter, setLanguageFilter] = useState<LanguageFilterType>(
    LanguageFilterType.ALL
  );

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <Select
          onValueChange={(val: string) =>
            setLanguageFilter(val as LanguageFilterType)
          }
        >
          <SelectTrigger className="dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-gray-100">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={LanguageFilterType.ALL}>All</SelectItem>
            <SelectItem value={LanguageFilterType.LANGUAGE}>
              Languages
            </SelectItem>
            <SelectItem value={LanguageFilterType.FRAMEWORK}>
              Frameworks
            </SelectItem>
            <SelectItem value={LanguageFilterType.MOBILE}>Mobile</SelectItem>
            <SelectItem value={LanguageFilterType.BACKEND}>Backend</SelectItem>
            <SelectItem value={LanguageFilterType.OPERATING_SYSTEM}>
              Operating Systems
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <br />
      <Group
        title="Languages"
        hidden={
          languageFilter !== LanguageFilterType.ALL &&
          languageFilter !== LanguageFilterType.LANGUAGE
        }
      >
        <Language title="HTML" proficiency="95% Proficient" image={html} />
        <Language title="CSS" proficiency="95% Proficient" image={css} />
        <Language
          title="JavaScript"
          proficiency="90% Proficient"
          image={javascript}
        />
        <Language title="Python" proficiency="90% Proficient" image={python} />
        <Language title="Java" proficiency="90% Proficient" image={java} />
        <Language
          title="TypeScript"
          proficiency="85% Proficient"
          image={typescript}
        />
        <Language title="C" proficiency="85% Proficient" image={c} />
        <Language title="C#" proficiency="Learning" image={csharp} />
        <Language title="C++" proficiency="Learning" image={cpp} />
        <Language title="Rust" proficiency="Learning" image={rust} />
        <Language title="Go" proficiency="Learning" image={go} />
        <Language title="Swift" proficiency="Learning" image={swift} />
      </Group>
      <Group
        title="Web Frameworks & Libraries"
        hidden={
          languageFilter !== LanguageFilterType.ALL &&
          languageFilter !== LanguageFilterType.FRAMEWORK
        }
      >
        <Language
          title="Bootstrap"
          proficiency="100% Proficient"
          image={bootstrap}
        />
        <Language title="React" proficiency="90% Proficient" image={react} />
        <Language
          title="TailwindCSS"
          proficiency="85% Proficient"
          image={tailwind}
        />
        <Language title="Next.js" proficiency="85% Proficient" image={nextjs} />
      </Group>
      <Group
        title="Mobile Development"
        hidden={
          languageFilter !== LanguageFilterType.ALL &&
          languageFilter !== LanguageFilterType.MOBILE
        }
      >
        <Language
          title="React Native"
          proficiency="90% Proficient"
          image={react}
        />
        <Language title="Flutter" proficiency="Learning" image={flutter} />
        <Language title="Android" proficiency="Learning" image={android} />
        <Language title="iOS" proficiency="Learning" image={ios} />
      </Group>
      <Group
        title="Backend Libraries / Technologies"
        hidden={
          languageFilter !== LanguageFilterType.ALL &&
          languageFilter !== LanguageFilterType.BACKEND
        }
      >
        <Language
          title="Express"
          proficiency="75% Proficient"
          image={express}
        />
        <Language
          title="Supabase"
          proficiency="75% Proficient"
          image={supabase}
        />
        <Language
          title="PostgreSQL"
          proficiency="50% Proficient"
          image={postgres}
        />
        <Language title="Prisma" proficiency="50% Proficient" image={prisma} />
      </Group>
      <Group
        title="Operating Systems"
        hidden={
          languageFilter !== LanguageFilterType.ALL &&
          languageFilter !== LanguageFilterType.OPERATING_SYSTEM
        }
        className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-4"
      >
        <Language title="macOS" proficiency="Proficient" image={ios} />
        <Language title="Windows" proficiency="Familiar" image={windows} />
        <Language title="Linux" proficiency="Learning" image={linux} />
      </Group>
    </>
  );
};

export { Languages };
