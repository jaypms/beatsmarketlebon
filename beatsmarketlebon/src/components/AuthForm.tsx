import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

export default function AuthForm() {
  const { user, loading, signIn, signUp, signOut } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      if (mode === 'signin') {
        await signIn(email, password)
      } else {
        await signUp(email, password)
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) return <p>Chargement...</p>

  if (user)
    return (
      <div>
        <p>Connecté en tant que : {user.email}</p>
        <button onClick={signOut}>Se déconnecter</button>
      </div>
    )

  return (
    <form onSubmit={handleSubmit}>
      <h2>{mode === 'signin' ? 'Se connecter' : "S'inscrire"}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">{mode === 'signin' ? 'Connexion' : "S'inscrire"}</button>
      <p>
        {mode === 'signin' ? "Pas encore de compte ?" : 'Déjà un compte ?'}{' '}
        <button type="button" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
          {mode === 'signin' ? "Créer un compte" : 'Se connecter'}
        </button>
      </p>
    </form>
  )
}
