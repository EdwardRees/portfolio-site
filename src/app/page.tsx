import {
  Education,
  Experiences,
  Navbar,
  Section,
  Service,
  Languages,
  Project,
  SupportingOther,
} from "@/components/";
import {
  faGraduationCap,
  faListAlt,
  faMobile,
  faUser,
  faHandHoldingHeart,
  faBuilding,
  faPaintBrush,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitch,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import portfolio from "@/img/portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CollegeSelectorIcon from "@/img/projects/collegeselector.svg";
import SPlusGroupIcon from "@/img/projects/S+GroupLimitedLogo.png";
import LibraryIcon from "@/img/projects/library-website-logo.png";
import ByteEducationIcon from "@/img/projects/ByteEducationLogo.svg";
import CollegeCompanionIcon from "@/img/projects/CollegeCompanionLogo.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto">
        <header className="header-image flex flex-col h-full">
          <div className="py-36 px-10">
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
            <h3 className="text-2xl text-center font-medium">
              Web Developer, App Developer, Programming Tutor, Drummer, Sailor,
              Educator, DevOps Trainee, System Architect, and more...
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
                JavaScript library named Vue.js, played around with PHP and
                Kotlin.
                <br />
                I&#39;ve taught and tutored Web Design, Python, Java, JavaScript, and C# to
                students varying in ages. During my Undergraduate years, I
                served as a Teacher&#39;s Assistant to our Introduction to C and
                Systems course, tutoring and helping University students
                increase their understanding of the C programming language.
                <br />
                Asides from tutoring and teaching, I&#39;ve been deepening my
                own understanding of C++ and Rust and various Web technologies. I&#39;ve
                also begun exploring the DevOps space with using more Cloud
                Services and a VPC. Additionally, I&#39;ve begun working with
                more Docker Containers and Virtual Machines to gain a stronger
                understanding of the operations side of DevOps. On top of that, I&#39;ve 
                been designing the system for a startup that I&#39;m working on with a
                couple friends of mine. The system uses microservices, Docker, and Kubernetes 
                to create a scalable and reliable system. In doing so, I&#39;m learning more about Docker, Kubernetes, and more DevOps tools to help me support the startup.
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
                <br />
                I am now an adjunct professor at the University of San Francisco teaching Introductory Computer Science courses.
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
              size="3x"
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
          <Experiences />
        </Section>
        <Section title="Programming Languages" id="languages" primary>
          <Languages />
        </Section>
        <Section title="Projects" id="projects">
          <div className="grid md:grid-cols-5 xs:grid-cols-2 gap-4 px-3 py-3 w-full">
            <Project
              name="College Selector"
              icon={CollegeSelectorIcon}
              desc="A mobile application that helps students find colleges that fit their needs. This used to be on the App Stores, but has been removed due to a lack of maintenance. This project has been ported and redeveloped in the College Companion project."
              link="https://www.collegeselector.app"
              tech={["React", "Firebase", "React Native", "Expo"]}
            />

            <Project
              name="S Plus Group Website"
              icon={SPlusGroupIcon}
              desc="A website for a consultancy company."
              link="https://www.splusgroup.net"
              tech={["React", "HTML", "CSS", "JavaScript", "Firebase"]}
            />

            <Project
              name="Library Website"
              icon={LibraryIcon}
              desc="My Masters capstone unit plan for an Introductory Computer Science course, developing a Library website as their culminating project."
            />

            <Project
              name="Byte Education"
              icon={ByteEducationIcon}
              desc="A website and project designed to developing lesson plans and systems to teaching Computer Science."
              link="https://www.byteeducation.com"
              tech={["React", "HTML", "CSS", "JavaScript"]}
            />

            <Project
              name="College Companion"
              icon={CollegeCompanionIcon}
              desc="A web application to support students through their University journey, from initially looking at Universities, to applying to Universities, to supporting their education with a built-in four year plan and gpa calculator."
              link="https://www.collegecompanion.app"
              tech={[
                "React",
                "Tailwind",
                "Supabase",
                "NextJS",
                "Vercel",
                "Docker",
                "Redis",
                "PostgreSQL",
              ]}
            />
          </div>
        </Section>
        <Section title="Support My Friends & Family!" id="support" primary>
          <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 ">
            <SupportingOther
              name="Hunter Macias"
              desc="The personal portfolio for my friend Hunter who does a lot of work in JavaScript and Python."
              icon={faUser}
              link="https://huntermacias.io"
              linkText="Hunter Macias"
            />
            <SupportingOther
              name="Kevin Lynch"
              desc="The personal portfolio for my friend Kevin who uploads his photography."
              icon={faUser}
              link="https://kevinlynch.com"
              linkText="Kevin Lynch"
            />
            <SupportingOther
              name="Shikaar Maharaj"
              desc="The Twitch Stream page for my friend Shikaar who streams various games from time to time"
              icon={faTwitch}
              link="https://www.twitch.tv/sike_star"
              linkText="Sike Star"
            />
            <SupportingOther
              name="Cosima Lesca, Ekisha Basu, Angelica Cheng"
              desc="A Charity started by three acquaintances of mine to help support the education of refugees."
              icon={faHandHoldingHeart}
              link="https://www.karingfrontiers.com"
              linkText="Karing Frontiers"
            />

            <SupportingOther
              name="Justin Kung"
              desc="A startup founded by my cousin helping working individuals with their mental health and personal development"
              icon={faBuilding}
              link="https://www.everydayempathy.co"
              linkText="Everyday Empathy"
            />

            <SupportingOther
              name="Becky Tian"
              desc="The Dance YouTube channel created by my friend Becky"
              icon={faYoutube}
              link="https://www.youtube.com/channel/UCiZL8osOSl1pBI6l6YpkkBw"
              linkText="Youtube Channel"
            />
            <SupportingOther
              name="Oliver Cheung"
              desc="The Violin Cover Youtube Channel developed by my friend Oliver"
              icon={faYoutube}
              link="https://www.youtube.com/channel/UC2yUajMnhUd0SbRG6LttLJA"
              linkText="Youtube Channel"
            />
            <SupportingOther
              name="Amanda Cheung"
              desc="The personal artwork portfolio for my acquaintance Amanda"
              icon={faPaintBrush}
              link="https://www.mandydraws.com"
              linkText="Mandy Draws"
            />
            <SupportingOther
              name="Zenith Chan"
              desc="The personal artwork shop for my acquaintance Zenith"
              icon={faPaintBrush}
              link="https://www.jarofrubies.com"
              linkText="Jar of Rubies"
            />
          </div>
        </Section>
        {/* <Section title="Schedule" id="schedule">
          <p>Schedule a time with me!</p>
        </Section> */}
        <section
          className="flex flex-col items-center justify-center py-10 px-10 bg-cyan-100 dark:bg-cyan-950 text-center"
          id="links"
        >
          <div>
            <p className="font-semibold text-xl">Edward Rees</p>
            <br />
            <div className="flex flex-row justify-center items-center">
              <FontAwesomeIcon icon={faEnvelope} size="1x" className="pr-2" />
              <a href="mailto:info@edwardrees.info?subject=Inquiry%20from%20edwardrees.info" className="">
                info@edwardrees.info
              </a>
            </div>
            <br />
            <div className="flex flex-row justify-around">
              <a href="https://www.linkedin.com/edwardrees5" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a href="https://www.github.com/EdwardRees" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </div>
            <br />
            <p>Copyright &copy; Edward Rees 2023</p>
          </div>
        </section>
      </div>
    </>
  );
}
