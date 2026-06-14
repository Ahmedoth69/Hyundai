# Hyundai Manouba

Static responsive site for Hyundai Manouba.

## Status
- Responsive/mobile-friendly CSS is applied.
- Reservation form sends email automatically via EmailJS.

## Deploying publicly
To get a real public URL, host this folder on a static web host.

### Option 1: GitHub Pages
1. Create a GitHub repository.
2. From this project folder:
   - `git init`
   - `git add .`
   - `git commit -m "Initial commit"`
   - `git branch -M main`
   - `git remote add origin https://github.com/<your-user>/<repo>.git`
   - `git push -u origin main`
3. In GitHub repository settings, enable GitHub Pages from the `main` branch.
4. Your site will appear at `https://<your-user>.github.io/<repo>/`.

### Option 2: Netlify
1. Create a Netlify account.
2. Connect your GitHub repo or drag and drop the project folder.
3. Netlify will publish a public URL automatically.

### Option 3: Vercel
1. Create a Vercel account.
2. Import the repository from GitHub.
3. Vercel will deploy and provide a public link.

## Notes
- This workspace currently has no Git repository and `git` is not installed here, so automatic publishing is not available from this environment.
- Make sure your EmailJS service and template IDs are configured correctly in `index.html` and `script.js`.
