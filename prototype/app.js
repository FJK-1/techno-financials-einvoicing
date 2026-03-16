// ===== SCREEN NAVIGATION =====
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// ===== PAGE NAVIGATION (within app shell) =====
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');

  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(n => {
    const onclick = n.getAttribute('onclick');
    if (onclick && onclick.includes("'" + pageId + "'")) n.classList.add('active');
  });

  // Update breadcrumb
  const names = {
    'dashboard': 'Dashboard', 'invoices': 'Invoices', 'invoice-create': 'Invoices > New Invoice',
    'credit-notes': 'Credit Notes', 'sellers': 'Master Data > Sellers', 'buyers': 'Master Data > Buyers',
    'items': 'Master Data > Items', 'reports': 'Reports & Analytics', 'archive': 'Archive', 'settings': 'Settings'
  };
  document.getElementById('breadcrumb').innerHTML = '<span>' + (names[pageId] || pageId) + '</span>';
}

// ===== SIDEBAR TOGGLE =====
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainArea = sidebar.nextElementSibling;
  sidebar.classList.toggle('collapsed');
  mainArea.classList.toggle('expanded');
}

// ===== INVOICE STEPPER =====
function showInvoiceStep(num) {
  document.querySelectorAll('.invoice-step').forEach(s => s.classList.remove('active'));
  const step = document.getElementById('inv-step-' + num);
  if (step) step.classList.add('active');

  // Update stepper visual
  const steps = document.querySelectorAll('.step');
  const lines = document.querySelectorAll('.step-line');
  steps.forEach((s, i) => {
    s.classList.remove('active', 'completed');
    if (i + 1 < num) s.classList.add('active', 'completed');
    else if (i + 1 === num) s.classList.add('active');
  });
  lines.forEach((l, i) => {
    l.classList.remove('active');
    if (i + 1 < num) l.classList.add('active');
  });
}

// ===== OTP AUTO-FOCUS =====
function otpNext(el) {
  if (el.value.length === 1 && el.nextElementSibling) {
    el.nextElementSibling.focus();
  }
}

// ===== SCROLL TO SECTION (Invoice form) =====
function scrollToSection(id, el) {
  event.preventDefault();
  var target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.querySelectorAll('.section-nav-item').forEach(function(n) { n.classList.remove('active'); });
  if (el) el.classList.add('active');
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    const search = document.querySelector('.header-search input');
    if (search) search.focus();
  }
});
