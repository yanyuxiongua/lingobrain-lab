document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
      toggle.textContent = expanded ? 'CLOSE' : 'MENU';
    });
  }

  // Publications filter (only present on publications.html)
  var filterBtns = document.querySelectorAll('.filter-btn');
  var pubItems = document.querySelectorAll('.pub-item');
  if (filterBtns.length && pubItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        pubItems.forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-year') === filter) {
            item.style.display = 'grid';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});
