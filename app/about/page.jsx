import AboutImage from "../_components/AboutImage";
import Footer from "../_components/Footer";
import Header from "../_components/Header";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import user1 from "@/public/my_image.jpg";

function Page() {
  return (
    <main className="min-h-[100dvh]  text-[#252525]">
      <Header />
      <div className="flex min-h-screen flex-col items-center p-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="mb-4 text-xl font-bold text-gray-800">
            <span className="text-3xl text-indigo-500">&quot;</span>
            We were inspired to build Helpr after wiwtnessing the hardship faced
            within Nigeria and africa as a whole and therefore, empower people
            to create positive impact in their communities. The result? Helpr is
            a social-good marketplace linking non-profits, volunteers and
            donors.
            <span className="text-3xl text-indigo-500">&quot;</span>
          </h1>
          <button className="rounded-md bg-blue-700 px-10 py-2 text-white transition hover:bg-blue-600">
            Join Now
          </button>
        </div>

        {/* Culture Section */}
        <div className="mt-10 w-full max-w-5xl rounded-lg bg-gray-900 p-8 text-white shadow-lg">
          <h2 className="mb-8 text-3xl font-semibold">Our culture</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Culture Cards */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-green-400">✓</div>
              <div>
                <h3 className="text-xl font-semibold">
                  Flexible & Understanding
                </h3>
                <p>
                  We make sure the organization and the receiver get Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  sapiente veritatis ipsa quae aperiam aut unde animi eius
                  deserunt dolorum earum ea dicta quidem labore aspernatur, nam
                  adipisci incidunt! Quod.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl text-green-400">📈</div>
              <div>
                <h3 className="text-xl font-semibold">Growth & Development</h3>
                <p>
                  There is a wealth of growth potential to develop your career
                  in the long term. We provide the tools and resources to
                  thrive.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl text-green-400">🗣️</div>
              <div>
                <h3 className="text-xl font-semibold">Open & Transparent</h3>
                <p>
                  Everyone stays informed on all the latest projects, and input
                  is welcome.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl text-green-400">🤝</div>
              <div>
                <h3 className="text-xl font-semibold">Helpful & Supportive</h3>
                <p>As part of Refersion team, never have to go it alone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl uppercase text-center mt-10">DEVELOPER</h2>
        <div className="">
          <section
            id="home"
            className="flex flex-col-reverse xl:flex-row xl:mt-12 mt-1 xl:gap-10 md:gap-16 gap-4 xl:ml-10 md:ml-10 ml-2 lg:mb-6 lg:min-h-[90dvh] min-h-[99dvh]"
          >
            <div className="xl:mt-20 md:mt-16 mt-10 xl:max-w-[48%] md:max-w-[80%] max-w-[98%] mx-8 xl:mx-0 xl:ml-24  lg:ml-24 md:ml-16">
              <div className="text-xl tracking-widest text-gray-700">
                Hey! I&apos;m{" "}
                <div className="mt-1 w-12 h-[0.13rem] bg-gray-500"></div>
              </div>

              <h3 className="text-2xl font-semibold mt-6 uppercase lg:text-3xl xl:text-2xl">
                Onyedikachi Nwanguma
              </h3>

              <h4 className="text-xl lg:text-2xl xl:text-xl text-gray-700 font-medium mt-[0.16rem]">
                A Frontend Engineering Intern
              </h4>
              <p className="mt-5 text-gray-600 lg:text-xl xl:text-base">
                Enthusiastic aspiring frontend developer with foundational
                skills in HTML, CSS, JavaScript, and React. Experienced in
                building responsive layouts and a deeply rooted foundation in
                computer science for creative problem-solving.
              </p>

              <div className="flex gap-2 items-end mt-3">
                <Link
                  href="mailto:nwangumabimma@gmail.com"
                  className="bg-black hover:bg-gray-800 text-gray-50 rounded-full py-3 md:px-6 px-3 uppercase mt-4 text-xs"
                >
                  Contact Me
                </Link>

                <Link
                  href="https://github.com/onyedikachidev-codes"
                  className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center ml-2"
                >
                  <FaGithub className="h-6 w-6 text-gray-700 " />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/onyedikachi-nwanguma/"
                  className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center"
                >
                  <FaLinkedin className="h-6 w-6 text-gray-700" />
                </Link>

                <Link
                  href="https://x.com/Mannie799"
                  className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center"
                >
                  <FaXTwitter className="h-5 w-5 text-gray-700" />
                </Link>
              </div>
            </div>

            <div className="mx-auto xl:mx-0 xl:mt-8">
              <Image
                src={user1}
                alt="developer image"
                height={400}
                width={400}
                quality={90}
                className="rounded-full mt-24 sm:mt-0 object-cover xl:h-[23rem] xl:w-[23rem] lg:h-[38rem] lg:w-[38rem] md:h-[28rem] md:w-[28rem] h-[20rem] w-[20rem]"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Page;
