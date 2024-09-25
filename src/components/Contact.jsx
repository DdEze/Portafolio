import React from "react";

const Contact = () => {
  return (
    <div name='Contact' className="w-screen 2xl:mt-20   h-screen flex items-center flex-col">
      <h2 className="font-semibold text-[40px]">Contact</h2>
      <form
        action="https://getform.io/f/8c92bce1-38fe-47b4-bcab-99eca3be8ecd"
        method="POST"
        className="flex flex-col items-center justify-center pt-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-slate-800 mt-6  2xl:w-[400px] sm:w-[300px]"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-slate-800 mt-6  2xl:w-[400px]  sm:w-[300px]"
        />
        <textarea
          name="message"
          placeholder="Message"
          id=""
          resize="none"
          className="border border-slate-800 mt-6   2xl:w-[400px]  sm:w-[300px]   "
        ></textarea>
        <button
          type="submit"
          className="border border-slate-800 mt-8 2xl:w-[300px] sm:w-[120px] p-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;