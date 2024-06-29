"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { sendEmail } from "@/lib/utils";
import { toast } from "react-toastify";
import Confetti from "react-confetti";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) {
      return; // If honeypot field is filled, do nothing
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

      // Cleanup function to clear the timeout
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {showConfetti && <Confetti numberOfPieces={300} />}
      <input type="text" id="honeypot" style={{ display: "none" }} onChange={handleChange} value={formData.honeypot} />
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required={true}
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          id="message"
          placeholder="Type Your Message Here."
          value={formData.message}
          onChange={handleChange}
          required={true}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        className="flex items-center max-w-[166px] gap-x-1.5"
        disabled={loading}
      >
        {loading ? "Sending..." : "Let's Talk"} <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
