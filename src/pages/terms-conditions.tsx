import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { TermPoint } from '../components/terms-conditions/TermPoint'
import { TermTitle } from '../components/terms-conditions/TermTitle'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { ThemeProvider } from 'next-themes'

interface TermsAndConditionsProps {
  children?: ReactNode
}

const USER_CONTRIBUTIONS = ['Photos', 'Videos; and', 'Public comments.']

const PAYMENTS = [
  'Credit Card;',
  'PayPal;',
  'Debit;',
  'Direct Debit; and',
  'Cryptocurrency.',
]

const RIGHT_TO_CANCEL_DOES_NOT_APPLY_OPTIONS = [
  'Goods or services, other than the supply of water, gas, electricity, or district heating, where the price depends upon fluctuations in the financial market that we cannot control and that may occur during the cancellation period;',
  'Custom or personalised goods;',
  'Goods that will deteriorate or expire rapidly;',
  'Services that the customer has requested for the purpose of carrying out urgent repairs or maintenance;',
  'Newspapers, magazines, or periodicals, except for subscriptions to such publications; and',
  'Accommodation, transport of goods, vehicle rental services, catering, or services related to leisure activities, if the contract includes a specific date or period of performance.',
]

const TermsAndConditions: React.FC<TermsAndConditionsProps> = () => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <>
        <SEO
          title="Terms & Conditions"
          description="Trigan Terms & Conditions"
        />
        <GlobalLayout>
          <section className="text-justify">
            <div className="py-5 text-center">
              <h2 className="text-xl font-semibold underline">
                TERMS AND CONDITIONS
              </h2>
            </div>

            <div className="mx-auto max-w-4xl py-5">
              <p className="py-2">
                These terms and conditions (the &#34;Terms and Conditions&#34;)
                govern the use of trigan.org (the &#34;Site&#34;). This Site is
                owned and operated by Trigan LTD. This Site is an ecommerce
                website.
              </p>
              <p className="py-5">
                By using this Site, you indicate that you have read and
                understand these Terms and Conditions and agree to abide by them
                at all times.
              </p>

              {/* Intellectual Property starts */}
              <div className="py-2">
                <TermTitle title="Intellectual Property" />
                <p>
                  All content published and made available on our Site is the
                  property of Trigan LTD and the Site&#39;s creators. This
                  includes, but is not limited to images, text, logos,
                  documents, downloadable files and anything that contributes to
                  the composition of our Site.
                </p>
              </div>
              {/* Intellectual Property ends */}

              {/* Age Restrictions starts */}
              <div className="py-2">
                <TermTitle title="Age Restrictions" />
                <p>
                  The minimum age to use our Site is 18 years old. By using this
                  Site, users agree that they are over 18 years old. We do not
                  assume any legal responsibility for false statements about
                  age.
                </p>
              </div>
              {/* Age Restrictions ends */}

              {/* User Contributions starts */}
              <div className="py-2">
                <TermTitle title="User Contributions" />
                <p>Users may post the following information on our Site:</p>
                {USER_CONTRIBUTIONS.map((contribution, i) => {
                  return (
                    <TermPoint
                      key={contribution}
                      content={`${i + 1}. ${contribution}`}
                    />
                  )
                })}
                <p className="py-2">
                  By posting publicly on our Site, you agree not to act
                  illegally or violate these Terms and Conditions.
                </p>
              </div>
              {/* User Contributions ends */}

              {/* Accounts starts */}
              <div className="py-2">
                <TermTitle title="Accounts" />
                <p>
                  When you create an account on our Site, you agree to the
                  following:
                </p>
                <TermPoint content="1. You are solely responsible for your account and the security and privacy of your account, including passwords or sensitive information attached to that account; and" />
                <TermPoint content="2. All personal information you provide to us through your account is up to date, accurate, and truthful and that you will update your personal information if it changes." />
                <p className="py-2">
                  We reserve the right to suspend or terminate your account if
                  you are using our Site illegally or if you violate these Terms
                  and Conditions.
                </p>
              </div>
              {/* Accounts ends */}

              {/* Sale of Goods And Services starts */}
              <div className="py-2">
                <TermTitle title="Sale of Goods And Services" />
                <p>
                  These Terms and Conditions govern the sale of goods and
                  services available on our Site.
                </p>
                <p className="py-2">
                  The following goods are available on our Site:
                </p>
                <TermPoint content="1. Coins." />
                <p className="py-2">
                  We are under a legal duty to supply goods that match the
                  description of the good(s) you order on our Site.
                </p>
                <p className="py-2">
                  The following services are available on our Site:
                </p>
                <TermPoint content="1. Blockchain related services." />
                <p className="py-2">
                  The services will be paid for in full when the services are
                  ordered.
                </p>
                <p className="py-2">
                  These Terms and Conditions apply to all the goods and services
                  that are displayed on our Site at the time you access it. This
                  includes all products listed as being out of stock. All
                  information, descriptions, or images that we provide about our
                  goods and services are as accurate as possible. However, we
                  are not legally bound by such information, descriptions, or
                  images as we cannot guarantee the accuracy of all goods and
                  services we provide. You agree to purchase goods and services
                  from our Site at your own risk.
                </p>
                <p className="py-2">
                  We reserve the right to modify, reject or cancel your order
                  whenever it becomes necessary. If we cancel your order and
                  have already processed your payment, we will give you a refund
                  equal to the amount you paid. You agree that it is your
                  responsibility to monitor your payment instrument to verify
                  receipt of any refund.
                </p>
              </div>
              {/* Sale of Goods And Services ends */}

              {/* User Goods and Services starts */}
              <div className="py-2">
                <TermTitle title="User Goods and Services" />
                <p>
                  Our Site allows users to sell goods and services. We do not
                  assume any responsibility for the goods and services users
                  sell on our Site. We cannot guarantee the quality or accuracy
                  of any goods and services sold by users on our Site. However,
                  if we are made aware that a user is violating these Terms and
                  Conditions, we reserve the right to suspend or prohibit the
                  user from selling goods and services on our Site.
                </p>
              </div>
              {/* User Goods and Services ends */}

              {/* Payments starts */}
              <div className="py-2">
                <TermTitle title="Payments" />
                <p>We accept the following payment methods on our Site:</p>
                {/* <template v-for="(payment, i) in payments" :key="i">
          <TermPoint
              :content="i + 1 + '. ' + payment"/>
        </template> */}
                {PAYMENTS.map((payment, i) => {
                  return (
                    <TermPoint key={payment} content={`${i + 1}. ${payment}`} />
                  )
                })}
                <p className="py-2">
                  When you provide us with your payment information, you
                  authorise our use of and access to the payment instrument you
                  have chosen to use. By providing us with your payment
                  information, you authorise us to charge the amount due to this
                  payment instrument.
                </p>
                <p className="py-2">
                  If we believe your payment has violated any law or these Terms
                  and Conditions, we reserve the right to cancel or reverse your
                  transaction.
                </p>
              </div>
              {/* Payments ends */}

              {/* Right to Cancel and Receive Reimbursement starts */}
              <div className="py-2">
                <TermTitle title="Right to Cancel and Receive Reimbursement" />
                <p>
                  If you are a customer living in the United Kingdom or the
                  European Union you have the right to cancel your contract to
                  purchase goods and services from us within 14 days without
                  giving notice. The cancellation period:
                </p>
                <TermPoint content="1. Will end 14 days from the date of purchase when you purchased digital content that was not supplied on a tangible medium; or" />
                <TermPoint content="2. Will end 14 days from the date of purchase when you purchased a service." />
                <p className="py-2">
                  To exercise your right to cancel you must inform us of your
                  decision to cancel within the cancellation period. To cancel,
                  contact us by email at contact@trigan.org or by post at 9
                  Watling Street, Dumfries, Dumfries and Galloway, DG1 1HF. You
                  may use a copy of the Cancellation Form, found at the end of
                  these Terms and Conditions, but you are not required to do so.
                </p>
                <p className="py-2">The right to cancel does not apply to:</p>
                {RIGHT_TO_CANCEL_DOES_NOT_APPLY_OPTIONS.map((option, i) => {
                  return (
                    <TermPoint key={option} content={`${i + 1}. ${option}`} />
                  )
                })}
              </div>
              {/* Right to Cancel and Receive Reimbursement ends */}

              {/* Effects of Cancellation starts */}
              <div className="py-2">
                <TermTitle not-bold title="Effects of Cancellation" />
                <p>
                  If you requested the performance of services begin during the
                  cancellation period, you are required to pay us an amount
                  which is in proportion to what has been performed until you
                  have communicated to us your decision to cancel this contract.
                  We will reimburse to you any amount you have paid above this
                  proportionate payment.
                </p>
                <p className="py-2">
                  If you provide express consent to the supply of digital
                  content during the cancellation period and acknowledge that
                  your right to cancel the contract is lost by the supply of
                  digital content during the cancellation period, you will no
                  longer have a right to cancel the contract.
                </p>
                <p className="py-2">
                  We will make the reimbursement using the same form of payment
                  as you used for the initial purchase unless you have expressly
                  agreed otherwise. You will not incur any fees because of the
                  reimbursement.
                </p>
                <p className="py-2">
                  This right to cancel and to reimbursement is not affected by
                  any return or refund policy we may have.
                </p>
              </div>
              {/* Effects of Cancellation ends */}

              {/* Consumer Protection Law starts */}
              <div className="py-2">
                <TermTitle not-bold title="Consumer Protection Law" />
                <p>
                  Where the Sale of Goods Act 1979, the Consumer Rights Act
                  2015, or any other consumer protection legislation in your
                  jurisdiction applies and cannot be excluded, these Terms and
                  Conditions will not limit your legal rights and remedies under
                  that legislation. These Terms and Conditions will be read
                  subject to the mandatory provisions of that legislation. If
                  there is a conflict between these Terms and Conditions and
                  that legislation, the mandatory provisions of the legislation
                  will apply.
                </p>
              </div>
              {/* Consumer Protection Law ends */}

              {/* Limitation of Liability starts */}
              <div className="py-2">
                <TermTitle not-bold title="Limitation of Liability" />
                <p>
                  Trigan LTD and our directors, officers, agents, employees,
                  subsidiaries, and affiliates will not be liable for any
                  actions, claims, losses, damages, liabilities and expenses
                  including legal fees from your use of the Site.
                </p>
              </div>
              {/* Limitation of Liability ends */}

              {/* Indemnity starts */}
              <div className="py-2">
                <TermTitle not-bold title="Indemnity" />
                <p>
                  Except where prohibited by law, by using this Site you
                  indemnify and hold harmless Trigan LTD and our directors,
                  officers, agents, employees, subsidiaries, and affiliates from
                  any actions, claims, losses, damages, liabilities and expenses
                  including legal fees arising out of your use of our Site or
                  your violation of these Terms and Conditions.
                </p>
              </div>
              {/* Indemnity ends */}

              {/* Applicable Law starts */}
              <div className="py-2">
                <TermTitle not-bold title="Applicable Law" />
                <p>
                  These Terms and Conditions are governed by the laws of the
                  Country of Scotland.
                </p>
              </div>
              {/* Applicable Law ends */}

              {/* Severability starts */}
              <div className="py-2">
                <TermTitle not-bold title="Severability" />
                <p>
                  If at any time any of the provisions set forth in these Terms
                  and Conditions are found to be inconsistent or invalid under
                  applicable laws, those provisions will be deemed void and will
                  be removed from these Terms and Conditions. All other
                  provisions will not be affected by the removal and the rest of
                  these Terms and Conditions will still be considered valid.
                </p>
              </div>
              {/* Severability ends */}

              {/* Changes starts */}
              <div className="py-2">
                <TermTitle not-bold title="Changes" />
                <p>
                  These Terms and Conditions may be amended from time to time in
                  order to maintain compliance with the law and to reflect any
                  changes to the way we operate our Site and the way we expect
                  users to behave on our Site. We will notify users by email of
                  changes to these Terms and Conditions or post a notice on our
                  Site.
                </p>
              </div>
              {/* Changes ends */}

              {/* Contact Details starts */}
              <div className="py-2">
                <TermTitle not-bold title="Contact Details" />
                <p>
                  Please contact us if you have any questions or concerns. Our
                  contact details are as follows:
                </p>
              </div>
              {/* Contact Details ends */}

              {/* Signature section starts */}
              <div className="py-5">
                <div className="w-1/3 border border-white" />
                <p>contact@trigan.org</p>
                <p>
                  9 Watling Street, Dumfries, Dumfries and Galloway, DG1 1HF
                </p>
                <p className="py-4">
                  You can also contact us through the feedback form available on
                  our Site.
                </p>
              </div>
              {/* Signature section ends */}

              <p className="py-2 text-right">
                Effective Date: 17th day of January, 2022
              </p>

              {/* Cancellation Form begins */}
              <div className="py-5">
                <h6 className="text-xl font-semibold">Cancellation Form</h6>
                <p className="py-2">
                  If you want to cancel your contract of sale with us you may
                  use this form and email or post it back to us at the address
                  below.
                </p>
                <div className="py-4">
                  <p>To: trigan.org</p>
                  <p>
                    Address: 9 Watling Street, Dumfries, Dumfries and Galloway,
                    DG1 1HF
                  </p>
                  <p>Email: contact@trigan.org</p>
                </div>
                <p className="py-2">
                  I hereby give notice that I cancel my contract of sale of the
                  following goods or services:
                </p>
                <div className="my-2 w-full border border-white" />

                <div className="space-y-4 py-5">
                  <div className="flex space-x-2">
                    <p>Ordered on:</p>
                    <div className="mb-1 w-1/3 border-b border-white" />
                  </div>

                  <div className="flex space-x-2">
                    <p>Received on:</p>
                    <div className="mb-1 w-1/3 border-b border-white" />
                  </div>

                  <div className="flex space-x-2">
                    <p>Customer address:</p>
                    <div className="mb-1 w-1/3 border-b border-white" />
                  </div>

                  <p className="py-2">
                    Signature (only required if you are returning a hardcopy of
                    this form ):
                  </p>
                  <div className="w-1/2 border-b border-white pt-5" />

                  <div className="flex space-x-2 py-4">
                    <p>Date:</p>
                    <div className="mb-1 w-1/3 border-b border-white" />
                  </div>
                </div>
              </div>
              {/* Cancellation Form ends */}
            </div>
          </section>
        </GlobalLayout>
      </>
    </ThemeProvider>
  )
}

export default TermsAndConditions
