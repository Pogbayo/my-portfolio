import styles from "./contactform.module.css";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactPropsType } from "../lib/data";
import emailjs from "emailjs-com";

const contactSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactPropsType>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactPropsType) => {
    reset();
    const templateParams = {
      email: data.email,
      name: data.name,
      subject: data.subject,
      message: data.message,
    };
    try {
      const result = await emailjs.send(
        "service_4dcwyzd",
        "template_u12wotc",
        templateParams,
        "fZab5skM3kS9JSPtg"
      );

      if (result.status === 200) {
        console.log("Sent successfully");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.formHeader}>
        <h1>Contact Form</h1>
        <h3>
          Feel free to reach out to me for any questions or opportunities!
        </h3>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <label>Name</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <label>Subject</label>
        <input
          {...register("subject")}
          type="text"
          placeholder="Enter subject"
        />
        {errors.subject && (
          <p className={styles.error}>{errors.subject.message}</p>
        )}

        <label>Message</label>
        <textarea {...register("message")} placeholder="Your message" />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
