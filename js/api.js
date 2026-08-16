window.ELG_API = {
  base: '/api',

  async request(path, options = {}) {
    const url = this.base + path;
    const opts = {
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options
    };
    if (opts.body && typeof opts.body === 'object') {
      opts.body = JSON.stringify(opts.body);
    }
    const res = await fetch(url, opts);
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const err = new Error(data?.error || 'Request failed');
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return { status: res.status, body: data };
  },

  async getVehicles(params = {}) {
    const q = new URLSearchParams(params).toString();
    return this.request('/vehicles' + (q ? '?'+q : ''));
  },

  async searchVehicles(query) {
    return this.request(`/vehicles?search=${encodeURIComponent(query)}`);
  },

  async getVehicle(id) {
    return this.request(`/vehicles/${id}`);
  },

  async subscribe(email, source = 'website') {
    return this.request('/newsletter', { method: 'POST', body: { email, source } });
  },

  async submitInquiry(data) {
    return this.request('/contact', { method: 'POST', body: data });
  },

  async adminLogin(username, password) {
    return this.request('/admin/login', { method: 'POST', body: { username, password } });
  },

  async adminStats(token) {
    return this.request('/admin/stats', { headers: { Authorization: `Bearer ${token}` } });
  },

  async adminVehicles(token, opts = {}) {
    return this.request('/vehicles' + (opts.qs ? '?'+new URLSearchParams(opts.qs) : ''), { headers: { Authorization: `Bearer ${token}` } });
  },

  async adminCreateVehicle(token, data) {
    return this.request('/vehicles', { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: data });
  },

  async adminUpdateVehicle(token, id, data) {
    return this.request(`/vehicles/${id}`, { method: 'PUT', headers: { Authorization: `Bearer ${token}` }, body: data });
  },

  async adminDeleteVehicle(token, id) {
    return this.request(`/vehicles/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
  },

  async adminGetInquiries(token) {
    return this.request('/admin/inquiries', { headers: { Authorization: `Bearer ${token}` } });
  },

  async adminUpdateInquiryStatus(token, id, status) {
    return this.request(`/admin/inquiries/${id}/status`, { method: 'PUT', headers: { Authorization: `Bearer ${token}` }, body: { status } });
  },

  async adminGetSubscribers(token) {
    return this.request('/admin/subscribers', { headers: { Authorization: `Bearer ${token}` } });
  }
};
