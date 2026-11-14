# himdev20.github.io

Personal academic website of Himanshu Mahale, BS Economic Sciences, IIT Kanpur.

Plain HTML, CSS and JavaScript. No Jekyll and no build step: GitHub Pages serves the files as they are.

```
index.html              Home: about, research interests, research, experience, projects, education, leadership, contact
cv.html                 Full CV (prints cleanly; use "Print or save as PDF")
404.html                Page shown for broken links
assets/css/style.css    All styling. Colours and fonts are the variables at the top
assets/js/main.js       Dark mode, mobile menu, copy-email button
assets/img/favicon.svg  Browser tab icon
.nojekyll               Tells GitHub to serve the files directly
```

## Publish it

1. On GitHub, create a **public** repository named exactly `himdev20.github.io`.
2. Click **Add file → Upload files**, drag in everything from this folder (including the `assets` folder), and commit.
   - `.nojekyll` is a hidden file. If your file browser hides it, create it on GitHub: **Add file → Create new file**, name it `.nojekyll`, leave it empty, commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at https://himdev20.github.io/

Or from a terminal, inside this folder:

```
git init
git add .
git commit -m "Personal website"
git branch -M main
git remote add origin https://github.com/himdev20/himdev20.github.io.git
git push -u origin main
```

## Optional additions

- **Photo:** add `assets/img/prof_pic.jpg` (portrait, roughly 4:5, e.g. 800 × 1000 px). Until then the site shows your initials.
- **PDF CV:** add `assets/cv/Himanshu_Mahale_CV.pdf`, then in `cv.html` uncomment the "Download PDF" button near the top.

## Editing later

- **Add a research paper or project:** in `index.html`, copy one `<article class="entry">` block in the Research or Projects section and edit it. Add the same entry to `cv.html`.
- **Status line** under your name ("Applying to graduate programmes in economics for 2027"): edit or delete it in `index.html` once applications are done.
- **Footer date:** update "Last updated" in both pages when you make changes.
- **Colours:** edit the variables at the top of `style.css` (`--accent` is the green).
