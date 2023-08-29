import { Navbar } from "@/components/navbar";
import Image from "next/image";
import portfolio from "./img/portfolio.png";
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
        <div
          className="flex flex-col items-center justify-center py-10 px-10"
          id="about"
        >
          <div>
            <p className="text-4xl text-center py-5 px-10">About Me</p>
            <hr className="w-full pt-5" />
          </div>
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
        </div>
      </div>
    </>
  );
}
