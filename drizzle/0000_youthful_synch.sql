CREATE TABLE IF NOT EXISTS "bookings" (
	"name" text NOT NULL,
	"email" text NOT NULL,
	"haircut_type" text NOT NULL,
	"appointment_date" date,
	"appointment_time" time
);
