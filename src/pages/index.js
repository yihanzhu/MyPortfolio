import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yihan Zhu | Home</title>
        <meta name="description" content="Yihan Portfolio, built by NextJS and Tailwind CSS" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex item-center justify-between w-full lg:flex-col">
            {/* <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="YihanZhu"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max_width: 768px) 100vw, (max_width: 1200px) 50vw, 50vw"
              />
            </div> */}
            <div className="w-full text-center flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Unlimited Possibilities"
                className="!text-6xl !text-center xl:!text-6xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl "
              />
              <div className="flex item-center self-center mt-2 lg:self-center">
                <Link
                  href="/Yihan_Zhu_Software_Engineer_Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg
                  font-semibold hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume 
                  {/* <LinkArrow className={"w-auto ml-1"} /> */}
                </Link>
                <Link
                  href="mailto:yihan@yihanzhu.com"
                  target={"_blank"}
                  className="pt-2 ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
