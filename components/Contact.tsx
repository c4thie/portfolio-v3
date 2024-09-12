import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AboutCat from "./AboutCat";

const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);
    emailjs.init("A2mGiOoYodiZiB3sp");
    emailjs
      .send(
        "service_0stqsk4",
        "template_ky37om8",
        {
          from_name: form.name,
          to_name: "Cathie",
          from_email: form.email,
          to_email: "cathieyan@hotmail.com",
          message: form.message,
        },
        // "A2mGiOoYodiZiB3sp"
      )
      .then(
        () => {
          setLoading(false);
          alert("Your message was successfully submitted.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: Error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-8 pb-3">
      <div className="xl:mt-12 flex-col flexCenter gap-3">
        <h2 className="md:text-[106px] text-[66px]">Let's chat!</h2>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 md:w-[600px] w-[350px] h-auto"
        >
          <AboutCat />
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl md:w-[550px] w-[350px]"
      >
        <form
          // ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            ></input>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="username@gmail.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            ></input>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Message</span>
            <input
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to talk about?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            ></input>
          </label>

          <button
            type="submit"
            className="bg=tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl border-white border-2 hover:shadow hover:bg-[white] hover:text-black w-full"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
