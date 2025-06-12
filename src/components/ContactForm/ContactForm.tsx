import React from 'react'

const ContactForm: React.FC = () => {
  return (
    <div className="bg-navy-deep text-white p-6 md:p-12 rounded-lg shadow-lg">
      <h1>Contact Me</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name..."
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
            placeholder="Your message..."
            className="w-full px-4 py-3 bg-white text-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-200 text-black py-3 rounded-md hover:bg-blue-400 transition-colors duration-200"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
