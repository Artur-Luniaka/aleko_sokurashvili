"use client";

import Image from "next/image";
import closeBtn from "../../../../public/close-btn.svg";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";

const ByNowFormMob = () => {
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

  return (
    <div
      className="w-full h-screen fixed z-10 flex justify-center items-center"
      style={{
        background: `
      radial-gradient(circle at 30% 40%, rgba(255,255,255,0.05), transparent 40%),
      radial-gradient(circle at 70% 80%, rgba(0,255,255,0.07), transparent 60%),
      linear-gradient(180deg, #0D0C1D 0%, #1E1B3A 50%, #2C2A4A 100%)
    `,
      }}
    >
      <div className="w-[393px] h-full p-[32px] flex flex-col">
        <Image
          src={closeBtn}
          alt="modal close button"
          width={18}
          height={18}
          className="flex ml-auto mb-auto"
        />
        <h2 className="font-raleway font-bold text-2xl text-[#fff] uppercase mt-[93px] mb-[36px] text-center">
          Укажите свои данные
        </h2>
        <Formik>
          <Form className="flex flex-col grow">
            <div className="w-[310px] mx-auto relative">
              <Field
                type="text"
                name="name"
                placeholder="Имя"
                className="w-[310px] rounded-[14px] px-5 py-[15px] mb-[18px]"
              />
            </div>
            <div className="w-[310px] mx-auto relative">
              <Field
                type="text"
                name="nickname"
                placeholder="Ник Telegram"
                className="w-[310px] rounded-[14px] px-5 py-[15px] mb-[18px]"
              />
            </div>
            <div className="w-[310px] mx-auto relative">
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="w-[310px] rounded-[14px] px-5 py-[15px]"
              />
            </div>
            <button
              type="submit"
              className="flex justify-center items-center mt-auto w-[317px]"
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
