import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "This is TOS Page",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                  {/* <h2 className="mb-7 text-5xl font-bold dark:text-white">
                    Terms of Use
                  </h2> */}

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Last Updated: 4 Jan 2024
                  </p>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Welcome to{" "}
                    <strong className="text-primary dark:text-white">
                      Technosive!
                    </strong>{" "}
                    These Terms of Use ("Terms") govern your access to and use
                    of the Technosive website ("Website") and any content,
                    features, or services provided by Technosive, whether as a
                    guest or a registered user.
                  </p>

                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Acceptance of Terms: By accessing or using the Website, you
                    agree to comply with and be bound by these Terms. If you do
                    not agree to these Terms, please do not use the Website.
                  </p>

                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Changes to Terms: Technosive reserves the right to modify or
                    revise these Terms at any time. Your continued use of the
                    Website following any changes constitutes acceptance of
                    those changes.
                  </p>

                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Use of the Website: You agree to use the Website for lawful
                    purposes and in a way that does not infringe on the rights
                    of others or restrict or inhibit anyone else's use and
                    enjoyment of the Website.
                  </p>

                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Intellectual Property: All content on the Website, including
                    text, graphics, logos, images, audio, and video, is the
                    property of Technosive or its content suppliers and is
                    protected by copyright and other intellectual property laws.
                    You may not reproduce, distribute, modify, display, perform,
                    or otherwise use any content without the prior written
                    consent of Technosive.
                  </p>

                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    User Contributions: If you submit any content to the
                    Website, including comments or feedback, you grant
                    Technosive a non-exclusive, royalty-free, perpetual,
                    irrevocable, and fully sublicensable right to use,
                    reproduce, modify, adapt, publish, translate, create
                    derivative works from, distribute, and display such content
                    throughout the world in any media.
                  </p>

                  {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className="text-primary underline dark:text-white">
                      Amet dictum sit amet justo
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p> */}
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Prohibited Uses:
                  </h3>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    You agree not to use the Website:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      In any way that violates applicable laws or regulations.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      To transmit any advertising, promotional materials, or any
                      other forms of solicitation without our prior written
                      consent.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      To engage in any conduct that restricts or inhibits
                      anyone's use or enjoyment of the Website.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      To impersonate or attempt to impersonate Technosive, a
                      Technosive employee, another user, or any other person or
                      entity.
                    </li>
                  </ul>

                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Termination: Technosive reserves the right, without notice
                    and in its sole discretion, to terminate your license to use
                    the Website and to block or prevent your future access to
                    and use of the Website.
                  </p>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Disclaimer of Warranties: The Website is provided "as is"
                    and "as available" without any warranties of any kind,
                    either expressed or implied, including but not limited to
                    the implied warranties of merchantability, fitness for a
                    particular purpose, or non infringement.
                  </p>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Limitation of Liability: To the fullest extent permitted by
                    applicable law, Technosive shall not be liable for any
                    indirect, incidental, special, consequential, or punitive
                    damages, or any loss of profits or revenues, whether
                    incurred directly or indirectly, or any loss of data, use,
                    goodwill, or other intangible losses resulting from your use
                    or inability to use the Website.
                  </p>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Governing Law: These Terms shall be governed by and
                    construed in accordance with the laws of England, without
                    regard to its conflict of law principles. .
                  </p>

                  {/* <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                  </div> */}

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Contact Us
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    If you have any questions, concerns, or feedback regarding
                    these Terms, please contact us at &nbsp;
                    <a
                      href="mailto:info@technosive.co.uk"
                      className="text-primary underline"
                    >
                      info@technosive.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
