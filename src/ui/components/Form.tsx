"use client";

import React, { useState } from "react";
import { ImportantText } from "../design-system/ImportantText";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";
import { Links } from "../design-system/Links";
import { Inputs } from "../design-system/Inputs";
import { Button } from "../design-system/Button";
import { IoIosSend } from "react-icons/io";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          business: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="form"
      className="w-full min-h-screen flex justify-center items-center"
    >
      <div className="mx-auto w-fit space-y-[40px]">
        <div className="flex flex-col items-center gap-[30px] relative handshow">
          <ImportantText img="/img/svg/Wave-Marker.svg">
            <Typographie
              variant="h6"
              theme="secondary"
              className="uppercase"
              weight="medium"
            >
              Contact me
            </Typographie>
          </ImportantText>
          <Typographie
            textEffect="large"
            className="font-calfine uppercase text-center"
            variant="h3"
            theme="secondary"
          >
            Let’s work together and bring
            <Typographie variant="h3" theme="tercery">
              {" "}
              your ideas to life
            </Typographie>
          </Typographie>
          <div className="w-fit relative">
            <Typographie className="max-w-[434px] text-center">
              “Contact me or my agency,{" "}
              <Links
                link="https://frontend-axis.vercel.app"
                variant="externe"
                className="inline-block"
              >
                Axis Studio
              </Links>
              , to turn your vision into reality.
            </Typographie>
            <Image
              alt=""
              src="/img/svg/magic.svg"
              width={18}
              height={18}
              className="absolute right-[28%] bottom-0"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-[580px] space-y-[18px] mx-auto handwrite relative"
        >
          <div className="flex items-center gap-[10px]">
            <Inputs
              required
              typeOfInput="text"
              icon="/img/svg/nameInput.svg"
              placeHolder="Enter Your name"
              value={formData.name}
              onChange={handleChange("name")}
            />
            <Inputs
             required
              typeOfInput="text"
              icon="/img/svg/envelope.svg"
              placeHolder="Enter Your Email"
              value={formData.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <Inputs
              
              typeOfInput="text"
              icon="/img/svg/job.svg"
              placeHolder="Business name"
              value={formData.business}
              onChange={handleChange("business")}
            />
            <Inputs
              required
              typeOfInput="text"
              icon="/img/svg/mobile.svg"
              placeHolder="Phone Number"
              value={formData.phone}
              onChange={handleChange("phone")}
            />
          </div>
          <Inputs
            className="h-[200px]"
            typeOfInput="textarea"
            icon="/img/svg/messages.svg"
            placeHolder="Enter your message"
            value={formData.message}
            onChange={handleChange("message")}
          />
          <Button
            icon={{ icon: IoIosSend }}
            inputType="submit"
            className="w-full text-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "SUBMIT"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
