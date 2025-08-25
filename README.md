# monitor
# Uptime Monitor for waaxool.com

This project uses **GitHub Actions** + **GitHub Pages** to monitor `http://waaxool.com/` 24/7 and record **only downtime events**.

## How it works
- GitHub Actions pings `http://waaxool.com/` every 5 minutes.
- If it's down (timeout or non-200/300 HTTP code), it logs the event in `data/downtime.csv`.
- The static site (index.html) displays all recorded downtime.

## Deployment
1. Create a new GitHub repository and upload these files (or push via git).
2. Go to **Settings → Pages** and enable GitHub Pages from the `main` branch, root folder.
3. After a few minutes, GitHub Actions will start logging downtimes.
4. Visit your GitHub Pages URL to see the log.

---
⚡ No server required. 100% GitHub-powered.
