import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zpjwyzkjgtbkwxyglamx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwand5emtqZ3Ria3d4eWdsYW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MjQzMzcsImV4cCI6MjA0MzIwMDMzN30.f081RDWJwWptuVCCRUy5SWGVUBfzNWIAobIDV21qP84';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase environment variables are missing.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
