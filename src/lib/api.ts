import { supabase } from './supabase'

export async function getUsers() {
  const { data, error } = await supabase.from('users').select('*')
  if (error) throw error
  return data
}
