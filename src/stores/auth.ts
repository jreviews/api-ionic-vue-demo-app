import { ref } from 'vue'
import { ApiLogout } from '@/services/api-auth'
import { useListingStore } from './listings'

// global state, created in module scope
const loggedInUser = ref(null)

export function useAuthStore() {

  // local state, created per-component
  const setUser = (user: any) => {
    localStorage.setItem('user', JSON.stringify(user))
    loggedInUser.value = user
  }

  const isLoggedIn = () => {
    return loggedInUser.value !== null
  }

  const getToken = () => {
    if (isLoggedIn()) {
      const user = loggedInUser.value as any
      return user.token
    }  

    return null
  }

  const getUser:any = () => {    
    return loggedInUser
  }

  const logout = async () => {
    useListingStore().reset()

    try {
      await ApiLogout()
    } finally {
      localStorage.removeItem('user')

      loggedInUser.value = null
    }
  }

  const user = localStorage.getItem('user')

  if (user) {
      setUser(JSON.parse(user))
  }

  return {
    loggedInUser,
    isLoggedIn,
    getUser,
    getToken,
    setUser,
    logout,
  }
}