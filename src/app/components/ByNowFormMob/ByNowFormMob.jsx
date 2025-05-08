"use client";

import Image from "next/image";
import closeBtn from "../../../../public/close-btn.svg";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";

const ByNowFormMob = ({ setIsOpen, handleModalClick }) => {
  const initialValues = {
    name: "",
    nickname: "",
    email: "",
  };

  const validationForm = yup.object({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(10, "So Long!")
      .required("Please, enter name!"),
    nickname: yup
      .string()
      .min(3, "Too Short!")
      .max(20, "So Long!")
      .required("Please, enter nickname!"),
    email: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "So Long!")
      .required("Please, enter email!"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const token = "7994861974:AAFAVntfKtZPnIqtlNtYU9al1ba9IrmZTIE";
      const chatId = "769149180";

      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      const res = await axios.post(url, {
        chat_id: chatId,
        text: `Name: ${values.name}\nNickname: ${values.nickname}\nEmail: ${values.email}`,
      });

      if (res.status === 200) {
        alert("Повідомлення надіслано!🥳");
        actions.resetForm();
        setIsOpen(false);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Сталася помилка 😢");
    }
  };

  return (
    <div
      className="w-full h-screen fixed z-10 flex justify-center lg:hidden"
      style={{
        background: `
      radial-gradient(circle at 30% 40%, rgba(255,255,255,0.05), transparent 40%),
      radial-gradient(circle at 70% 80%, rgba(0,255,255,0.07), transparent 60%),
      linear-gradient(180deg, #0D0C1D 0%, #1E1B3A 50%, #2C2A4A 100%)
    `,
      }}
    >
      <div
        className="flex flex-col w-[393px] h-screen p-[32px] overflow-y-auto"
        onClick={handleModalClick}
      >
        <Image
          src={closeBtn}
          alt="modal close button"
          width={18}
          height={18}
          className="flex ml-auto cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <h2 className="font-raleway font-bold text-2xl text-[#fff] uppercase mt-[93px] mb-[36px] text-center">
          Укажите свои данные
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationForm}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col grow">
            <div className="w-[310px] mx-auto relative">
              <Field
                type="text"
                name="name"
                placeholder="Имя"
                className="w-[310px] rounded-[14px] px-5 py-[15px] mb-[18px] placeholder:font-raleway placeholder:font-normal placeholder:text-sm placeholder:text-[#0c0117]"
              />
              <ErrorMessage
                name="name"
                component="span"
                className="font-raleway font-normal text-xs text-white absolute bottom-[3px] left-0"
              />
            </div>
            <div className="w-[310px] mx-auto relative">
              <Field
                type="text"
                name="nickname"
                placeholder="Ник Telegram"
                className="w-[310px] rounded-[14px] px-5 py-[15px] mb-[18px] placeholder:font-raleway placeholder:font-normal placeholder:text-sm placeholder:text-[#0c0117]"
              />
              <ErrorMessage
                name="nickname"
                component="span"
                className="font-raleway font-normal text-xs text-white absolute bottom-[3px] left-0"
              />
            </div>
            <div className="w-[310px] mx-auto relative">
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="w-[310px] rounded-[14px] px-5 py-[15px] mb-[18px] placeholder:font-raleway placeholder:font-normal placeholder:text-sm placeholder:text-[#0c0117]"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="font-raleway font-normal text-xs text-white absolute bottom-[3px] left-0"
              />
            </div>
            <button
              type="submit"
              className="flex justify-center items-center mt-auto mx-auto w-[317px] h-[50px] rounded-[10px] bg-[#fff] font-raleway font-semibold text-sm text-[#0c0117]"
            >
              Отправить
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ByNowFormMob;
