import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yipcubcyywwlhtxxghgt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcGN1YmN5eXd3bGh0eHhnaGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MzQ1ODUsImV4cCI6MjA5NTAxMDU4NX0.u0cnbEvrFfBw82kQFe55ki74kNYHmZzQ3LRNK3LBSi4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
