import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tfyxezalckavnqqviyie.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmeXhlemFsY2thdm5xcXZpeWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDgwNjEsImV4cCI6MjAwNjgyNDA2MX0.2tp67WZmIGDjy3yaH1Fz1PdTSPlvQwOhChPC9lJpfvY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
