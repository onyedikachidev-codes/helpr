import Header from "@/app/_components/Header";
import FundraiserMobile from "../_components/FundraiserMobile";
import ExploreFundraiser from "../_components/ExploreFundraiser";
import Image from "next/image";

import img from "@/public/sarah.jpg";
import img2 from "@/public/animal.jpg";
import tap from "@/public/tap.jpg";
import children from "@/public/children.jpg";

import ShowMore from "../_components/ShowMore";
import Footer from "../_components/Footer";

function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-[100dvh]">
        <h2 className="mt-8 pl-[5%] md:text-3xl text-2xl font-semibold">
          Explore
        </h2>
        <p className="mb-6 mt-2 pl-[5%]">
          Empowering Dreams, One Donation at a Time.
        </p>

        <div className="hidden flex-wrap items-center justify-center gap-6 lg:flex">
          <ExploreFundraiser
            total="26.4K"
            headline="Help Us Build a Future for Street Children in Nairobi"
            storySection={
              <ShowMore
                text="Every day, hundreds of children in Nairobi wake up on the streets, unsure where their next meal will come from or if they’ll be safe. Many have lost their families to poverty, disease, or violence. But there’s hope. Our organization, Hope for Tomorrow, is building a shelter and school to provide these children with food, education, and a chance to dream again. With your support, we can give them a safe place to sleep, a warm meal, and the tools to build a better future."
                limit={160}
              />
            }
            amt="65,000"
            val={90}
          >
            {" "}
            <Image
              src={children}
              alt="Patient in hospital"
              height={300}
              width={300}
              className="w-full rounded-lg"
            />
          </ExploreFundraiser>

          <ExploreFundraiser
            total="3.3K"
            val={10}
            headline="Save Our Local Animal Shelter, We Can't Do It Without You"
            storySection={
              <ShowMore
                text="For over 20 years, Paws and Claws Shelter has been a safe haven for abandoned and abused animals in our community. But now, we’re facing our biggest challenge yet. Rising costs and increased demand have left us struggling to keep our doors open. Without your help, hundreds of animals could lose their chance at a loving home. Your donation will provide food, medical care, and a warm bed for these innocent lives. Every dollar brings us closer to saving more animals and giving them the second chance they deserve."
                limit={140}
              />
            }
            amt="10,569"
          >
            {" "}
            <Image
              src={img2}
              alt="Patient in hospital"
              height={330}
              width={300}
              className="w-full rounded-lg"
            />
          </ExploreFundraiser>

          <ExploreFundraiser
            total="12.9K"
            val={50}
            headline="Help Us Bring Clean Water to 500 Families in Rural India"
            storySection={
              <ShowMore
                text="Imagine walking miles every day just to fetch water that isn’t even safe to drink. For families in rural India, this is a daily reality. Contaminated water leads to illness, keeps children out of school, and traps communities in poverty. But together, we can change this. Our project will install clean water wells in 5 villages, providing safe drinking water to over 500 families. With your support, we can give these communities the gift of health, time, and opportunity. Clean water isn’t just a basic need—it’s a lifeline to a better future."
                limit={136}
              />
            }
            amt="23,970"
          >
            {" "}
            <Image
              src={tap}
              alt="Patient in hospital"
              height={300}
              width={300}
              className="w-full rounded-lg"
            />
          </ExploreFundraiser>

          <ExploreFundraiser
            total="12.9K"
            val={70}
            headline="Support Sarah’s Fight Against Cancer: Every Donation Counts"
            storySection={
              <ShowMore
                text="Sarah is a loving mother, a dedicated teacher, and a fighter. Last year, she was diagnosed with stage 3 breast cancer, and her life changed overnight. Despite her strength and determination, the medical bills are overwhelming. Sarah needs chemotherapy, surgery, and ongoing care to beat this disease. We’re rallying as a community to support her and her family during this difficult time. Your donation will help cover her medical expenses and allow her to focus on what matters most—healing and spending time with her two young children. Let’s show Sarah she’s not alone in this fight."
                limit={140}
              />
            }
            amt="93,238"
          >
            {" "}
            <Image
              src={img}
              alt="Patient in hospital"
              height={300}
              width={300}
              className="w-full rounded-lg"
            />
          </ExploreFundraiser>
        </div>

        <div className="lg:hidden md:mx-20">
          <FundraiserMobile
            donation="26.4K"
            headline="Help Us Build a Future for Street Children in Nairobi"
            storySection={
              <ShowMore
                text="Every day, hundreds of children in Nairobi wake up on the streets, unsure where their next meal will come from or if they’ll be safe. Many have lost their families to poverty, disease, or violence. But there’s hope. Our organization, Hope for Tomorrow, is building a shelter and school to provide these children with food, education, and a chance to dream again. With your support, we can give them a safe place to sleep, a warm meal, and the tools to build a better future."
                limit={160}
              />
            }
            amount="65,000"
            value={90}
          >
            {" "}
            <Image
              src={children}
              alt="Patient in hospital"
              height={300}
              width={300}
              className="w-full rounded-lg"
            />
          </FundraiserMobile>

          <FundraiserMobile
            donation="3.3K"
            value={10}
            headline="Save Our Local Animal Shelter, We Can't Do It Without You"
            storySection={
              <ShowMore
                text="For over 20 years, Paws and Claws Shelter has been a safe haven for abandoned and abused animals in our community. But now, we’re facing our biggest challenge yet. Rising costs and increased demand have left us struggling to keep our doors open. Without your help, hundreds of animals could lose their chance at a loving home. Your donation will provide food, medical care, and a warm bed for these innocent lives. Every dollar brings us closer to saving more animals and giving them the second chance they deserve."
                limit={140}
              />
            }
            amount="10,569"
          >
            {" "}
            <Image
              src={img2}
              alt="Patient in hospital"
              height={330}
              width={300}
              className="w-full rounded-lg"
            />
          </FundraiserMobile>

          <FundraiserMobile
            donation="12.9K"
            value={50}
            headline="Help Us Bring Clean Water to 500 Families in Rural India"
            storySection={
              <ShowMore
                text="Imagine walking miles every day just to fetch water that isn’t even safe to drink. For families in rural India, this is a daily reality. Contaminated water leads to illness, keeps children out of school, and traps communities in poverty. But together, we can change this. Our project will install clean water wells in 5 villages, providing safe drinking water to over 500 families. With your support, we can give these communities the gift of health, time, and opportunity. Clean water isn’t just a basic need—it’s a lifeline to a better future."
                limit={136}
              />
            }
            amount="23,970"
          >
            {" "}
            <Image
              src={tap}
              alt="Patient in hospital"
              height={300}
              width={300}
              className="w-full rounded-lg"
            />
          </FundraiserMobile>

          <FundraiserMobile
            donation="12.9K"
            value={70}
            headline="Support Sarah’s Fight Against Cancer: Every Donation Counts"
            storySection={
              <ShowMore
                text="Sarah is a loving mother, a dedicated teacher, and a fighter. Last year, she was diagnosed with stage 3 breast cancer, and her life changed overnight. Despite her strength and determination, the medical bills are overwhelming. Sarah needs chemotherapy, surgery, and ongoing care to beat this disease. We’re rallying as a community to support her and her family during this difficult time. Your donation will help cover her medical expenses and allow her to focus on what matters most—healing and spending time with her two young children. Let’s show Sarah she’s not alone in this fight."
                limit={140}
              />
            }
            amount="93,238"
          >
            {" "}
            <Image
              src={img}
              alt="Patient in hospital"
              height={300}
              width={300}
              className="w-full rounded-lg"
            />
          </FundraiserMobile>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1 pb-3"></div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
