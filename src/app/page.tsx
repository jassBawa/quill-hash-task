import Link from "next/link";

import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";

import {
  Hero,
  ComprehensiveAudit,
  CarpeDiemDetails,
  CarpeDiemLists,
  Testimonial,
  QuillComparison,
  Newsletter,
} from "@/components/homepage";

export default function Home() {
  return (
    <main className="homepage border">
      <section className="homepage__hero relative">
        <Header />
        {/* <Hero /> */}
      </section>

      <div className="max-w-4xl mx-auto mt-12 py-8">
        <section className="homepage__details  ">
          <QuillComparison />

          <div className="more__details grid grid-cols-1 md:grid-cols-3 md:mt-12">
            <div className="details__header mt-6 md:mt-0 md:col-span-3 order-2 md:order-1 flex flex-col gap-4 items-center">
              <h3 className="font-display max-w-xs md:max-w-xl text-center text-[#0E3088] font-semibold text-2xl md:text-3xl">
                See how QuillAudits is a trusted partner in 1000+ Audit stories
              </h3>
              <Button className="px-4">Request an Audit</Button>
            </div>
            <p className="details__para md:col-span-2 order-3 md:order-2 mt-8 md:mt-12 md:pr-8 max-w-xs mx-auto md:mx-0 md:max-w-full">
              Carpe Diem Pension, on Pulse blockchain, redefines retirement with
              a self-managed, inclusive, globally portable fund. Unique for its
              token burn mechanism, it ensures a sustainable 4.32% inflation
              payout. With $143.11k and 41.06% of CDP already burned, it serves
              35 users globally.
            </p>
            <div
              className="details__location drop-shadow-md bg-white shadow-[#5580DB36] border order-1 
            md:order-3 mt-8 md:mt-16 max-w-xs w-full mx-auto border-indigo-600 py-4 px-4 rounded"
            >
              <div className="h-full w-full">
                <div className="item">
                  <p className="text-[#808080] text-xs">Headquarters</p>
                  <p>Switzerland</p>
                </div>
                <div className="item mt-4">
                  <p className="text-[#808080] text-xs">Chain</p>
                  <p>Pulse Blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CarpeDiemDetails />

        <section className="mt-12">
          <div className="md:max-w-[60%] max-w-[22rem] mx-auto md:mx-0">
            <CarpeDiemLists />

            {/* Quillaudit approach */}
            <div className="mt-8 text-sm md:text-base">
              <h3 className="heading">
                QuillAudits&apos; Strategic Approach to CDP Security Audits
              </h3>
              <p className="mt-2 leading-relaxed">
                We prioritize threat modeling based on platform-specific risks.
                Security-first, we identify and mitigate vulnerabilities beyond
                functionality testing. Using white-box and black-box tests, we
                conduct thorough vulnerability assessments. Maintaining
                transparency, we communicate openly with the CDP team.
                Emphasizing clarity, we present actionable insights for
                efficient issue resolution.
              </p>

              <ComprehensiveAudit />
            </div>

            {/* Remedation */}
            <div className="mt-8 text-sm md:text-base">
              <h3 className="heading">Remedation & Impact</h3>
              <p className="mt-4 leading-relaxed">
                All identified vulnerabilities were addressed by the CDP team,
                significantly enhancing the smart contract&apos;s security
                posture. Key improvements include
              </p>
              <ul role="list" className="list-disc pl-4">
                <li>Implementation of reentrancy protection mechanisms.</li>
                <li>
                  Accurate handling of decimal values using established
                  libraries or best practices.
                </li>
                <li>Revised calculations with proper scaling factors</li>
                <li>
                  Fixing logic errors to ensure deposits and waiting periods are
                  enforced.
                </li>
                <li>
                  Addressing referral system vulnerabilities to prevent abuse.
                </li>
              </ul>
              <p className="mt-4 space-x-2">
                <span className="font-semibold">Embed this tweet:-</span>
                <Link
                  href={
                    "https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"
                  }
                  className=" text-blue-500 hover:underline"
                >
                  https://x.com/CarpeDiemCDP/
                  <br />
                  status/1742906560794296402?s=20
                </Link>
              </p>
              <p className="mt-4 leading-relaxed">
                CDP smart contract audit revealed and fixed critical
                vulnerabilities, safeguarding funds and ensuring platform
                stability. This underscores the need for proactive security in
                blockchain projects, crucial for financial asset management.
                Through audits and issue resolution, CDP reinforces platform
                security, bolstering user trust.
              </p>
            </div>

            {/* Testimonial */}
            <div className="mt-16 text-sm md:text-base">
              <Testimonial />
            </div>
          </div>
        </section>
      </div>

      <Newsletter />
    </main>
  );
}
