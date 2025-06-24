'use client'

import React from 'react'

interface ContactFormProps {
  action: (_: any, formData: FormData) => Promise<{ success: boolean }>
}

const ContactForm: React.FC<ContactFormProps> = ({ action }) => {
  const [_, formAction, isPending] = React.useActionState(action, null)
  return (
    <div className="bg-navy-deep text-white p-6 md:p-12 rounded-lg shadow-lg">
      <h1>Contact Me</h1>
      <form className="space-y-6" action={formAction}>
        <div>
          <label htmlFor="name" className="block mb-1 text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name..."
            required
            className="w-full px-4 py-3 bg-white text-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@gmail.com"
            className="w-full px-4 py-3 bg-white text-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your message..."
            className="w-full px-4 py-3 bg-white text-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-200 text-black py-3 rounded-md hover:bg-blue-400 transition-colors duration-200"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
