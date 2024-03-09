import React from "react";
import { ContactLinkProps } from "../lib/interfaces";

function ContactLink({ children, link, type }: ContactLinkProps) {

  return (
    <div className="ContactLink">
      <div className={`cover ${type === "email" && "reversed"}`}>
        {typeof children === "string" ? (
          <p className="text">{children}</p>
        ) : (
          <div className="icon">{children}</div>
        )}
      </div>
    </div>
  );
}

export default ContactLink;
