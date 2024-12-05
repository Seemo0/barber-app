import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import {
  CalendarDays,
  Scissors,
  User,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { images } from "@/data/data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Expert Haircuts, Exceptional Service
            </h1>
            <p className="text-xl mb-8">
              Experience the art of grooming at its finest. Book your
              appointment today and step into a world of style and confidence.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-2">
                  <Scissors className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Premium Cuts</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-2">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Expert Stylists</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-2">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Easy Booking</span>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Book Your Appointment
            </h2>
            <BookingForm />
          </div>
        </div>
        <section id="gallery" className="py-20 ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <div key={index} className="relative h-64">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BarberB</h3>
            <p>Casablanca, City, Country</p>
            <p>Phone: (06) 28385845</p>
            <p>Email: info@barberbook.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p>Monday - Friday: 9am - 8pm</p>
            <p>Saturday: 10am - 6pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-4">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 BarberB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
