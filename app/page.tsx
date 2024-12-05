import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import { CalendarDays, Scissors, User } from "lucide-react";

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
      </main>
    </div>
  );
}
