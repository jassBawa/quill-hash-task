import React from "react";

type Props = {};

export default function QuillComparison({}: Props) {
  return (
    <div className="max-w-[80%] relative flex flex-col md:flex-row justify-between gap-8 items-center mx-auto quill__comparison">
      <div className="camparison__before flex-1">
        <p className="comparison__heading font-semibold bg-[#FFABC9]">
          Before QuillAudits
        </p>
        <div className="comparision__content mt-4 text-sm space-y-4">
          <p>
            Exploits like reentrancy and front-running can let attackers
            withdraw extra funds and manipulate transaction timing for unfair
            gains
          </p>
          <p>
            Vulnerabilities could allow users to mint CDP tokens or pension
            shares indefinitely, disrupting the system&apos;s economic balance.
          </p>
        </div>
      </div>
      <div className="comarision__divider hidden md:block h-48 w-[1px] bg-[#E0E0E4]" />
      <div className="camparison__after flex-1 ">
        <p className="comparison__heading  font-semibold bg-[#ABCDFF]">
          After QuillAudits
        </p>
        <div className="comparision__content mt-4 text-sm space-y-4">
          <p>Implementation of reentrancy protection mechanisms.</p>
          <p>
            Ensure precision in decimal handling with standard libraries,
            recalculate accurately, fix logic errors, and secure referral
            systems against exploitation.
          </p>
        </div>
      </div>
    </div>
  );
}
