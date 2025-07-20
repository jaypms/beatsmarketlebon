import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function AuthProfile() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const sessionUser = supabase.auth.user()
    if (sessionUser) setUser(sessionUser)
  }, [])

  async function handleSignIn() {
    setError('')
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) {
      setError(error.message)
    } else {
      setUser(user)
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    setUser(null)
    setEmail('')
    setPassword('')
  }

  return (
    <div style={{ maxWidth: 320, margin: 'auto', padding: 20 }}>
      {!user ? (
        <>
          <h2>Connexion</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', marginBottom: 8, padding: 8 }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', marginBottom: 8, padding: 8 }}
          />
          <button onClick={handleSignIn} style={{ width: '100%', padding: 10 }}>
            Se connecter
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      ) : (
        <>
          <h2>Bienvenue {user.email}</h2>
          <button onClick={handleSignOut} style={{ width: '100%', padding: 10 }}>
            Se déconnecter
          </button>
        </>
      )}
    </div>
  )
}
