import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import hairImg from "../assets/hair.png";
import facialImg from "../assets/facial.png";
import nailsImg from "../assets/nail.png"; // file name is 'nail.png', not 'nails.png'



// Image
const HeroImage = "https://images.unsplash.com/photo-1633681138600-295fcd688876?q=80&w=1170&auto=format&fit=crop";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-800 leading-tight mb-4">
            Experience the Best Salon Services at Your Fingertips 
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Book appointments, make payments, get notified, and enjoy a smooth experience with ServiSwift.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          custom={1}
        >
          <img src={HeroImage} alt="Salon" className="rounded-lg shadow-xl object-cover w-full max-h-[400px]" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-16 py-16 bg-white rounded-t-3xl shadow-inner">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          Why Choose ServiSwift?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Booking",
              desc: "Schedule services easily and get instant confirmation.",
              icon: "📅",
            },
            {
              title: "Real-Time Notifications",
              desc: "Get updates on appointments and payments instantly.",
              icon: "🔔",
            },
            {
              title: "Secure Payments",
              desc: "Integrated with Razorpay for fast, safe transactions.",
              icon: "💳",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-indigo-50 p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariant}
              custom={i}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-br from-white to-indigo-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-indigo-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          Our Popular Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Hair Styling", image: hairImg, price: "₹499" },
      { title: "Facial", image: facialImg, price: "₹799" },
      { title: "Manicure & Pedicure", image: nailsImg, price: "₹699" },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariant}
              custom={i}
            >
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-1">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-indigo-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Riya Sharma",
              feedback: "Amazing experience! Very professional service and quick bookings.",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Ankit Mehra",
              feedback: "The payment process is so easy and I love the reminders.",
              img: "https://randomuser.me/api/portraits/men/35.jpg",
            },
            {
              name: "Priya Sinha",
              feedback: "My go-to app for salon services now. Highly recommended!",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-indigo-50 p-6 rounded-lg shadow-md text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariant}
              custom={i}
            >
              <img src={t.img} alt={t.name} className="w-16 h-16 mx-auto rounded-full mb-4" />
              <p className="text-gray-600 italic">"{t.feedback}"</p>
              <h4 className="mt-3 font-semibold text-indigo-800">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 md:px-16 bg-indigo-600 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          Stay in the Loop ✨
        </motion.h2>
        <p className="mb-6">Subscribe to our newsletter and never miss an update!</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full w-full max-w-sm text-black"
          />
          <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center text-indigo-800 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How do I book a service?",
              a: "Just click 'Book a Service', choose a time slot and confirm!",
            },
            {
              q: "Can I cancel or reschedule?",
              a: "Yes, you can manage bookings from your profile dashboard.",
            },
            {
              q: "Is online payment safe?",
              a: "Absolutely! We use Razorpay to ensure secure transactions.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariant}
              custom={i}
            >
              <h3 className="font-semibold text-lg text-indigo-700">{faq.q}</h3>
              <p className="text-gray-600 mt-1">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 md:px-16 text-center bg-indigo-700 text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          Ready to Get Pampered?
        </motion.h2>
        <p className="text-lg mb-6">Book your first service today and enjoy amazing discounts!</p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          Book Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
