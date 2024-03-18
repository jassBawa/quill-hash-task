import {
  DiscordIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  MediumIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets";
import QuillIcon from "@/assets/QuillIcon";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer min-h-full py-8 md:py-0 md:pt-8 ">
      <div className="footer__inner max-w-[90%] lg:max-w-[80%] mx-auto  ">
        {/* Footer header */}
        <div className="logo__container mt-8 md:mt-0">
          <div className="logo flex items-center gap-2">
            <QuillIcon />
            <span className="text-3xl text-white">QuillAudits</span>
          </div>
          <p className="text-xs pl-14 text-[#EAEAEA]">
            Making Web3 a safer place
          </p>
        </div>

        {/* Footer main */}
        <div
          className="footer__links__container text-xs lg:text-base text-white font-medium lg:mt-16 
          relative
          -mt-48
            grid grid-cols-2 gap-8
            md:grid-cols-4 md:gap-8 
            lg:grid-cols-5 lg:gap-12
            "
        >
          <div className="footer__first__col order-6 lg:order-none">
            <div className="col__section">
              <span className="footer__col__heading text-base pb-2 border-b-2 border-[#2D83EE] ">
                More About Quill
              </span>
              <div className="col__links  flex flex-col mt-8 gap-2">
                <Link href="/about-us">About us</Link>
                <Link href="/faqs">FAQs</Link>
                <Link href="/">Blockchains We Audit</Link>
              </div>
            </div>
            <div className="col__section mt-8 ">
              <span className="footer__col__heading text-base ">
                Contact Us
              </span>
              <div className="col__links flex flex-col font-normal mt-2 gap-2">
                <Link
                  href="mailto:audits@quillhash.com"
                  target="_blank"
                  className="flex items-center gap-2 italic"
                >
                  <MailIcon />
                  <span className="underline">audits@quillhash.com</span>
                </Link>
                <Link
                  href="https://t.me/quillaudits"
                  target="_blank"
                  className="flex items-center gap-2 italic"
                >
                  <TelegramIcon />
                  <span className="underline">t.me/quillaudits</span>
                </Link>
                <div className=" mt-8">
                  <div className="flex gap-2 items-center">
                    <LocationIcon />
                    <span>Our Location:</span>
                  </div>
                  <p className="mt-2">
                    Office 104/105 Level 1, Emaar Square, Building 4 Sheikh
                    Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab
                    Emirates P.O box: 416654
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second col */}

          <div className="footer__second__col order-2 lg:order-none">
            <span className="footer__col__heading text-base pb-2 border-b-2 border-[#2D83EE] ">
              Audit Services
            </span>
            <div className="col__links flex flex-col gap-2 mt-8 font-normal ">
              <span>Ethereum Audit</span>
              <span>Polygon Audit</span>
              <span>BSC Audit</span>
              <span>Solana Audit</span>
              <span>NEAR Audit</span>
              <span>Algorand Audit</span>
              <span>Tezos Audit</span>
              <span>Hyperledger Fabric Audit</span>
              <span>L1 Audit</span>
              <span>Polkadot Audit</span>
              <span>Wallet Audit</span>
              <span>ZkSync Audit</span>
              <span>Starknet Audit</span>
            </div>
          </div>

          <div className="footer__third__col order-3 lg:order-none">
            <span className="footer__col__heading text-base pb-2 border-b-2 border-[#2D83EE] ">
              Quill Ecosystem
            </span>
            <div className="col__links flex flex-col gap-2 mt-8 font-normal ">
              <span>QuillAI</span>
              <span>QuillCheck</span>
              <span>QuillShield</span>
              <span>QuillAcademy</span>
              <span>QuillMonitor</span>
              <span>Web3Suggest</span>
              <span>Explore All Tools</span>
            </div>
          </div>

          {/* Fourth col */}
          <div className="footer__fourth__col order-4 lg:order-none">
            <span className="footer__col__heading text-base pb-2 border-b-2 border-[#2D83EE] ">
              Other Services
            </span>
            <div className="col__links flex flex-col gap-2 mt-8 font-normal ">
              <span>Red Teaming</span>
              <span>dApp Pentesting</span>
              <span>DeFi Diligence</span>
              <span>NFT Due Diligence</span>
              <span>Rug Pull Due Diligence</span>
              <span>Security Consultation</span>
              <span>Blockchain Forensics</span>
              <span>KYC (Know Your Customer)</span>
            </div>
          </div>

          {/* Fifth col */}
          <div className="footer__fifth__col order-5 lg:order-none">
            <span className="footer__col__heading text-base pb-2 border-b-2 border-[#2D83EE] ">
              Quick Links
            </span>
            <div className="col__links flex flex-col gap-2 mt-8 font-normal ">
              <Link href="/">Pricing</Link>
              <Link href="/">Audit Process</Link>
              <Link href="/">Our Audits</Link>
              <Link href="/">Testimonials</Link>
              <Link href="/">Security Synopsis</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Clients</Link>
              <Link href="/">Careers</Link>
            </div>
          </div>

          <div className="footer__cta__buttons col-span-2 mt-56 lg:mt-0  lg:relative lg:order-none md:self-end md:col-start-3 md:col-span-3 md:-translate-y-40">
            <span className="footer__col__heading text-base pb-2 border-b-2 border-[#2D83EE] ">
              Our Programmes
            </span>
            <div className="cta__buttons mt-8 grid gap-4 h-min grid-cols-2 lg:grid-cols-4 text-sm">
              <Button>Refer-Earn-Secure</Button>
              <Button>WAGSI Grants</Button>
              <Button>Ambassador Program</Button>
              <Button>Partnership Program</Button>
            </div>
          </div>
        </div>

        <div className="md:-translate-y-16 lg:-translate-y-24">
          <div className="footer__bottom flex flex-col  md:gap-0 md:flex-row mt-4 md:mt-0 gap-9 justify-between items-center ">
            <div className="footer__images flex items-center gap-4  scale-80 md:scale-100">
              <Image
                width={180}
                height={60}
                src="/images/footer-bottom-1.png"
                alt="Defi Security"
                className="object-contain"
              />
              <Image
                width={180}
                height={60}
                src="/images/footer-bottom-2.png"
                alt="Telegana Govt"
                className="object-contain"
              />
            </div>
            <div className="footer__social flex gap-6 *:cursor-pointer ">
              <TwitterIcon />
              <LinkedInIcon />
              <TelegramIcon />
              <RedditIcon />
              <MediumIcon />
              <DiscordIcon />
              <YoutubeIcon />
            </div>
          </div>

          <div
            className="footer__copyright text-xs text-white mt-8 border-t border-white/10 pt-3 flex 
            flex-col justify-center items-center gap-4
            md:flex-row md:justify-between md:gap-0
          "
          >
            <span className="order-2 md:order-none">
              All Rights Reserved. © Copyright 2023. QuillAudits - LLC
            </span>
            <span className="order-1 md:order-none">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
