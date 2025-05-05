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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="bg-card border-gridline text-foreground"
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="bg-card border-gridline text-foreground"
      />
      <Textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="bg-card border-gridline text-foreground min-h-[100px]"
      />
      <Button
        type="submit"
        className="bg-card hover:bg-card/80 text-foreground border border-gridline rounded-none px-4 py-2"
      >
        Send
      </Button>
    </form>
  )
}
