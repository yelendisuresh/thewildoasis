import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kelwskrrvhdkchhqyzol.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlbHdza3Jydmhka2NoaHF5em9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2NzY4MTIsImV4cCI6MjAyMTI1MjgxMn0.nxzmnDWOEH8uwS7_Fc9P7rLzfI8irWQkMZMY52NcbA0";
const superbase = createClient(supabaseUrl, supabaseKey);
export default superbase;
