import { Navbar, Section, Service, Education, Experience } from "@/components/";
import Image from "next/image";
import portfolio from "./img/portfolio.png";
import {
  faMobile,
  faGraduationCap,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ExperienceType } from "@/lib/experience-types";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto">
        <header className="header-image flex flex-col h-full">
          <div className="py-36">
            <div className="items-center justify-center flex">
              <Image
                src={portfolio}
                width={250}
                height={250}
                alt="portfolio"
                className="rounded-full p-4"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-center py-5">
                Edward Rees
              </h1>
            </div>
            <h3 className="text-2xl text-center">
              Web Developer, App Developer, Programming Tutor, Drummer, Sailor,
              Educator, DevOps Trainee, and more...
            </h3>
            <br />

            <div className="flex justify-center items-center py-3">
              <a
                href="#about"
                className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 py-3 px-3 rounded-xl"
              >
                Find Out More
              </a>
            </div>
          </div>
        </header>
        <Section title="About Me" id="about" primary>
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <p className="text-2xl">Who am I?</p>
              <br />
              <p className="text-center">
                My name is Edward Rees. I recently graduated with my Masters of
                Arts in Teaching with a preliminary Single Subject Credential in
                Mathematics from the University of San Francisco. I graduated
                with my Bachelors of Science in Computer Science, with a Minor
                in Psychology in the Spring of 2022. I grew up in Hong Kong and
                lived there for most of my life up until I moved to San
                Francisco in 2018. When I&#39;m not programming or working,
                I&#39;m usually drumming or, when I&#39;m in Hong Kong, sailing.
                In my free time, I serve as a mentor and tutor people
                programming.
              </p>
            </div>
          </div>
          <br />
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <p className="text-2xl">My Story</p>
              <br />
              <p className="text-center">
                I began programming in 2014. I started with the simple HTML and
                CSS-web design. Shortly after, in early 2015, I began playing
                around with Swift, Python, and Java. Throughout 2015-2016, I
                took a course on Python that served as an introductory course to
                programming. I learned the basics of Java in High School over a
                year long course on Computer Science covering the main aspects
                of Java throughout the winter of 2016 to the summer of 2017.
                During the summer of 2017, I learned the JavaScript framework of
                React and it&#39;s application of React Native to help build the{" "}
                <a href="https://www.collegeselector.app" className="font-bold">
                  College Selector
                </a>
                . In the summer of 2018, I learned basic TypeScript, the
                JavaScript framework named Vue.js, played around with PHP and
                Kotlin.
                <br />
                I&#39;ve taught and tutored Web Design, Python, Java, and C# to
                students varying in ages. During my Undergraduate years, I
                served as a Teacher&#39;s Assistant to our Introduction to C and
                Systems course, tutoring and helping University students
                increase their understanding of the C programming language.
                <br />
                Asides from tutoring and teaching, I&#39;ve been deepening my
                own understanding of C++ and various Web technologies. I&#39;ve
                also begun exploring the DevOps space with using more Cloud
                Services and a VPC. Additionally, I&#39;ve begun working with
                more Docker Containers and Virtual Machines to gain a stronger
                understanding of the operations side of DevOps.
                <br />
                In terms of teaching and pursuing education and becoming a
                teacher, I&#39;ve often been asked why I made this decision.
                When I was in my first year of University, I realized how much I
                enjoyed explaining various concepts to my peers and teaching
                others programming concepts. I discovered my personal passion
                for education and helping others find their interest in Computer
                Science and programming, or on the flip side, helping others
                understand why programming may not be for them or why they
                don&#39;t enjoy it so much.
              </p>
            </div>
          </div>
        </Section>
        <Section title="What can I do?" id="services">
          <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-x-4 gap-y-8 py-3 px-3">
            <Service
              title="Web Development"
              icon={faListAlt}
              size="3x"
              desc="I can help you create a website's front end using HTML, CSS, and JavaScript.Furthermore, I can help create a back end using NodeJS. Additional libraries for
                  front end development include utilizing Bootstrap, Tailwindcss, React.js, and
                  Vue.js."
            />
            <Service
              title="App Development"
              icon={faMobile}
              size="sm"
              desc="I can help you create a mobile application using React Native. Due to my limited
              Native Android and iOS experience, I can only help you create applications using
              React Native, but I can help guide you in the process of creating a mobile
              application regardless of the language of choice."
            />
            <Service
              size="3x"
              title="Programming Tutor"
              icon={faGraduationCap}
              desc="I can teach HTML5, CSS3, JavaScript, TypeScript, Python, Java, C, and C#. It
              depends on what you want to do. I can help you understand
              any of the programming languages I have experience with."
            />
          </div>
        </Section>
        <Section title="Education" id="education" primary>
          <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4 px-3 py-3">
            <Education
              degree="Masters of Arts in Teaching"
              school="University of San Francisco"
              year="May 2023"
              gpa="4.0"
              location="San Francisco, CA"
              courses={[
                "Learning and Teaching",
                "Education for Exceptional Children",
                "Education for Bilingual Children: Theory and Practice",
                "Teaching for Diversity and Social Justice",
                "Health Education",
                "Teaching, Learning, and Technology",
                "Single Subject Curriculum & Instruction: Math/Science I",
                "Single Subject Curriculum & Instruction: Math/Science II",
                "Teaching Adolescents",
                "Academic Literacy",
                "Single Subject Student Teaching I",
                "Curriculum Currents and Controversy",
                "Single Subject Student Teaching II",
                "Single Subject Student Teaching III",
                "Curriculum Development",
              ]}
            />
            <Education
              degree="Bachelors of Science in Computer Science"
              school="University of San Francisco"
              year="May 2022"
              gpa="3.82"
              location="San Francisco, CA"
              other={new Map<string, string>()
                .set("Minor", "Psychology")
                .set("Graduation Honors", "Magna Cum Laude")
                .set(
                  "MAT Dual Degree",
                  "Did a 4+1 with the Dual Degree MAT Program."
                )}
              courses={[
                "Introduction to Computer Science I",
                "Introduction to Computer Science II",
                "Introduction to C and Systems Programming",
                "Data Structures and Algorithms",
                "Software Development",
                "Computer Architecture",
                "Operating Systems",
                "Programming Language Paradigms",
                "Introduction to Database Systems",
                "Senior Team Project",

                "Calculus and Analytic Geometry I",
                "Discrete Mathematics",
                "Linear Algebra & Probability",

                "Social Psychology",
                "Biological Psychology",
                "Abnormal Psychology",
                "Theories of Personality",
              ]}
            />
          </div>
        </Section>
        <Section title="Experience" id="experience">
          <div className="grid md:grid-cols-4 xs:grid-cols-2 gap-4 px-3 py-3">
            <Experience
              title="General Manager"
              job="The Coder School"
              location="San Francisco, CA"
              type={ExperienceType.MANAGEMENT}
              period="May 2023-Present"
              duties={[
                "Managed schedules of 9 coaches and 40 students",
                "Managed the day-to-day operations of the school",
                "Trained coding coaches in various teaching methods",
                "Led three summer camps teaching Python and Thunkable",
              ]}
              link="https://www.thecoderschool.com/sanfrancisco/"
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
            />
            <Experience
              title="Front-end Web Developer"
              job="Chain Dimenxxion"
              location="Remote"
              type={ExperienceType.PROGRAMMING}
              period="Jan 2019-Mar 2019"
              duties={[
                "Provide design and functioning advice",
                "Using HTML5, CSS3, Bootstrap, and jQuery, created the front-end website for their platform.s",
              ]}
              link="https://www.chaindimenxxion.com"
            />
            <Experience
              title="Event Staff"
              partTime
              link="https://www.afoodieworld.com"
              job="Foodie Magazine"
              location="Hong Kong"
              type={ExperienceType.OTHER}
              period="Sep 2015-Aug 2018"
              duties={[
                "Worked events including setting up and customer service",
              ]}
            />
          </div>
        </Section>
      </div>
    </>
  );
}
