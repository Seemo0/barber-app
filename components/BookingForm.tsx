"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

const BookingSchema = z.object({
  name: z.string().min(3, { message: "Enter at least 3 characters" }),
  email: z
    .string()
    .email()
    .regex(
      /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
      { message: "Must be a valid email" }
    ),
  service: z.string(),
  date: z.string(),
  time: z.string(),
});

export default function BookingForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      email: "",
      name: "",
      service: "",
      date: "",
      time: "",
    },
    mode: "all",
  });

  const handleSubmit = async (values: z.infer<typeof BookingSchema>) => {
    console.log("vals====<>", values);

    try {
      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
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
        form.reset();
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="your name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    // value={field.value}
                    {...field}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Haircut</SelectItem>
                      <SelectItem value="shave">Shave</SelectItem>
                      <SelectItem value="haircut-and-shave">
                        Haircut & Shave
                      </SelectItem>
                      <SelectItem value="beard-trim">Beard Trim</SelectItem>
                      <SelectItem value="hair-coloring">
                        Hair Coloring
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Book Appointment
        </Button>
      </form>
    </Form>
  );
}
