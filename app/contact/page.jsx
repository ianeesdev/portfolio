import Form from "@/components/Form";
import { MailIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              I am always open to discussing new projects, and opportunities.
              Feel free to reach out through any of the contact methods below,
              and let's create something amazing together.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="w-full flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <a
              href="mailto:aneese421@gmail.com"
              className="flex items-center gap-x-8"
            >
              <MailIcon size={20} className="text-primary" />
              <div>aneese421@gmail.com</div>
            </a>
            <a
              href="https://wa.me/923015316416"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-8"
            >
              <FaWhatsapp size={20} className="text-primary" />
              <div>+92 301 5316416</div>
            </a>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
