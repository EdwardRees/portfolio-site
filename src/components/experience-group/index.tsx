"use client";
import { useState } from "react";
import { Experience } from "../experience";
import { ExperienceType } from "@/lib/experience-types";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui";
const enum ExperienceFilterTypes {
  ALL = "all",
  TEACHING = "teaching",
  PROGRAMMING = "programming",
  MANAGEMENT = "management",
  OTHER = "other",
}

const Experiences = () => {
  const [experienceFilter, setExperienceFilter] =
    useState<ExperienceFilterTypes>(ExperienceFilterTypes.ALL);

  const handleFilter = (val: string) => {
    setExperienceFilter(val as ExperienceFilterTypes);
  };
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <Select onValueChange={(val: string) => handleFilter(val)}>
          <SelectTrigger className="dark:bg-gray-100 bg-gray-800 dark:text-gray-800 text-gray-100">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ExperienceFilterTypes.ALL}>All</SelectItem>
            <SelectItem value={ExperienceFilterTypes.PROGRAMMING}>
              Programming
            </SelectItem>
            <SelectItem value={ExperienceFilterTypes.TEACHING}>
              Teaching
            </SelectItem>
            <SelectItem value={ExperienceFilterTypes.OTHER}>Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid lg:grid-cols md:grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 gap-4 px-3 py-3">
      <Experience title="Adjunct Professor"
      job="University of San Francisco"
      location="San Francisco, CA"
      type={ExperienceType.TEACHING}
      partTime
      period="Jan 2024-Present"
      duties={[
        "Planned and designed the curriculum for an Introductory Python course.",
        "Developed lectures, quizzes, labs, in-class exercises, and projects for an Introductory Python course.",
        "Held office hours to supplement and support student learning, by re-explaining concepts using various examples to clarify confusing ideas for different students.",
        "Taught two Introductory Python classes with over 20 students each",
        "Implemented Project Based Learning principles to engage students to apply the concepts learned in class.",
        "Developed an autograder to simplify grading procedures throughout the semester.",
        "Participated, developed, and implemented more AI Proof assignments to support student learning in a progressively more AI driven society.",
        "Planned and developed the curriculum for an Introductory Java course."
      ]}
      link="https://www.usfca.edu/arts-sciences/programs/undergraduate/computer-science"
      hidden={
        experienceFilter !== ExperienceFilterTypes.TEACHING && experienceFilter !== ExperienceFilterTypes.ALL
      }
      />
        <Experience
          title="General Manager"
          job="The Coder School"
          location="San Francisco, CA"
          type={ExperienceType.MANAGEMENT}
          period="May 2023-Present"
          duties={[
            "Managed schedules of multiple coaches and 80+ students",
            "Managed the day-to-day operations of the school",
            "Trained coding coaches in various teaching methods",
            "Led four summer camps teaching Python, Thunkable, Scratch, and JavaScript.",
            "Coached a student through developing a Desktop Application on Tobacco Awareness using Python for the Congressional App Challenge. The student went on to win for California District 11 in 2023",
            "Taught after school classes of Scratch and Python with students aged 7-14",
            "Developed an Introductory JavaScript curriculum",
            "Developed the curriculum for an Introduction to AP Computer Science A bootcamp.",
            "Taught two students React Native to develop different mobile application projects",
            "Taught multiple students PySimpleGUI to demonstrate and help them apply their understanding of Python to develop functional User Interfaces"
          ]}
          link="https://www.thecoderschool.com/sanfrancisco/"
          hidden={
            experienceFilter !== ExperienceFilterTypes.OTHER &&
            experienceFilter !== ExperienceFilterTypes.ALL
          }
        />
        <Experience
          title="Student Teacher"
          job="George Washington High School"
          location="San Francisco, CA"
          type={ExperienceType.TEACHING}
          period="Aug 2022-Jun 2023"
          duties={[
            "Taught and led an Algebra 1 class with 24 students",
            "Participated in Small Curriculum team planning meetings providing feedback from a student teacher perspective, along with the perspective of an international student who grew up with a different system",
            "Provided additional tutoring for students who requested more support during lunch and advisory",
            "Graded assignments",
            "Created rubrics and reverse rubrics to assist grading assignments",
          ]}
          link="https://gwhs.sfusd.edu"
          hidden={
            experienceFilter !== ExperienceFilterTypes.TEACHING &&
            experienceFilter !== ExperienceFilterTypes.ALL
          }
        />
        <Experience
          title="Coding Coach"
          job="The Coder School"
          location="San Francisco, CA"
          type={ExperienceType.TEACHING}
          partTime
          period="Sep 2019-Jun 2023"
          link="https://www.thecoderschool.com/sanfrancisco"
          duties={[
            "Taught and led 1-1, 2-1, and classes with up to 10 students lessons on Scratch, Python, JavaScript, Java, C#, C++, HTML/CSS, and React Native",
            "Helped a student develop a mobile application using React Native",
            "Taught a student data structures in Python",
            "Taught a student how to create an autocorrect system using Python and a Trie data structure",
            "Taught a student full stack development using the PERN stack",
            "Taught a student how to create a Graphical User Interface using C# and the .NET Framework",
            "Taught Test Driven Development to various students",
            "Led three summer camps teaching Python and basic web design",
          ]}
          hidden={
            experienceFilter !== ExperienceFilterTypes.TEACHING &&
            experienceFilter !== ExperienceFilterTypes.ALL
          }
        />
        <Experience
          title="Technology Lead"
          job="S Plus Group Limited"
          location="Hong Kong"
          type={ExperienceType.PROGRAMMING}
          period="Oct 2015-Present"
          link="https://www.splusgroup.com"
          duties={[
            "Designed, developed, and published the main website using HTML5, CSS3, Bootstrap, and Javascript utilizing GitHub Pages to host",
            "Advised and managed technology throughout the office",
            "Updated the website to use ReactJS as the primary library",
          ]}
          partTime
          hidden={
            experienceFilter !== ExperienceFilterTypes.PROGRAMMING &&
            experienceFilter !== ExperienceFilterTypes.ALL
          }
        />
        <Experience
          title="Computer Science WebMaster"
          job="University of San Francisco"
          location="San Francisco, CA"
          type={ExperienceType.PROGRAMMING}
          period="Aug 2020-May 2023"
          link="https://tutoringcenter.cs.usfca.edu"
          duties={[
            "Updated and maintained the website for the Computer Science tutors using HTML, CSS, and JavaScript",
            "Updated and maintained the calendar for all Computer Science tutors using Google Calendar",
          ]}
          hidden={
            experienceFilter !== ExperienceFilterTypes.PROGRAMMING &&
            experienceFilter !== ExperienceFilterTypes.ALL
          }
        />
        <Experience
          title="Computer Science Teaching Assistant"
          job="University of San Francisco"
          location="San Francisco, CA"
          type={ExperienceType.TEACHING}
          period="Jan 2021-Dec 2022"
          link="http://cs221v.cs.usfca.edu/fall22/"
          duties={[
            "Updated and maintained the website for the CS221 Introduction to C and Systems Programming Course at USF using HTML, CSS, and working with the command line to host the website",
            "Graded Labs, Projects, and Assignments",
            "Tutored students on topics of C",
            "Updated autograders to behave as expected to simplify the job for future teacher assistants",
          ]}
          hidden={
            experienceFilter !== ExperienceFilterTypes.TEACHING &&
            experienceFilter !== ExperienceFilterTypes.ALL
          }
        />
        <Experience
          title="Fieldwork Mentee"
          job="Gateway High School"
          location="San Francisco, CA"
          type={ExperienceType.TEACHING}
          period="Jan 2022-May 2022"
          link="https://www.gatewaypublicschools.org/ghs"
          duties={[
            "Provided support with small group work in a 9th Grade Algebra Classroom",
            "Led whole class activities including but not limited to Guided Note Taking, Group Discussions, Group Work, and preparation for a Socratic Seminar",
          ]}
          hidden={
            experienceFilter !== ExperienceFilterTypes.TEACHING &&
            experienceFilter !== ExperienceFilterTypes.ALL
          }
        />
        <Experience
          title="Fieldwork Mentee"
          job="Gateway Middle School"
          location="San Francisco, CA"
          type={ExperienceType.TEACHING}
          period="Aug 2021-Dec 2021"
          link="https://www.gatewaypublicschools.org/gms"
          duties={[
            "Provided support with small group work in a 7th Grade Mathematics classroom",
            "Provided support with lessons, keeping students focused and engaged",
          ]}
          hidden={experienceFilter !== ExperienceFilterTypes.TEACHING && experienceFilter !== ExperienceFilterTypes.ALL}
        />
        <Experience
          title="Computer Science Super Tutor"
          job="University of San Francisco"
          location="San Francisco, CA"
          type={ExperienceType.TEACHING}
          period="Sep 2020-Jan 2021"
          link="https://tutoringcenter.cs.usfca.edu"
          partTime
          duties={[
            "Tutored students in lower division undergraduate Computer Science classes",
            "Tutored students in USF classes: CS110, CS112, CS272 (formerly CS212), CS221, and CS245",
            "Taught students how to debug their code using various debuggers",
          ]}
          hidden={experienceFilter !== ExperienceFilterTypes.TEACHING && experienceFilter !== ExperienceFilterTypes.ALL}
        />
        <Experience
          title="Tutor and Mentor"
          job="MAST Education"
          location="Hong Kong"
          type={ExperienceType.TEACHING}
          period="Aug 2020-Aug 2021"
          link="https://www.masteducation.com"
          duties={[
            "TUtored students in Mathematics and Computer Science",
            "Mentored students applying to Universities",
            "Taught elementary Mathematics to underprivileged students in Hong Kong",
            "Taught basic English to underprivileged students in Hong Kong",
          ]}
          hidden={experienceFilter !== ExperienceFilterTypes.TEACHING && experienceFilter !== ExperienceFilterTypes.ALL}
        />
        <Experience
          title="Summer Intern"
          job="Hong Kong International School"
          location="Hong Kong"
          type={ExperienceType.PROGRAMMING}
          period="Jun 2021-Jul 2021"
          link="https://www.hkis.edu.hk"
          duties={new Map<string, string[]>()
            .set("Tasks on Coda", [
              "Created a service to simplify and contain the previous system of keeping notes on meetings between Students, Counselors, and Teachers, transitioning the previous system form a 200+ sheet spreadsheet into a single system, with a cleaner means to view and access data",
              "Created a service to generate students names who haven't been met with yet to help ensure all students are met with",
              "Implemented a reminder/notification system to ensure students are checked in with",
              "Wrote a User Guide to explain how to use the service",
            ])
            .set("Tasks in Python", [
              "Using a Fuzzy string matching system, created a system to help filter through 10000 user addresses, removing duplicates and similar addresses, in order to find distinct addresses paired with individual users.",
              "Created a simple file mover that takes basic information form a User Interface, built with PySimpleGUI, to mass move files from a local directory into a Google Drive Directory",
              "Created an automated web scraper using Selenium and BeautifulSoup4, that logs in a user, then scrapes 150 pages in approximately 15 minutes to aid with yearly data processing.",
              "Created an automated web scraper using Selenium, that downloads a file, then parses the file, replacing empty values with NULL values, then updates an SQL Database, using mysql-connector-python.",
            ])
            .set("Tasks in JavaScript", [
              "Created an algorithm in Google AppScript that sends email out to students based on flags set with data coming from a spreadsheet, propagated by form entries",
              "Aforementioned algorithm created to keep track of the last row checked to fix a crashing issue of continuous data input, overcrowding the previous mail sending system",
            ])
            .set("Tasks in PowerSchool", [
              "Updated the school's main page with the new built-in PowerSchool search, combining the old services with newer updated services",
              "Created a Guardian search that searches for all guardians in a database based on the name, email, or phone number provided, with options for current or all students, along with selections for guardian type (Mother, Father, Guardian, etc)",
              "Created a Student search that searches for students in the database based on their first, preferred, or last name, with an additional filter for grade level",
              "Updated the student health page to include COVID related information - vaccinations, infection dates, etc - along with showing the information of infectious diseases and health concerns",
              "Created a Student test view that shows a chart showcasing the students' test results over a period of time and how they've grown over that period. Test view includes a filter to allow for toggling and showing specific tests, to allow the user to choose which test to view. Each chart is accompanied by a table showing the raw data to provide the user with different views.",
              "Created a guide to three new pages, explaining how to use the new search systems.",
            ])}
            hidden={experienceFilter !== ExperienceFilterTypes.PROGRAMMING && experienceFilter !== ExperienceFilterTypes.ALL}
        />
        <Experience
          title="Summer Intern"
          job="Kactus"
          location="Hong Kong"
          type={ExperienceType.PROGRAMMING}
          period="Jun 2020-Jun 2020"
          link="https://www.kactus.com.hk"
          duties={[
            "Assisted at creating a WordPress theme for a client",
            "Used PHP, CSS, and JavaScript to create a WordPress theme and plugin to cater to the needs of the client",
          ]}
          hidden={experienceFilter !== ExperienceFilterTypes.PROGRAMMING && experienceFilter !== ExperienceFilterTypes.ALL}
        />
        <Experience
          title="Technology Lead"
          job="PBI Health"
          location="Remote"
          type={ExperienceType.PROGRAMMING}
          period="Mar 2019-Dec 2019"
          link="https://www.pbihealth.com"
          duties={[
            "Research on technology solutions",
            "Migration of Email services",
            "Advice regarding technology solutions",
            "Using ReactJS, created the front-end website for their platform",
          ]}
          hidden={experienceFilter !== ExperienceFilterTypes.PROGRAMMING && experienceFilter !== ExperienceFilterTypes.ALL}
        />
        <Experience
          title="Front-End Developer"
          partTime
          job="Share My Hub"
          location="Remote"
          type={ExperienceType.PROGRAMMING}
          period="Apr 2018-Sep 2019"
          duties={[
            "Provide design and functioning advice",
            "Using Vue.js, created the front-end website for their platform",
          ]}
          link="http://sharemyhub.com"
          hidden={experienceFilter !== ExperienceFilterTypes.PROGRAMMING && experienceFilter !== ExperienceFilterTypes.ALL}
        />
        <Experience
          title="Front-End Web Developer"
          job="Chain Dimenxxion"
          location="Remote"
          type={ExperienceType.PROGRAMMING}
          period="Jan 2019-Mar 2019"
          duties={[
            "Provide design and functioning advice",
            "Using HTML5, CSS3, Bootstrap, and jQuery, created the front-end website for their platform.s",
          ]}
          link="https://www.chaindimenxxion.com"
          hidden={experienceFilter !== ExperienceFilterTypes.PROGRAMMING && experienceFilter !== ExperienceFilterTypes.ALL}
        />
        <Experience
          title="Event Staff"
          partTime
          link="https://www.afoodieworld.com"
          job="Foodie Magazine"
          location="Hong Kong"
          type={ExperienceType.OTHER}
          period="Sep 2015-Aug 2018"
          duties={["Worked events including setting up and customer service"]}
          hidden={experienceFilter !== ExperienceFilterTypes.OTHER && experienceFilter !== ExperienceFilterTypes.ALL}
        />
      </div>
    </>
  );
};

export { Experiences };
