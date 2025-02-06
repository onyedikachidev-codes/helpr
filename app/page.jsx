import Image from "next/image";
import { FaLightbulb, FaTrophy } from "react-icons/fa";
import { IoMegaphoneOutline } from "react-icons/io5";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleNumber6Filled,
} from "react-icons/tb";

import bg from "@/public/hands.jpg";
import patient1 from "@/public/patient1.jpg";
import patient2 from "@/public/patient2.jpg";
import patient3 from "@/public/patient3.jpg";
import patient4 from "@/public/cancer.jpg";
import patient5 from "@/public/patient5.jpg";

import Header from "@/app/_components/Header";
import Button from "@/app/_components/Button";
import Card from "@/app/_components/Card";
import Progress from "@/app/_components/Progress";
import Fundraisers from "@/app/_components/Fundraisers";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <main>
      <section className="min-h-screen relative w-full">
        <Image
          src={bg}
          alt="background_image"
          fill
          className="object-cover -z-10"
        />
        <Header />

        <div className="flex items-center mx-auto md:mt-10">
          <p className="mx-auto hidden rounded-full border border-stone-600 px-6 py-2 text-center tracking-tight text-stone-900 md:inline">
            For individuals,{" "}
            <span className="hidden md:inline">businesses</span> and NGOs
          </p>
        </div>

        <div className="mt-14 ml-[13rem] max-w-72 text-6xl font-normal font-serif leading-tight text-[#06080B] md:mt-16">
          <div className="flex gap-3">
            <span>Spread</span>
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-red-700 bg-clip-text text-transparent">
              love
            </span>{" "}
            <span>by</span>
          </div>
          <span>giving</span>
        </div>

        <p className="mt-7 max-w-96 text-gray-700 ml-[13rem]">
          Helpr gives you a platform to spread love and change the world.
        </p>

        <div className="mt-20 flex flex-col gap-3 md:mt-12 md:flex-row md:gap-6 ml-[13rem]">
          <Button type="squareStart">Start a Fundraiser</Button>
          <Button type="squareWhite">Donate to a Fundraiser</Button>
        </div>
      </section>

      <section className="pb-7 pt-4 text-[#252525] min-h-screen">
        <h2 className="mt-6 text-center text-3xl font-semibold">
          Your Journey to Making an Impact
        </h2>

        <div className="mt-9 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card
              icon={<FaLightbulb />} // Replace with an icon or React component
              title="Create Your Campaign"
              description="Set up your project. Add details, images, and a funding goal to tell your story."
              buttonText="Start Now"
              buttonLink="/create-campaign"
            />

            {/* Card 2 */}
            <Card
              icon={<IoMegaphoneOutline />} // Replace with an icon or React component
              title="Share with Your Network"
              description="Spread the word! Share your campaign on social media, email, and with friends."
              buttonText="Share Tips"
              buttonLink="/share-tips"
            />

            {/* Card 3 */}
            <Card
              icon={<FaTrophy />} // Replace with an icon or React component
              title="Reach Your Goal"
              description="Watch your funding grow as supporters back your project. Bring your idea to life!"
              buttonText="Explore Success Stories"
              buttonLink="/success-stories"
            />
          </div>
        </div>

        <h2 className="mb-6 mt-20 text-center text-3xl font-semibold">
          Why Use Helpr?
        </h2>

        <div className="ml-4 flex w-[92%] flex-col items-start justify-center gap-12 md:ml-0 md:mt-20 md:w-auto md:flex-row md:items-center md:gap-8 lg:mt-12">
          <div className="flex flex-col gap-12 lg:h-[80dvh] lg:w-[45%] lg:gap-6">
            <div className="flex items-start gap-6 md:h-[14dvh] lg:h-[28dvh]">
              <span>
                <TbCircleNumber1Filled className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">
                  Raise Funds for Personal or Social Causes
                </h2>
                <p className="mt-2">
                  Users can leverage crowdfunding platforms to collect money for
                  personal projects, medical expenses, educational costs, or
                  charitable initiatives. These platforms help individuals or
                  groups easily reach out to a large audience for financial
                  support.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 md:h-[14dvh] lg:h-[28dvh]">
              <span>
                <TbCircleNumber2Filled className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">
                  Support Creative Projects
                </h2>
                <p className="mt-2">
                  Creators, such as artists, musicians, or filmmakers, can use
                  crowdfunding apps to raise money for their projects, whether
                  it&apos;s a new album, a film production, or a community
                  initiative. It provides a way for users to bring their
                  creative ideas to life with the backing of the crowd.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 pb-6 lg:h-[80dvh] lg:w-[45%] lg:gap-6">
            <div className="flex items-start gap-6 md:h-[14dvh] lg:h-[28dvh]">
              <span>
                <TbCircleNumber3Filled className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">
                  Start or Grow a Business
                </h2>
                <p className="mt-2">
                  Entrepreneurs can use crowdfunding to raise capital for
                  starting or expanding a business. It serves as an alternative
                  to traditional funding methods, such as loans or venture
                  capital, and allows users to tap into a broad network of
                  potential investors.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 md:h-[14dvh] lg:h-[28dvh]">
              <span>
                <TbCircleNumber4Filled className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">
                  Community and Peer Support
                </h2>
                <p className="mt-2">
                  Crowdfunding platforms help users to connect with others who
                  may share similar interests or goals. It creates a sense of
                  community, allowing people to support each other in meaningful
                  ways, whether it&apos;s through financial contributions or
                  moral support for a cause.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div>
          <h2 className="mb-6 mt-10 text-center text-3xl font-semibold text-[#252525]">
            Ongoing Fundraisers
          </h2>
          <div className="lg:hidden">
            <Fundraisers />
            <Fundraisers />
            <Fundraisers />
          </div>

          <div className="hidden gap-6 lg:flex">
            <div className="ml-[5%] flex w-[50%] flex-col rounded-lg p-4 shadow-lg group relative">
              {/* Image Container */}
              <div className="relative">
                <Image
                  src={patient5}
                  alt="Patient in hospital"
                  height={40}
                  width={40}
                  quality={90}
                  className="w-[30rem] h-[20rem] rounded-lg group-hover:scale-105"
                />
                {/* Donations Counter */}
                <div className="absolute bottom-2 left-2 rounded-full bg-gray-800 bg-opacity-75 px-2 py-1 text-sm text-white">
                  26.4K donations
                </div>
              </div>

              {/* Caption */}
              <p className="mt-4 text-lg font-semibold text-gray-800">
                Please help Jason Mamoush
              </p>

              <p className="mt-2 text-slate-500">
                He is suffering from severe brain damage and memory loss and
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                totam dignissimos eaque earum deserunt voluptate architecto,
                quasi quod iusto ipsa. Laudantium atque quas eius distinctio
                nihil reprehenderit ipsa expedita alias!
              </p>

              <div className="mt-8">
                <Progress />
                <p className="mt-2 text-lg font-semibold text-black">
                  $65,000 raised
                </p>
              </div>
            </div>

            <div className="flex w-[33%] flex-col gap-3">
              <div className="flex flex-col rounded-lg bg-white p-4 shadow-lg group relative">
                {/* Image Container */}
                <div className="relative">
                  <Image
                    src={patient4}
                    alt="Patient in hospital"
                    height={50}
                    width={50}
                    quality={100}
                    className="w-full rounded-lg group-hover:scale-105"
                  />
                  {/* Donations Counter */}
                  <div className="absolute bottom-2 left-2 rounded-full bg-gray-800 bg-opacity-75 px-2 py-1 text-sm text-white">
                    1.3K donations
                  </div>
                </div>

                {/* Caption */}
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  Urgent help for Kudus
                </p>

                <div className="mt-2">
                  <Progress val={90} />
                  <p className="mt-1 text-lg font-semibold text-black">
                    $23,000 raised
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-white p-4 shadow-lg relative group">
                {/* Image Container */}
                <div className="relative">
                  <Image
                    src={patient2}
                    alt="Patient in hospital"
                    height={50}
                    width={50}
                    className="w-full rounded-lg group-hover:scale-105"
                  />
                  {/* Donations Counter */}
                  <div className="absolute bottom-2 left-2 rounded-full bg-gray-800 bg-opacity-75 px-2 py-1 text-sm text-white">
                    2.3K donations
                  </div>
                </div>

                {/* Caption */}
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  Please help Abigail Simi
                </p>

                <div className="mt-2">
                  <Progress val={20} />
                  <p className="mt-1 text-lg font-semibold text-black">
                    $12,000 raised
                  </p>
                </div>
              </div>
            </div>

            <div className="mr-[5%] flex w-[33%] flex-col gap-3">
              <div className="flex flex-col rounded-lg bg-white p-4 shadow-lg relative group">
                {/* Image Container */}
                <div className="relative">
                  <Image
                    src={patient1}
                    alt="Patient in hospital"
                    height={50}
                    width={50}
                    className="h-[12rem] w-[18rem] rounded-lg group-hover:scale-105"
                  />
                  {/* Donations Counter */}
                  <div className="absolute bottom-2 left-2 rounded-full bg-gray-800 bg-opacity-75 px-2 py-1 text-sm text-white">
                    13.1K donations
                  </div>
                </div>

                {/* Caption */}
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  Please help John
                </p>

                <div className="mt-2">
                  <Progress val={70} />
                  <p className="mt-1 text-lg font-semibold text-black">
                    $35,000 raised
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-white p-4 shadow-lg relative group">
                {/* Image Container */}
                <div className="relative">
                  <Image
                    src={patient3}
                    alt="Patient in hospital"
                    height={50}
                    width={50}
                    className="w-full rounded-lg group-hover:scale-105"
                  />
                  {/* Donations Counter */}
                  <div className="absolute bottom-2 left-2 rounded-full bg-gray-800 bg-opacity-75 px-2 py-1 text-sm text-white">
                    1.9K donations
                  </div>
                </div>

                {/* Caption */}
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  Support for Moses
                </p>

                <div className="mt-2">
                  <Progress val={50} />
                  <p className="mt-1 text-lg font-semibold text-black">
                    $5,000 raised
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button type="exploreMore">Explore more fundraisers</Button>
      </section>

      <Footer />
    </main>
  );
}
