import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default async function ({ store, req, redirect, route }) {
  let loggedUser = process.server ? getUserFromCookie(req) : getUserFromLocalStorage();
  // loggedUser = { "id": 1, "user_name": "PW", "phone": "13528492952", "user_type": 2, "status": 2 }
  store.commit('LANGUAGE_INIT_DATA');
  if (!loggedUser) {
    if (route.name != 'login') {
      if (route.name)
        return redirect(`/login?redirect=${route.name}`)
      else
        return redirect(`/login`)
    } else {
      
    }
  } else {
    if (route.name === 'login') {
      return redirect(`/overview`)
    }
  }
}
