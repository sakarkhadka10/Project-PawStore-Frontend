import React from "react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions about our pets or services? We're here to help! Reach
          out to our friendly team using any of the methods below.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaLocationDot className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p className="text-gray-600">Mahendrapool, Pokhara, Nepal</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaPhone className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone Number</h3>
                <p className="text-gray-600">+977-[0]61-328463</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Address</h3>
                <p className="text-gray-600">info@pawstore.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaClock className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-sky-500 text-white p-3 rounded-full hover:bg-sky-600 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="How can we help you?"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Map */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Location</h2>
        <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.454708572072!2d85.31053237418266!3d27.703243625674713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185530e927fb%3A0xb8c1814683f64979!2zTmV3IFJvYWQgR2F0ZSwg4KSo4KSv4KS-4KSBIOCkuOCkoeCklSwgS2F0aG1hbmR1IDQ0NjAw!5e0!3m2!1sen!2snp!4v1744052317108!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-amber-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Do you offer pet delivery?
            </h3>
            <p className="text-gray-600">
              Yes, we offer pet delivery services within the city limits. For
              locations outside the city, additional charges may apply. Please
              contact us for more details.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Are your pets vaccinated?
            </h3>
            <p className="text-gray-600">
              All our pets are properly vaccinated and come with complete health
              records. We ensure they receive proper veterinary care before they
              go to their new homes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Do you offer after-sale support?
            </h3>
            <p className="text-gray-600">
              Absolutely! We provide comprehensive after-sale support including
              training advice, health consultations, and grooming tips for your
              new pet.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Can I return a pet if it doesn't work out?
            </h3>
            <p className="text-gray-600">
              We have a responsible return policy. If for any reason you cannot
              keep your pet, please contact us immediately so we can arrange for
              proper rehoming.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
