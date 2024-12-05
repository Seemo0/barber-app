"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = { name, email, date, time, service };

    try {
      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      console.log("data===>", data);

      if (res.ok) {
        toast({
          title: "Booking was made",
          description: "The Booking is set to " + data[0]?.appointment_time,
          className:
            "fixed top-0 left-[50%] z-[100] flex max-h-screen w-full translate-x-[-50%] flex-col-reverse p-4 sm:right-0 sm:flex-col md:max-w-[420px]",
        });
        // Reset form
        setName("");
        setEmail("");
        setDate("");
        setTime("");
        setService("");
      } else {
        console.log("Error During Booking");
        toast({
          variant: "destructive",
          title: "Error",
          description: "Error During Booking! Try again",
        });
      }
    } catch (error) {
      console.log("Error During Booking", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error During Booking! Try again later",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <div className="relative">
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="pl-10"
            />
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
          <div className="relative">
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="pl-10"
            />
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="service">Service</Label>
        <Select value={service} onValueChange={setService} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="haircut">Haircut</SelectItem>
            <SelectItem value="shave">Shave</SelectItem>
            <SelectItem value="haircut-and-shave">Haircut & Shave</SelectItem>
            <SelectItem value="beard-trim">Beard Trim</SelectItem>
            <SelectItem value="hair-coloring">Hair Coloring</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Book Appointment
      </Button>
    </form>
  );
}
