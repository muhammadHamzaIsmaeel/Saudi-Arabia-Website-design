"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function RealEstateLanding() {
  // Explicit boolean type
  const [isRTL, setIsRTL] = useState<boolean>(false);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-gray-50">
      <Header isRTL={isRTL} setIsRTL={setIsRTL} />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center md:flex-row md:text-left md:justify-between bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="max-w-lg bg-white bg-opacity-80 p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-4">
            {isRTL ? "ابحث عن منزلك المثالي" : "Find Your Dream Home"}
          </h2>
          <p className="text-gray-700 mb-6">
            {isRTL
              ? "نوفر أفضل العقارات بأسعار تنافسية وخدمة مميزة."
              : "We provide the best real estate properties at competitive prices with premium service."}
          </p>
          <button className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">
            {isRTL ? "تصفح العقارات" : "Browse Properties"}
          </button>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            {isRTL ? "من نحن" : "About Us"}
          </h3>
          <p className="text-gray-600 text-lg">
            {isRTL
              ? "نحن وكالة عقارية موثوقة مع سنوات من الخبرة في مساعدة العملاء على العثور على منازلهم المثالية."
              : "We are a trusted real estate agency with years of experience helping clients find their perfect homes."}
          </p>
        </div>
      </section>
      {/* Properties Section */}
      <section id="properties" className="px-6 py-16 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-10">
          {isRTL ? "عقارات مميزة" : "Featured Properties"}
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              id: 1,
              title: isRTL ? "فيلا فاخرة" : "Luxury Villa",
              img: "/villa.jpg",
            },
            {
              id: 2,
              title: isRTL ? "شقة حديثة" : "Modern Apartment",
              img: "/apartment.jpg",
            },
            {
              id: 3,
              title: isRTL ? "منزل عائلي" : "Family House",
              img: "/house.jpeg",
            },
          ].map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={property.img}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{property.title}</h4>
                <p className="text-gray-600 mb-4">
                  {isRTL
                    ? "منزل جميل في موقع رائع مع جميع وسائل الراحة."
                    : "A beautiful home located in a prime area with all amenities."}
                </p>
                <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                  {isRTL ? "المزيد من التفاصيل" : "View Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            {isRTL ? "اتصل بنا" : "Contact Us"}
          </h3>
          <p className="text-gray-600 mb-8">
            {isRTL
              ? "هل لديك استفسار؟ تواصل معنا وسنكون سعداء بمساعدتك."
              : "Have a question? Reach out to us and we’ll be happy to help."}
          </p>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder={isRTL ? "الاسم" : "Name"}
              className="p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder={isRTL ? "البريد الإلكتروني" : "Email"}
              className="p-3 border rounded-lg"
            />
            <textarea
              placeholder={
                isRTL ? "اكتب رسالتك هنا" : "Write your message here"
              }
              className="p-3 border rounded-lg"
            ></textarea>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {isRTL ? "إرسال" : "Send"}
            </button>
          </form>
        </div>
      </section>
      <Footer isRTL={isRTL} />
    </div>
  );
}
