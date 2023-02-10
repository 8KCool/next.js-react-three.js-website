import { ReactNode } from 'react'
import React, { lazy, Suspense } from 'react'
const GlobalLayout = lazy(() => import('../components/layouts/GlobalLayout'))
import { SEO } from '../components/shared/SEO'
import { PolicyPoint } from './../components/privacy-policy/PolicyPoint'
import { PolicyTitle } from './../components/privacy-policy/PolicyTitle'
import { ThemeProvider } from 'next-themes'

interface PrivacyPolicyProps {
  children?: ReactNode
}

const PURPOSES = [
  'The personal data we will collect;',
  'Use of collected data;',
  'Who has access to the data collected;',
  'The rights of Site users; and',
  "The Site's cookie policy.",
]

const AUTO_COLLECTED_DATA = [
  'IP address;',
  'Location;',
  'Clicked links; and',
  'Content viewed.',
]

const NON_AUTO_COLLECTED_DATA = [
  'First and last name;',
  'Email address;',
  'Phone number;',
  'Address;',
  'Payment information; and',
  'Auto fill data.',
]

const OTHER_DISCLOSURES = [
  'If the law requires it;',
  'If it is required for any legal proceeding;',
  'To prove or protect our legal rights; and',
  'To buyers or potential buyers of this company in the event that we seek to sell the company.',
]

