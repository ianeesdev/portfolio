import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function sendEmail(data) {
  const apiEndpoint = "/api/email";

  try {
    const response = await axios.post(apiEndpoint, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.message;
  } catch (err) {
    throw new Error(err.message);
  }
}
