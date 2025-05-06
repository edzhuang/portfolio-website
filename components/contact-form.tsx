"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="bg-card border-gridline"
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="bg-card border-gridline"
      />
      <Textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="bg-card border-gridline min-h-40"
      />
      <Button
        type="submit"
        className="bg-primary hover:bg-primary/80 text-primary-foreground border border-gridline px-6 py-3 h-min w-min"
      >
        Send
      </Button>
    </form>
  )
}
