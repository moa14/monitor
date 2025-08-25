async function loadCSV() {
  const res = await fetch('data/downtime.csv', { cache: 'no-store' });
  if (!res.ok) {
    document.getElementById('logBody').innerHTML = '<tr><td colspan="4">No downtime recorded yet.</td></tr>';
    document.getElementById('totalEvents').textContent = '0';
    document.getElementById('lastDowntime').textContent = '—';
    return;
  }
  const text = await res.text();
  const rows = text.trim().split('\n');
  if (rows.length <= 1) {
    document.getElementById('logBody').innerHTML = '<tr><td colspan="4">No downtime recorded yet.</td></tr>';
    document.getElementById('totalEvents').textContent = '0';
    document.getElementById('lastDowntime').textContent = '—';
    return;
  }
  const data = rows.slice(1).map(line => line.split(',')).filter(cols => cols.length >= 4);
  data.reverse();

  const tbody = document.getElementById('logBody');
  tbody.innerHTML = '';
  for (const [ts, code, rt, reason] of data) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${ts}</td><td>${code}</td><td>${rt}</td><td>${reason}</td>`;
    tbody.appendChild(tr);
  }

  document.getElementById('totalEvents').textContent = data.length.toString();
  document.getElementById('lastDowntime').textContent = data[0]?.[0] || '—';
}

loadCSV().catch(err => {
  console.error(err);
  document.getElementById('logBody').innerHTML = '<tr><td colspan="4">Failed to load log.</td></tr>';
});