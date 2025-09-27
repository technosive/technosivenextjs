"use client";

import emailjs from "@emailjs/browser";
import axios from "axios";
import { useTheme } from "next-themes";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsLatterBox from "./NewsLatterBox";
import Input from "./input";

// emailjs Configuration
const TEMPLATE_ID = "template_1uh7056"; // Technosive Template in EmailJS
const SERVICE_ID = "service_e79zwla"; // Technosive Service in EmailJS
const PUBLIC_KEY = "zswr27pZsZktE5jOw";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    org: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      lead_name: formData.name,
      lead_email: formData.email,
      lead_phone_Number: formData.phone,
      lead_organization: formData.org,
      lead_message: formData.message,
    };

    const emailPromise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY,
    );

    emailPromise
      .then((response) => {
        setFormData(initialFormData);
        setLoading(false);
        toast.success("Email Sent Successfully!", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme == "dark" ? "dark" : "light",
        });
      })
      .catch((error) => {
        console.error(error);
        setFormData(initialFormData);
        setLoading(false);
        toast.error("Unable to Send your Message", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme == "dark" ? "dark" : "light",
        });
      });
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="contact" className="overflow-hidden py-24 md:py-20 lg:py-28">
      <ToastContainer />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our cybersecurity experts will respond promptly to assess your security requirements and provide tailored protection solutions.
              </p>
              <form onSubmit={handleFormSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <Input
                        required
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <Input
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Phone Number
                      </label>
                      <Input
                        required
                        name="phone"
                        type="text"
                        placeholder="Enter your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="org"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Organization
                      </label>
                      <Input
                        name="org"
                        type="text"
                        placeholder="Enter your organization"
                        value={formData.org}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      // onClick={handleFormSubmit}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {loading ? <Loader /> : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="h-4 w-4 animate-pulse rounded-sm bg-primary"></div>
      <div className="h-4 w-4 animate-pulse rounded-sm bg-primary" style={{ animationDelay: '0.2s' }}></div>
      <div className="h-4 w-4 animate-pulse rounded-sm bg-primary" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
};
