// emailService.ts
import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (order: any) => {
  return await emailjs.send(
    "service_mb02zdu",
    "template_rjsyo3m",
    order,
    "KqS4enM6yf4hrGvkl",
  );
};