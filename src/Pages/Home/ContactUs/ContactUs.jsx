import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const ContactUs = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoader(true);
      const res = await axios.post(
        "https://page-flow-server-side.vercel.app/contact",
        data
      );
      if (res.data.success) {
        toast.success("Sent message successfully");
        reset();
      }
    } catch (error) {
      toast.error("Message not sent please try again");
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div id="contactUs" className="rounded-xl pt-20 mx-5">
      <h2  className="text-3xl font-medium text-center">Contact Us</h2>
      <ToastContainer position="bottom-right" />
      <div className="md:flex max-w-6xl mx-auto overflow-hidden my-10 space-y-8 md:space-y-8 justify-center gap-5">
        {/* Left side - Icon & Text */}
        <div  className="md:w-1/2 max-w-md mx-auto">
          <h1 className="sm:text-2xl text-xl font-medium">
            Let's talk about your <br />{" "}
            <span className="bg-linear-to-r from-primary to-[#81c41cd0] bg-clip-text text-transparent font-semibold">
              next idea
            </span>
          </h1>
          <p className="mb-10 mt-5 text-[#c9c9c9d8] max-w-md">
            Whether you have a question, project idea, or want to contact - I'm
            always open ti meaningful conversation.
          </p>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-primary p-2 rounded-full w-fit">
                <FaLocationDot size={20} />
              </div>
              <div className="">
                <p className="text-sm text-[#c9c9c9d8]">Location</p>
                <h2 className="font-medium">Dhaka, Bangladesh</h2>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary p-2 rounded-full w-fit">
                <FaPhone size={20} />
              </div>
              <div className="">
                <h2 className="text-sm text-[#c9c9c9d8]">Phone / WhatsApp</h2>
                <a
                  href="https://wa.me/8801772551376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  +880 1772 551 376
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary p-2 rounded-full w-fit">
                <MdMarkEmailUnread size={20} />
              </div>
              <div className="">
                <p className="text-sm text-[#c9c9c9d8]">Email</p>
                <a
                  href="mailto:shakilahmed.codes@gmail.com"
                  className="font-medium"
                >
                  shakilahmed.codes@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div  className="md:w-1/2 max-w-md mx-auto sm:p-8 p-4 bg-[#33333368] rounded-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="sm:flex gap-4 space-y-4 sm:space-y-0">
              <div className="sm:w-1/2">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 bg-secondary text-white rounded-2xl focus:border-primary border border-secondary outline-0"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="sm:w-1/2">
                <input
                  type="text"
                  placeholder="Enter your number"
                  className="w-full p-3 bg-secondary text-white rounded-2xl focus:border-primary border border-secondary outline-0"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-secondary text-white rounded-2xl focus:border-primary border border-secondary outline-0"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Message.."
                className="w-full p-3 bg-secondary text-white rounded-2xl focus:border-primary border border-secondary outline-0"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl transition font-medium"
            >
              {loader ? "Sending.." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
