ALTER TABLE "snippets" ADD COLUMN "is_public" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "snippets" ADD COLUMN "updated_at" timestamp DEFAULT now();