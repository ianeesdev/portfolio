"use client";
import Form from "@/components/Form";
import { MailIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-12">
      {/* Gradient Backgrounds and Blurs for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
      <div className="absolute -left-32 top-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary/30 to-primary/0 rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-gradient-to-br from-primary/20 to-primary/0 rounded-full blur-2xl opacity-30 z-0" />

      {/* Intro Section */}
      <div className="container mx-auto relative z-10 mb-12">
        <div className="grid xl:grid-cols-2 gap-8 items-center pt-8 xl:h-[420px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-gradient-to-r from-primary to-primary/60"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Let's Work Together.
            </h1>
            <p className="subtitle max-w-[400px] text-muted-foreground">
              I am always open to discussing new projects, and opportunities. Feel free to reach out through any of the
              contact methods below, and let's create something amazing together.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden xl:flex w-full h-[320px] bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-center bg-no-repeat"
          />
        </div>
      </div>

      {/* Split Card Layout */}
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full max-w-md lg:max-w-lg bg-background/60 backdrop-blur-xl border border-primary/20 dark:border-primary/10 rounded-3xl shadow-2xl p-10 flex flex-col gap-8 lg:mr-[-60px] z-20 hover:shadow-primary/10 transition-all duration-300"
        >
          <div className="absolute left-0 top-8 h-24 w-1 bg-gradient-to-b from-primary/80 to-primary/30 rounded-full" />
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="flex flex-col gap-6">
            <a
              href="mailto:aneese421@gmail.com"
              className="flex items-center gap-x-5 p-4 rounded-2xl bg-background/70 border border-primary/10 hover:border-primary/30 transition-all duration-300 group shadow-md hover:shadow-primary/10"
            >
              <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-colors duration-300">
                <MailIcon size={28} className="text-primary" />
              </div>
              <div className="text-lg text-muted-foreground">aneese421@gmail.com</div>
            </a>
            <a
              href="https://wa.me/923015316416"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-5 p-4 rounded-2xl bg-background/70 border border-primary/10 hover:border-primary/30 transition-all duration-300 group shadow-md hover:shadow-primary/10"
            >
              <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-colors duration-300">
                <FaWhatsapp size={28} className="text-primary" />
              </div>
              <div className="text-lg text-muted-foreground">+92 301 5316416</div>
            </a>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative w-full max-w-xl bg-background/70 backdrop-blur-xl border border-primary/20 dark:border-primary/10 rounded-3xl shadow-2xl p-12 flex flex-col gap-8 z-30 lg:ml-[-60px] hover:shadow-primary/10 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Send a Message
          </h2>
          <Form />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
