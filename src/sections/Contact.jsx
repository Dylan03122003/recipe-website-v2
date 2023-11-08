import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "./../assets/img/Contact.png";

function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Name can't be empty!");
    }

    if (!email) {
      console.log("Hello");
      setEmailError("Email can't be empty!");
    } else {
      setEmailError("");
    }
    if (!subject) {
      setSubjectError("Subject can't be empty!");
    }

    if (!message) {
      setMessageError("Message can't be empty!");
    } else {
      setMessageError("");
    }
    if (!name) {
      return;
    }

    if (name.length < 5) {
      setNameError("Name must at least 5 characters!");
    } else {
      setNameError("");
    }
    if (!subject) {
      return;
    }
    if (subject.length < 5 || subject.length > 100) {
      setSubjectError(
        "Subject must be greater than 5 and less than 100 characters"
      );
    } else {
      setSubjectError("");
    }

    if (
      name.length > 5 &&
      email.length > 1 &&
      subject.length > 5 &&
      email.length > 1 &&
      message.length > 1
    ) {
      toast("Submit Successfully!");
    }
  };

  return (
    <div>
      <div>
        <h1 className="font-semibold mt-[70px] text-[45px] text-center">
          Contact Us
        </h1>
      </div>

      <div className="p-10 flex justify-center xl:flex-row flex-col">
        <div className="w-[500px]">
          <img className=" hidden xl:block " src={contact} />
        </div>
        <div className="mr-[20px] flex justify-center">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex gap-[30px] mb-[20px] justify-center">
              <div className="flex flex-col">
                <label className="mb-[10px] text-[15px] text-gray-600 text-[#00000099]">
                  NAME
                </label>
                <input
                  className="border-[1px] w-[140px] sm:w-[250px] px-4 py-6 border-gray-300 md:w-[340px] h-[50px] rounded-[12px]"
                  placeholder="Enter your name..."
                  type="text"
                  onChange={(e) => setName(e.target.value.trim())}
                  // onChange={handleInputChange1}
                ></input>
                {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                {/* {error1 && <p style={{ color: "red" }}>{error1}</p>} */}
              </div>

              <div className="flex flex-col">
                <label className="mb-[10px] text-[15px] text-gray-600 text-[#00000099]">
                  EMAIL ADRESS
                </label>
                <input
                  className="border-[1px] px-4 py-6 sm:w-[250px]  w-[140px] border-gray-300 md:w-[340px] h-[50px] rounded-[12px]"
                  placeholder="Your email adress..."
                  type="email"
                  onChange={(e) => setEmail(e.target.value.trim())}
                  // onChange={handleInputChange2}
                ></input>
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                {/* {error2 && <p style={{ color: "red" }}>{error2}</p>} */}
              </div>
            </div>
            <div className="flex gap-[30px] mb-[20px] ">
              <div className="flex flex-col">
                <label className="mb-[10px] text-[15px] text-gray-600 text-[#00000099]">
                  SUBJECT
                </label>
                <input
                  className="border-[1px] px-4 py-6  border-gray-300 w-[320px] sm:w-[530px] md:w-[710px] h-[50px] rounded-[12px]"
                  placeholder="Enter subject..."
                  type="text"
                  onChange={(e) => setSubject(e.target.value.trim())}
                  // onChange={handleInputChange3}
                ></input>
                {subjectError && <p style={{ color: "red" }}>{subjectError}</p>}
                {/* {error3 && <p style={{ color: "red" }}>{error3}</p>} */}
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="mb-[10px] text-[15px] text-gray-600 text-[#00000099]">
                  MESSAGES
                </label>
                <textarea
                  className="border-[1px] px-4 py-5  border-gray-300 md:w-[710px] md:h-[200px] rounded-[12px]"
                  placeholder="Enter subject..."
                  type="text"
                  onChange={(e) => setMessage(e.target.value.trim())}
                  // onChange={handleInputChange5}
                ></textarea>
                {messageError && <p style={{ color: "red" }}>{messageError}</p>}
                {/* {error5 && <p style={{ color: "red" }}>{error5}</p>} */}
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-black text-[14px] text-white font-semibold px-[45px] py-[15px] mt-[30px] rounded-[14px]"
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
