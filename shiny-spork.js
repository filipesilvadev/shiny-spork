const table = document.querySelector('table');
const rows = document.querySelectorAll('table tbody tr');

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  let domain = row.querySelector('.cell-fqdn').innerText;
  let status = row.querySelector('.cell-status').innerText;

  console.log(`${domain} -> ${status}`);

}