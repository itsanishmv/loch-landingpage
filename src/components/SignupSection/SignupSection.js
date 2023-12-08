import React, { useState } from "react";

function SignupSection() {
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  function handleEmailInput(e) {
    setEmail(e.target.value.trim());
    const enteredEmail = e.target.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(enteredEmail)) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-[640px]">
      <form action="https://app.loch.one/welcome">
        <div className="flex flex-col justify-center items-center  w-[365px] ">
          <h1
            className="sm:w-[340px] hidden sm:flex justify-start
          leading-main font-medium  font-Inter text-4xl text-grey "
          >
            Sign up for <br /> exclusive access.
          </h1>
          <h1
            className="sm:hidden w-[300px] flex justify-start
          font-medium  font-Inter text-2xl text-grey text-center py-5 "
          >
            Sign up for exclusive access.
          </h1>
          <input
            onChange={handleEmailInput}
            value={email}
            className=" w-[340px] px-5 py-6 outline-none border border-lightgrey rounded-lg sm:mt-8 font-Inter "
            type="text"
            placeholder="Your email address"
          />
          {error ? (
            <span className="flex   justify-start w-[340px] ml-10 text-xs text-[red] font-Inter font-medium">
              Please enter a valid email
            </span>
          ) : (
            ""
          )}
          <button
            type="submit"
            disabled={error || email === undefined}
            className="border w-[340px] bg-dark text-white rounded-lg font-Inter font-semibold text-base py-7 mt-6"
          >
            Get started
          </button>
          <p className="flex justify-center font-semibold text-base sm:mt-[42px] w-full ">
            You’ll receive an email with an invite link to join.
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupSection;
