"use client";

import { useState } from "react";
import axios from "axios";
import dotenv from "dotenv";

const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ticketType, setTicketType] = useState<string>("");
  /*
   ticket type:
   - tutoring
   - web development
   - mobile development
   - consultancy
  */
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      fields: {
        summary: title,
        description,
        ticketType,
        contactName,
        contactEmail,
        contactPhone,
        project:{
          id: "10000"
        }
      },
    };
    console.info(data);
    axios // TODO fix this axios call.
      .post("https://edwardrees.atlassian.net/rest/api/3/issue/", data, {
        headers: {
          Authorization: `Basic ${process.env.JIRA_ACCOUNT}:${process.env.JIRA_AUTH}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      })
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="ticketType">Ticket Type</label>
      <select
        id="ticketType"
        value={ticketType}
        onChange={(e) => setTicketType(e.target.value)}
      >
        <option value="tutoring">Tutoring</option>
        <option value="web development">Web Development</option>
        <option value="mobile development">Mobile Development</option>
        <option value="consultancy">Consultancy</option>
      </select>
      <label htmlFor="contactName">Contact Name</label>
      <input
        type="text"
        id="contactName"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
      />
      <label htmlFor="contactEmail">Contact Email</label>
      <input
        type="email"
        id="contactEmail"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
      />
      <label htmlFor="contactPhone">Contact Phone</label>
      <input
        type="tel"
        id="contactPhone"
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export { Form };
