import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { ContactPropsType } from "../lib/data"; // Assuming your data type is correct
import styles from "./contactform.module.css"; // Ensure styles are imported correctly

const contactSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false); // State to control visibility
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactPropsType>({
    resolver: zodResolver(contactSchema),
  });

  // Handle form submission
  const onSubmit = async (data: ContactPropsType) => {
    reset();
    const templateParams = {
      email: data.email,
      name: data.name,
      subject: data.subject,
      message: data.message,
    };

    try {
      // Send email via EmailJS
      const result = await emailjs.send(
        "service_4dcwyzd",
        "template_u12wotc",
        templateParams,
        "fZab5skM3kS9JSPtg"
      );

      if (result.status === 200) {
        setShowSuccess(true); // Show success notification

        setTimeout(() => {
          setShowSuccess(false);
        }, 1800);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.formHeader}>
        <h3>Contact me here </h3>
      </div>

      {showSuccess && (
        <div
          className={`${styles.successNotification} ${
            showSuccess ? "" : styles.fadeOut
          }`}
        >
          Message sent successfully!
        </div>
      )}

      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email :</label>
          <input
            {...register("email")}
            type="email"
            placeholder="enter your email"
          />
        </div>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <div>
          <label>Name :</label>
          <input
            {...register("name")}
            type="text"
            placeholder="enter your name"
          />
        </div>
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <div>
          <label>Subject :</label>
          <input
            {...register("subject")}
            type="text"
            placeholder="enter subject"
          />
        </div>
        {errors.subject && (
          <p className={styles.error}>{errors.subject.message}</p>
        )}

        <div>
          <label>Message :</label>
          <textarea {...register("message")} placeholder="your message" />
        </div>
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
