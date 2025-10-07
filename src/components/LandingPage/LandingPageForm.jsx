import React from "react";
import Input from "../Input/Input";
import Link from "next/link";

const LandingPageForm = () => {
  return (
    <div>
      <Input name="name" id="name" placeholder="Name" required />

      <Input name="email" id="email" placeholder="Email" required />

      <Input name="phone" id="phone" placeholder="Phone" required />

      <Link href="/brief" className="link-area">
        <button className="btn_black">Get Started Now</button>
      </Link>
    </div>
  );
};

export default LandingPageForm;
