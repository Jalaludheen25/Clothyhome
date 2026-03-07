// Clothyhome — Auth Utility
const ClothyAuth = {
  isLoggedIn() { return !!localStorage.getItem('clothyhome_user'); },
  getUser() { const u = localStorage.getItem('clothyhome_user'); return u ? JSON.parse(u) : null; },
  login(name, email) { localStorage.setItem('clothyhome_user', JSON.stringify({ name, email })); },
  logout() { localStorage.removeItem('clothyhome_user'); window.location.href = 'login.html'; },
  requireAuth(redirectBack) {
    if (!this.isLoggedIn()) {
      if (redirectBack) localStorage.setItem('clothyhome_redirect', redirectBack);
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },
  getCartCount() {
    return JSON.parse(localStorage.getItem('clothyhome_cart') || '[]').reduce((a, i) => a + i.qty, 0);
  }
};
