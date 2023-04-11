import { createClient } from '@supabase/supabase-js'

const URL = 'https://dgiqkcnviqgtfiyjccqw.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnaXFrY252aXFndGZpeWpjY3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzQ4MTUsImV4cCI6MTk5Njc1MDgxNX0.4r8O1nL84lB4GRs6sQBO0GKAa8lmkDfzi6UvWpLSw_g';

export const supabase = createClient(URL, API_KEY);