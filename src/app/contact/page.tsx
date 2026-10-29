import type { Metadata } from "next"
import { Contact } from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jesseca Gimo.",
}

export default function ContactPage() {
  return <Contact />
}
