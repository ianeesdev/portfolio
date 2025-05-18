"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { sendEmail } from "@/lib/utils";
import { toast } from "react-toastify";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import GlowingButton from "./GlowingButton";

const floatingLabelBase =
  "absolute left-4 top-1/2 -translate-y-1/2 px-1 text-base pointer-events-none transition-all duration-300 bg-background/70 backdrop-blur-sm";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [focus, setFocus] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleFocus = (e) => {
    setFocus((prev) => ({ ...prev, [e.target.id]: true }));
  };
  const handleBlur = (e) => {
    setFocus((prev) => ({ ...prev, [e.target.id]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) {
      return;
    }
    setLoading(true);
    setShowConfetti(false);
    try {
      const message = await sendEmail(formData);
      toast.success(message);
      setShowConfetti(true);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
        honeypot: "",
      });
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return (
    <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
      {showConfetti && <Confetti numberOfPieces={300} />}
      <input type="text" id="honeypot" style={{ display: "none" }} onChange={handleChange} value={formData.honeypot} />

      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={true}
          placeholder="Name"
          className="h-14 bg-background/60 border border-primary/20 focus:border-primary/60 transition-all duration-300 rounded-2xl pl-4 pr-14 text-base focus:ring-2 focus:ring-primary/20 shadow-lg"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-focus-within:from-primary/30 group-focus-within:to-primary/20 transition-colors duration-300">
          <User className="text-primary" size={20} />
        </div>
      </motion.div>

      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative group"
      >
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={true}
          placeholder="Email"
          className="h-14 bg-background/60 border border-primary/20 focus:border-primary/60 transition-all duration-300 rounded-2xl pl-4 pr-14 text-base focus:ring-2 focus:ring-primary/20 shadow-lg"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-focus-within:from-primary/30 group-focus-within:to-primary/20 transition-colors duration-300">
          <MailIcon className="text-primary" size={20} />
        </div>
      </motion.div>

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative group"
      >
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={true}
          placeholder="Message"
          className="min-h-[180px] h-36 bg-background/60 border border-primary/20 focus:border-primary/60 transition-all duration-300 rounded-2xl pl-4 pr-14 pt-4 text-base focus:ring-2 focus:ring-primary/20 shadow-lg resize-none"
        />
        <div className="absolute right-4 top-6 size-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-focus-within:from-primary/30 group-focus-within:to-primary/20 transition-colors duration-300">
          <MessageSquare className="text-primary" size={20} />
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-2"
      >
        <GlowingButton
          type="submit"
          variant="primary"
          className="h-14 w-full px-8 text-base font-semibold"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-x-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="size-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
              />
              Sending...
            </span>
          ) : (
            <>
              Let's Talk
              <ArrowRightIcon size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </GlowingButton>
      </motion.div>
    </form>
  );
};

export default Form;
