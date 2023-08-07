import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kkmayrvuchhmqnsyckfb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrbWF5cnZ1Y2hobXFuc3lja2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MDMyNjksImV4cCI6MjAwNjk3OTI2OX0._RrriVyGn7qwmfUO7TLIkuHlzbVs20cnPAXnvtmsgrA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
