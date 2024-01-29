import Header from '@/components/Header'

const PrivacyPage = () => {
  return (
    <main className="min-h-screen flex">
      <div className="flex-1 flex flex-col content">
        <Header />
        <div className="container w-screen min-h-screen flex flex-col mx-auto py-10 md:py-20 gap-12 px-4 md:px-0">
          <h1 className="text-center text-4xl">Privacy Policy</h1>
          <div className="flex flex-col gap-4">
            <p>
              Germlab built the Veso app as a Free app. This SERVICE is provided by Germlab at no
              cost and is intended for use as is.
            </p>
            <p>
              This page is used to inform visitors regarding my policies with the collection, use,
              and disclosure of Personal Information if anyone decided to use my Service.
            </p>
            <p>
              If you choose to use my Service, then you agree to the collection and use of
              information in relation to this policy. The Personal Information that I collect is
              used for providing and improving the Service. I will not use or share your information
              with anyone except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in our Terms and
              Conditions, which are accessible at Veso unless otherwise defined in this Privacy
              Policy.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Information Collection and Use</h2>
            <p>
              While using Our Application, in order to provide features of Our Application, We may
              collect, with Your prior permission:
            </p>
            <ul className="li list-disc pl-8 py-4">
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Pictures and other information from your Device&apos;s camera and photo library
                </a>
              </li>
            </ul>
            <p>
              We use this information to provide features of Our Service, to improve and customize
              Our Service. The information may be uploaded to the Company&apos;s servers and/or a
              Service Provider&apos;s server or it may be simply stored on Your device.
            </p>
            <p>
              You can enable or disable access to this information at any time, through Your Device
              settings.
            </p>
            <div>
              <p>
                The app does use third-party services that may collect information used to identify
                you.
              </p>
              <p>Link to the privacy policy of third-party service providers used by the app:</p>
              <ul className="li list-disc pl-8 py-4">
                <li>
                  <a
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Google Play Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Log Data</h2>
            <p>
              I want to inform you that whenever you use my Service, in a case of an error in the
              app I collect data and information (through third-party products) on your phone called
              Log Data. This Log Data may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the configuration of the app
              when utilizing my Service, the time and date of your use of the Service, and other
              statistics.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Cookies</h2>
            <p>
              Cookies are files with a small amount of data that are commonly used as anonymous
              unique identifiers. These are sent to your browser from the websites that you visit
              and are stored on your device’s internal memory.
            </p>
            <p>
              This Service does not use these “cookies” explicitly. However, the app may use
              third-party code and libraries that use “cookies” to collect information and improve
              their services. You have the option to either accept or refuse these cookies and know
              when a cookie is being sent to your device. If you choose to refuse our cookies, you
              may not be able to use some portions of this Service.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Service Providers</h2>
            <p>I may employ third-party companies and individuals due to the following reasons:</p>
            <ul>
              <li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
              I want to inform users of this Service that these third parties have access to their
              Personal Information. The reason is to perform the tasks assigned to them on our
              behalf. However, they are obligated not to disclose or use the information for any
              other purpose.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Security</h2>
            <p>
              I value your trust in providing us your Personal Information, thus we are striving to
              use commercially acceptable means of protecting it. But remember that no method of
              transmission over the internet, or method of electronic storage is 100% secure and
              reliable, and I cannot guarantee its absolute security.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Links to Other Sites</h2>
            <p>
              This Service may contain links to other sites. If you click on a third-party link, you
              will be directed to that site. Note that these external sites are not operated by me.
              Therefore, I strongly advise you to review the Privacy Policy of these websites. I
              have no control over and assume no responsibility for the content, privacy policies,
              or practices of any third-party sites or services.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Children’s Privacy</h2>

            <p>
              These Services do not address anyone under the age of 13. I do not knowingly collect
              personally identifiable information from children under 13 years of age. In the case I
              discover that a child under 13 has provided me with personal information, I
              immediately delete this from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information, please contact me so
              that I will be able to do the necessary actions.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Changes to This Privacy Policy</h2>
            <p>
              I may update our Privacy Policy from time to time. Thus, you are advised to review
              this page periodically for any changes. I will notify you of any changes by posting
              the new Privacy Policy on this page.
            </p>
          </div>
          <div>
            <i>This policy is effective as of 2023-12-10</i>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p>
              If you have any questions or suggestions about my Privacy Policy, do not hesitate to
              contact me at{' '}
              <a className="text-accent underline" href="mailto://phucloc8697@gmail.com">
                phucloc8697@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPage
