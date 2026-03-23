# Clover Scents Deployment Steps (Fresh Start)

This guide starts from scratch and sets up automatic deploys from GitHub to Vercel.

## 1. Go to the project folder

```bash
cd /home/lee-tadiwar/Documents/Cloverworks/perfume-site
```

## 2. Initialize git (only if needed)

Run these only if this folder is not already a git repo:

```bash
git init
git branch -M main
```

## 3. Commit your project files

```bash
git add .
git commit -m "Initial Clover Scents website"
```

## 4. Create a GitHub repository

1. Open GitHub.
2. Create a new repo, for example: `clover-scents`.
3. Do not add README/license/gitignore from GitHub if your local project already has files.

## 5. Connect local repo to GitHub and push

Replace `<your-username>` with your GitHub username:

```bash
git remote add origin https://github.com/<your-username>/clover-scents.git
git push -u origin main
```

If a remote already exists:

```bash
git remote set-url origin https://github.com/<your-username>/clover-scents.git
git push -u origin main
```

## 6. Import the repo into Vercel

1. Go to `https://vercel.com/new`.
2. Click **Import Git Repository**.
3. Select your `clover-scents` repo.
4. Confirm:
   - Framework Preset: `Next.js`
   - Root Directory: `.` (project root)
5. Click **Deploy**.

## 7. Confirm automatic deployments

After first deploy:

1. Every push to `main` triggers a production deploy.
2. Every pull request gets a preview deploy automatically.

## 8. Update metadata URL (important)

In `src/app/layout.tsx`, set `metadataBase` to your real domain:

```ts
metadataBase: new URL("https://your-domain.vercel.app"),
```

Then push the change:

```bash
git add src/app/layout.tsx
git commit -m "Update metadata base URL"
git push
```

## 9. Optional: Connect custom domain

1. Open your project in Vercel.
2. Go to **Settings -> Domains**.
3. Add your custom domain.
4. Follow Vercel DNS instructions.

## 10. Normal workflow from now on

```bash
git add .
git commit -m "Describe your changes"
git push
```

Vercel deploys automatically after each push.
