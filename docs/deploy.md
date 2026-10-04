# GitHub + hosting

## 1. Put the project on GitHub
1. Create a GitHub account if you don't have one.
2. In the project folder: `git init`, `git add .`, `git commit -m "chore: initial commit"`.
3. Create the repository and push. Easiest with GitHub CLI: `gh repo create portfolio --private --source=. --push`.
   Without the CLI: create an empty repository on github.com/new and follow the push commands it shows.
4. Private is fine for hosting and keeps unfinished work and photos out of public view. Make it public later if you want.

## 2. Connect it to Vercel
1. Go to vercel.com and sign in with your GitHub account.
2. Add New, then Project. Import the repository. Vercel detects Next.js. Click Deploy.
3. From then on:
   - Every push to `main` publishes the production site.
   - Every other branch or pull request gets its own preview URL. Use that to review changes before merging.
4. A custom domain is optional and is the only part that costs money.

## 3. Important: Vercel's free plan is for non-commercial use
Vercel's free Hobby plan is restricted to personal, non-commercial use. Several sources I checked say Vercel reads "commercial" broadly: any deployment used for someone's financial gain, including a freelancer's site. A portfolio you use to find a job is usually treated as personal, but if the site advertises paid services (landing pages, MVPs) it can fall into the commercial category. Read Vercel's Fair Use Guidelines and Terms of Service yourself before deciding. I am not a lawyer.

If you want to avoid the gray area, the project is set up as a static export, so it also works on other hosts. Netlify and Cloudflare Pages are the usual alternatives. Check each one's current terms for commercial use on their free plans.

## 4. Simple workflow with Claude Code
1. Ask Claude Code for a change on a new branch.
2. It runs lint and build, commits and pushes the branch.
3. Open the preview URL, review on your phone too.
4. Merge to `main` when you like it. The site updates by itself.

## 5. Before publishing
- No bracketed placeholders left in content.
- Screenshots use sample data and Fedes approved them.
- Photos you commit to a public repository become public. Keep the repo private until you are sure.
