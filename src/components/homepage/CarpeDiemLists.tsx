import React from "react";

type Props = {};

export default function CarpeDiemLists({}: Props) {
  return (
    <>
      <h3 className="heading">
        CarpeDiem Pension&apos;s Journey Through our Audit Process
      </h3>

      {/* List 1 */}
      <div className="listContainer mt-6 text-sm md:text-base">
        <p className="heading__list">1. Information Gathering</p>
        <ul role="list" className="list-disc  pl-4 *:mt-4">
          <li>
            Collected and reviewed all relevant documentation, including
            whitepaper, technical specifications, and design documents.
          </li>
          <li>
            Obtained a clear understanding of the CDP platform&apos;s
            functionality, economic model, and intended user interactions.
          </li>
          <li>
            Discussed client concerns and specific areas of focus for the audit.
          </li>
        </ul>
      </div>

      {/* List 2 */}
      <div className="listContainer mt-6">
        <p className="heading__list">2. Manual Code Review:</p>
        <ul role="list" className="list-disc pl-4 *:mt-4">
          <li>
            Conducted a line-by-line review of the smart contract code, focusing
            on:
            <ul role="list" className="pl-8 mt-4 list-[circle]">
              <li>
                Vulnerability identification: Searching for known
                vulnerabilities like reentrancy, front-running, integer
                overflows, and access control issues etc.
              </li>
              <li>
                Logic flaws: Identifying inconsistencies or unintended behaviors
                in the code logic.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* List 3 */}
      <div className="listContainer mt-6">
        <p className="heading__list">3. Functional Testing:</p>
        <ul role="list" className="list-disc pl-4 *:mt-4">
          <li>
            Developed and executed a comprehensive set of test cases covering
            various user interactions and edge cases.
          </li>
          <li>
            Simulated different deposit, claim, and referral scenarios to assess
            functionality and uncover potential exploits.
          </li>
          <li>
            Focused on scenarios identified during the manual review and client
            concerns (e.g., infinite minting, reward calculation errors).
          </li>
          <li>
            Leveraged tools like Hardhat and Ganache to deploy and test the
            smart contract locally.
          </li>
        </ul>
      </div>

      {/* List 4 */}
      <div className="listContainer mt-6">
        <p className="heading__list">4. Automated Testing:</p>
        <ul role="list" className="list-disc pl-4 *:mt-4">
          <li>
            Employed static analysis tools like Slither to identify
            vulnerabilities through automated code scanning.
          </li>
          <li>
            Utilized symbolic execution tools like Mythril to explore various
            code execution paths and uncover potential attack vectors.
          </li>
          <li>
            Integrated unit tests are written by the CDP team to verify specific
            contract functions and their behaviour.
          </li>
        </ul>
      </div>

      {/* List 5 */}
      <div className="listContainer mt-6">
        <p className="heading__list">5. Reporting & Remediation:</p>
        <ul role="list" className="list-disc pl-4 *:mt-4">
          <li>
            Prepared a detailed report outlining all identified vulnerabilities,
            categorized by severity and potential impact.
          </li>
          <li>
            Provided clear recommendations for fixing each vulnerability,
            including code snippets and best practices.
          </li>
          <li>
            Collaborated with the CDP team to prioritize and address the
            identified issues.
          </li>
          <li>
            Conducted additional verification testing after vulnerability fixes
            were implemented.
          </li>
        </ul>
      </div>
    </>
  );
}
