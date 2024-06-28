import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://puswaffdzoiyamnbozxt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1c3dhZmZkem9peWFtbmJvenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMTA0NDAsImV4cCI6MjAzMzg4NjQ0MH0.MHIjP6ojfe2qZGKzSK_BCrRWE3q_uvjOzyWDXfVFeP0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})