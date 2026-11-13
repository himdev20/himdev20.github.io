# Himanshu Mahale — personal academic website

Plain HTML, CSS and JavaScript. No Jekyll, no build step: GitHub Pages serves the files as they are.

```
index.html              Home page: about, interests, research, experience, education, contact
cv.html                 Web CV (prints cleanly to PDF from the browser)
404.html                Page shown for broken links
assets/css/style.css    All styling. Colours and fonts are the variables at the top
assets/js/main.js       Dark mode, mobile menu, copy-email button
assets/img/             favicon.svg, and put prof_pic.jpg here
assets/cv/              Put Himanshu_Mahale_CV.pdf here
.nojekyll               Tells GitHub to serve the files directly
```

## Put it online (about 5 minutes)

1. On GitHub, create a **public** repository named exactly `YOUR-GITHUB-USERNAME.github.io`.
2. Click **Add file → Upload files**, drag in everything from this folder (including the `assets` folder and `.nojekyll`), and commit.
   - `.nojekyll` is a hidden file. If your file browser hides it, create it on GitHub instead: **Add file → Create new file**, name it `.nojekyll`, leave it empty, commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at `https://YOUR-GITHUB-USERNAME.github.io/`.

## Before you send the link to anyone

Search the files for these and replace them:

| Find | Replace with | Files |
|---|---|---|
| `yourname@iitk.ac.in` | your IITK email | index.html, cv.html |
| `YOUR-GITHUB-USERNAME` | your GitHub username | index.html, cv.html |
| `YOUR-LINKEDIN` | your LinkedIn handle | index.html |
| anything in `[square brackets]` | your real details (dates, supervisors, CPI, abstracts, coursework) | index.html, cv.html |

Then add:

- `assets/img/prof_pic.jpg`: a portrait photo, roughly 4:5 (for example 800 × 1000 px). Until it exists, the site shows your initials.
- `assets/cv/Himanshu_Mahale_CV.pdf`: your PDF CV, for the Download button.

Also check: the status line in the hero ("Applying to graduate programmes in economics for 2027"), and the start year 2023 under Education.

## Editing later

- **Add a research project:** in `index.html`, copy one `<article class="entry">` block in the Research section and edit it. Uncomment the `Paper (PDF)` / `Code` links when you have files to point to (put papers in `assets/papers/`).
- **Add Google Scholar:** uncomment the Scholar line in the Contact section.
- **Change colours:** edit the variables at the top of `style.css` (`--accent` is the green).
- **Update the footer date** ("Last updated") when you make changes. Committees notice stale pages.

## Optional: use a custom domain

Buy a domain, then in **Settings → Pages → Custom domain** enter it and follow GitHub's DNS instructions.
