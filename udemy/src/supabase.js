import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ketkmnmqvwkjbxapaonl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtldGttbm1xdndramJ4YXBhb25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MzM5NTcsImV4cCI6MjA1MDQwOTk1N30.ML15SOMFPFc61Y553dqm8fV6pT_r9jXbiY-14yGERqQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
