import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://unkidishdoghsqyrczjs.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVua2lkaXNoZG9naHNxeXJjempzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NjEwMzgsImV4cCI6MjAxNjEzNzAzOH0.bNMEuuAtgYobbIXNlmhB-TZX-pW7MUG0urB1OoDud9o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