const YOUR_RIGHTS = [
  'Right to be informed;',
  'Right of access;',
  'Right to rectification;',
  'Right to erasure;',
  'Right to restrict processing;',
  'Right to data portability; and',
  'Right to object.',
]

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <>
        <SEO title="Privacy Policy" description="Trigan Privacy Policy" />
        <GlobalLayout>
          <section className="py-5 text-justify bg-black bg-opacity-30">
            <div className="text-white text-center">
              <h2 className="text-xl font-semibold">
                trigan.org Privacy Policy
              </h2>
              <div className="text-white py-4">
                <p className="">Type of website: Ecommerce</p>
                <p className="">Effective date: 4th day of January, 2023</p>
              </div>
            </div>

            <div className="text-white mx-auto mt-5 max-w-4xl">
              {/* contact starts */}
              <p>
                trigan.org (the &quot;Site&ldquo;) is owned and operated by
                Trigan LTD. Trigan LTD is the data controller and can be
                contacted at:
              </p>
              <p className="my-5">contact@trigan.org</p>
              <div className="text-white w-1/2 border border-b border-white" />
              <p>9 Watling Street, Dumfries, Dumfries and Galloway, DG1 1HF</p>
              {/* contact ends */}

              {/*purpose starts*/}
              <div className="text-white my-2">
                <PolicyTitle title="Purpose" />
                <h6>
                  The purpose of this privacy policy (this &#34;Privacy
                  Policy&#34;) is to inform users of our Site of the following:
                </h6>
                {PURPOSES.map((purpose) => {
                  return <PolicyPoint key={purpose} content={purpose} />
                })}
                <p className="my-2">
                  This Privacy Policy applies in addition to the terms and
                  conditions of our Site.
                </p>
              </div>
              {/*purpose ends*/}

              {/*GDPR starts*/}
              <div className="text-white my-2">
                <PolicyTitle title="GDPR" />
                <p>
                  For users in the European Union, we adhere to the Regulation
                  (EU) 2016/679 of the European Parliament and of the Council of
                  27 April 2016, known as the General Data Protection Regulation
                  (the &#34;GDPR&#34;). For users in the United Kingdom, we
                  adhere to the GDPR as enshrined in the Data Protection Act
                  2018.
                </p>
                <br />
                <p>
                  We have not appointed a Data Protection Officer as we do not
                  fall within the categories of controllers and processors
                  required to appoint a Data Protection Officer under Article 37
                  of the GDPR.
                </p>
              </div>
              {/*GDPR ends*/}

              {/*Consent starts*/}
              <div className="text-white my-2">
                <PolicyTitle title="Consent" />
                <h2>By using our Site users agree that they consent to:</h2>
                <PolicyPoint content="1. The conditions set out in this Privacy Policy." />
                <p>
                  When the legal basis for us processing your personal data is
                  that you have provided your consent to that processing, you
                  may withdraw your consent at any time. If you withdraw your
                  consent, it will not make processing which we completed before
                  you withdrew your consent unlawful.
                </p>
                <br />
                <p>
                  You can withdraw your consent by: Contacting the Data
                  Protection Officer.
                </p>
              </div>
              {/*Consent ends*/}

              {/* Legal Basis starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Legal Basis for Processing" />
                <h2>
                  We collect and process personal data about users in the EU
                  only when we have a legal basis for doing so under Article 6
                  of the GDPR.
                </h2>
                <br />
                <p>
                  We rely on the following legal bases to collect and process
                  the personal data of users in the EU:
                </p>
                <PolicyPoint content="1. Users have provided their consent to the processing of their data for one or more specific purposes; and" />
                <PolicyPoint content="2. Processing of user personal data is necessary for us to take, at the request of a user, steps before entering a contract or for the performance of a contract to which a user is a party. If a user does not provide the the personal data necessary to perform a contract the consequences are as follows: Personal data is only required when necessary for service or order provision. Failure to provide such data when requested, will result in failure to complete provision of the service or order." />
              </div>
              {/* Legal Basis ends */}

              {/* data we collect starts */}
              <div className="text-white my-2 font-normal">
                <PolicyTitle title="Personal Data We Collect" />
                <h2>
                  We only collect data that helps us achieve the purpose set out
                  in this Privacy Policy. We will not collect any additional
                  data beyond the data listed below without notifying you first.
                </h2>

                <PolicyTitle title="Data Collected Automatically" not-bold />
                {AUTO_COLLECTED_DATA.map((data, index) => {
                  return (
                    <PolicyPoint key={data} content={`${index + 1}. ${data}`} />
                  )
                })}

                <PolicyTitle
                  title="Data Collected in a Non-Automatic Way"
                  not-bold
                />
                {NON_AUTO_COLLECTED_DATA.map((data, index) => {
                  return (
                    <PolicyPoint key={data} content={`${index + 1}. ${data}`} />
                  )
                })}

                <br />
                <h2>This data may be collected using the following methods:</h2>
                <PolicyPoint content="1. Creating an account or when processing an order." />
              </div>
              {/* data we collect ends */}

              {/* how we use data starts */}
              <div className="text-white my-2">
                <PolicyTitle title="How We Use Personal Data" />
                <h2>
                  Data collected on our Site will only be used for the purposes
                  specified in this Privacy Policy or indicated on the relevant
                  pages of our Site. We will not use your data beyond what we
                  disclose in this Privacy Policy.
                </h2>
                <br />

                <h2>
                  The data we collect automatically is used for the following
                  purposes:
                </h2>
                <PolicyPoint content="1. Statistics" />
                <h2>
                  The data we collect when the user performs certain functions
                  may be used for the following purposes:
                </h2>
                <PolicyPoint content="1. Order provision and communication." />
              </div>
              {/* how we use data ends */}

              {/* who we share data with starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Who We Share Personal Data With" />
                <br />
                <PolicyTitle title="Employees" not-bold />
                <p>
                  We may disclose user data to any member of our organisation
                  who reasonably needs access to user data to achieve the
                  purposes set out in this Privacy Policy.
                </p>
                <PolicyTitle title="Other Disclosures" not-bold />
                <p>
                  We will not sell or share your data with other third parties,
                  except in the following cases:
                </p>

                {OTHER_DISCLOSURES.map((data, index) => {
                  return (
                    <PolicyPoint key={data} content={`${index + 1}. ${data}`} />
                  )
                })}
                <p>
                  If you follow hyperlinks from our Site to another Site, please
                  note that we are not responsible for and have no control over
                  their privacy policies and practices.
                </p>
                <br />
              </div>
              {/* who we share data with ends */}

              {/* how long we store data with starts */}
              <div className="text-white my-2">
                <PolicyTitle title="How Long We Store Personal Data" />
                <p>
                  User data will be stored until the purpose the data was
                  collected for has been achieved.
                </p>
                <br />
                <p>
                  You will be notified if your data is kept for longer than this
                  period.
                </p>
              </div>
              {/* how long we store data with ends */}

              {/* how we protect data with starts */}
              <div className="text-white my-2">
                <PolicyTitle title="How We Protect Your Personal Data" />
                <p>
                  In order to protect your security, we implement SSL
                  certification across all of our sites and servers. All of our
                  data are stored on servers in secure facilities. All data are
                  only accessible to our employees. Our employees are bound by
                  strict confidentiality agreements and a breach of this
                  agreement would result in the employee&#39;s termination.
                </p>
                <br />
                <p>
                  While we take all reasonable precautions to ensure that user
                  data is secure and that users are protected, there always
                  remains the risk of harm. The Internet as a whole can be
                  insecure at times and therefore we are unable to guarantee the
                  security of user data beyond what is reasonably practical.
                </p>
              </div>
              {/* how we protect data with ends */}

              {/* international data transfer starts */}
              <div className="text-white my-2">
                <PolicyTitle title="International Data Transfers" />
                <p>
                  We transfer user personal data to the following countries:
                </p>
                <PolicyPoint content="1. United States; and" />
                <PolicyPoint content="2. United Kingdom." />
                <p>
                  When we transfer user personal data we will protect that data
                  as described in this Privacy Policy and comply with applicable
                  legal requirements for transferring personal data
                  internationally.
                </p>
                <br />
                <p>
                  If you are located in the United Kingdom or the European
                  Union, we will only transfer your personal data if:
                </p>
                <PolicyPoint content="1. The country your personal data is being transferred to has been deemed to have adequate data protection by the European Commission or, if you are in the United Kingdom, by the United Kingdom adequacy regulations; or" />
                <PolicyPoint content="2. We have implemented appropriate safeguards in respect of the transfer. For example, the recipient is a party to binding corporate rules, or we have entered into standard EU or United Kingdom data protection contractual clauses with the recipient." />
              </div>
              {/* international data transfer ends */}

              {/* your rights as user starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Your Rights as a User" />
                <p>Under the GDPR, you have the following rights:</p>
                {YOUR_RIGHTS.map((data, index) => {
                  return (
                    <PolicyPoint key={data} content={`${index + 1}. ${data}`} />
                  )
                })}
              </div>
              {/* your rights as user ends */}

              {/* children starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Children" />
                <p>
                  The minimum age to use our website is 18 years of age. We do
                  not knowingly collect or use personal data from children under
                  16 years of age. If we learn that we have collected personal
                  data from a child under 16 years of age, the personal data
                  will be deleted as soon as possible. If a child under 16 years
                  of age has provided us with personal data their parent or
                  guardian may contact our privacy officer.
                </p>
              </div>
              {/* children ends */}

              {/* access the data starts */}
              <div className="text-white my-2">
                <PolicyTitle title="How to Access, Modify, Delete, or Challenge the Data Collected" />
                <p>
                  If you would like to know if we have collected your personal
                  data, how we have used your personal data, if we have
                  disclosed your personal data and to who we disclosed your
                  personal data, if you would like your data to be deleted or
                  modified in any way, or if you would like to exercise any of
                  your other rights under the GDPR, please contact our privacy
                  officer here:
                </p>
                <br />
                <p>Aaron Sarginson</p>
                <p>aaron@thesmartest.city</p>
                <p>07745 669953</p>
                <p>
                  9 Watling Street, Dumfries, Dumfries and Galloway, DG1 1HF
                </p>
              </div>
              {/* access the data ends */}

              {/* do not track starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Do Not Track Notice" />
                <p>
                  Do Not Track (&#34;DNT&#34;) is a privacy preference that you
                  can set in certain web browsers. We do not track the users of
                  our Site over time and across third party websites and
                  therefore do not respond to browser-initiated DNT signals.
                </p>
              </div>
              {/* do not track ends */}

              {/* how to opt-out starts */}
              <div className="text-white my-2">
                <PolicyTitle title="How to Opt-Out of Data Collection, Use or Disclosure" />
                <p>
                  In addition to the method(s) described in the How to Access,
                  Modify, Delete, or Challenge the Data Collected section, we
                  provide the following specific opt-out methods for the forms
                  of collection, use, or disclosure of your personal data
                  specified below:
                </p>
                <PolicyPoint content='1. You can opt-out of the use of your personal data for marketing emails. You can opt-out by clicking "unsubscribe" on the bottom of any marketing email or updating your email preferences under "Your Account"' />
              </div>
              {/* how to opt-out ends */}

              {/* cookie policy starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Cookie Policy" />
                <p>
                  A cookie is a small file, stored on a user&#39;s hard drive by
                  a website. Its purpose is to collect data relating to the
                  user&#39;s browsing habits. You can choose to be notified each
                  time a cookie is transmitted. You can also choose to disable
                  cookies entirely in your internet browser, but this may
                  decrease the quality of your user experience.
                </p>
                <br />
                <p>We use the following types of cookies on our Site:</p>
                <br />
                <h2 className="ml-5">
                  1. <span className="underline">Functional cookies</span>
                </h2>
                <p className="ml-5">
                  Functional cookies are used to remember the selections you
                  make on our Site so that your selections are saved for your
                  next visits; and
                </p>
                <br />
                <h2 className="ml-5">
                  2. <span className="underline">Analytical cookies</span>
                </h2>
                <p className="ml-5">
                  Analytical cookies allow us to improve the design and
                  functionality of our Site by collecting data on how you access
                  our Site, for example data on the content you access, how long
                  you stay on our Site, etc.
                </p>
              </div>
              {/* cookie policy ends */}

              {/* modification starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Modifications" />
                <p>
                  This Privacy Policy may be amended from time to time in order
                  to maintain compliance with the law and to reflect any changes
                  to our data collection process. When we amend this Privacy
                  Policy we will update the &#34;Effective Date&#34; at the top
                  of this Privacy Policy. We recommend that our users
                  periodically review our Privacy Policy to ensure that they are
                  notified of any updates. If necessary, we may notify users by
                  email of changes to this Privacy Policy.
                </p>
              </div>
              {/* modification ends */}

              {/* Complaints starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Complaints" />
                <p>
                  If you have any complaints about how we process your personal
                  data, please contact us through the contact methods listed in
                  the Contact Information section so that we can, where
                  possible, resolve the issue. If you feel we have not addressed
                  your concern in a satisfactory manner you may contact a
                  supervisory authority. You also have the right to directly
                  make a complaint to a supervisory authority. You can lodge a
                  complaint with a supervisory authority by contacting the
                  Information Commissioner&#39;s Office in the UK.
                </p>
              </div>
              {/* Complaints ends */}

              {/* Contact Information starts */}
              <div className="text-white my-2">
                <PolicyTitle title="Contact Information" />
                <p>
                  If you have any questions, concerns or complaints, you can
                  contact our privacy officer, Aaron Sarginson, at:
                </p>
                <br />
                <p>aaron@trigan.org</p>
                <p>+44 7745 669953</p>
                <p>
                  9 Watling Street, Dumfries, Dumfries and Galloway, DG1 1HF
                </p>
              </div>
              {/* Contact Information ends */}
            </div>
          </section>
        </GlobalLayout>
      </>
    </ThemeProvider>
  )
}

export default PrivacyPolicy
