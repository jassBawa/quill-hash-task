import React from "react";
import ComprehensiveListItem from "./ComprehensiveListItem";

type Props = {};

export default function ComprehensiveAudit({}: Props) {
  return (
    <div className="comprehensive__list mt-8">
      <h3 className="heading ">
        Comprehensive Audit Discoveries and Remediation Strategies
      </h3>
      <p className="mt-4 leading-relaxed">
        Throughout the audit process, we unearthed a total of 33 issues,
        spanning from minor concerns to critical vulnerabilities. Among these,
        some of the critical issues identified were: Here's how we remediated
        them :
      </p>
      <ComprehensiveListItem
        heading="1. Unauthorized Claim/Compound:"
        content="a. Users could claim/compound a substantial amount without
    making a deposit or waiting for the stipulated time."
      />
      <ComprehensiveListItem
        heading="2. Precision Loss in mintCDP():"
        content="a. Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function."
      />

      <ComprehensiveListItem
        heading="3. Multiplication Accuracy:"
        content="a. Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations."
      />

      <ComprehensiveListItem
        heading="4. Incorrect Share Allocation:"
        content="a. The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources."
      />

      <ComprehensiveListItem
        heading="5. Logic Error in Referral Handling:"
        content="a. A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system"
      />

      <ComprehensiveListItem
        heading="6. Referral Exploitation:"
        content="a. Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity."
      />
    </div>
  );
}
