import React from "react";
import DetailContainer from "./DetailContainer";

type Props = {};

export default function CarpeDiemDetails({}: Props) {
  return (
    <section className="space-y-12">
      <DetailContainer
        image="/images/carpe-diem.png"
        alt="Carpe Diem image"
        heading="CarpeDiem Pension's Flexible, Blockchain-Enabled Future"
        content="   CarpeDiem Pension redefines retirement planning with a unique approach
        that deviates from traditional pension funds. With no minimum age for
        retirement, it offers flexibility and freedom, ensuring all genders
        receive equal treatment. CarpeDiem Pension ensures blockchain
        transparency, anonymity, and global accessibility, safeguarding
        pensions during international relocation. Easily transfer pensions to
        loved ones; share wallet access. Re-deposit payouts for increased
        future benefits. Importantly, CarpeDiem Pension prioritizes deposit
        security by avoiding utilizing client funds for internal investments.
        To become a part of this forward-thinking pension scheme, one simply
        needs to install and configure a blockchain wallet."
      />
      <DetailContainer
        heading="CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting"
        content="CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension."
        image="/images/pension-funds.png"
        alt="Pension Funds"
      />
    </section>
  );
}
