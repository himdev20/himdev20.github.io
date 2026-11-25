# himdev20.github.io

Personal academic website of Himanshu Mahale, BS Economic Sciences, IIT Kanpur.

Plain HTML, CSS and JavaScript. No Jekyll and no build step: GitHub Pages serves the files as they are.

```
index.html   Home: about, research interests, research, experience, projects, education, leadership, contact
cv.html      Full CV (prints cleanly; use "Print or save as PDF")
404.html     Page shown for broken links
.nojekyll    Tells GitHub to serve the files directly
```

Each page is self-contained: its styling sits in a `<style>` block in the page's `<head>` and its script just before `</body>`.
If you change the styling, change it in both index.html and cv.html.

## Publish it

1. On GitHub, create a **public** repository named exactly `himdev20.github.io`.
2. Click **Add file → Upload files**, drag in the files from this folder, and commit. The files must sit at the top level of the repository, not inside a subfolder.
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

- **Photo:** create an `assets/img` folder in the repo (Add file → Upload files, then type `assets/img/` before the file name, or upload a folder) and add `prof_pic.jpg` (portrait, roughly 4:5, e.g. 800 × 1000 px). Until then the site shows your initials.
- **PDF CV:** add `assets/cv/Himanshu_Mahale_CV.pdf`, then in `cv.html` uncomment the "Download PDF" button near the top.

## Editing later

- **Add a research paper or project:** in `index.html`, copy one `<article class="entry">` block in the Research or Projects section and edit it. Add the same entry to `cv.html`.
- **Status line** under your name ("Applying to graduate programmes in economics for 2027"): edit or delete it in `index.html` once applications are done.
- **Footer date:** update "Last updated" in both pages when you make changes.
- **Colours:** edit the variables at the top of the `<style>` block (`--accent` is the green), in both pages.
