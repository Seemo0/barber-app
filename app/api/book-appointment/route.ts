import { db } from "@/db";
import { bookings } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, date, time, service } = await req.json();

  console.log("check values===>", name, email, date, time, service);

  const formattedTime = time.includes(":") ? `${time}:00` : time;

  if (!name || !email || !date || !time || !service) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const result = await db
      .insert(bookings)
      .values({
        name: name,
        email: email,
        haircut_type: service,
        appointment_date: date,
        appointment_time: formattedTime,
      })
      .returning();

    console.log("Booking result:", result);

    return NextResponse.json({
      message: "Booking successfully created!",
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error saving booking", error: error.message },
      { status: 500 }
    );
  }
}
