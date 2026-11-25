# himdev20.github.io

Personal academic website of Himanshu Mahale, B.S. Economic Sciences, IIT Kanpur.

Plain HTML with no build step. Each page carries its own styling and script.

```
index.html                         Home: hero, at a glance, about, research, experience, projects preview, education, toolkit, contact
projects.html                      All projects, filterable by Research / Coursework / Industry / Other
cv.html                            Two-column CV with "Download PDF" and "Print"
404.html                           Page shown for broken links
.nojekyll                          Tells GitHub to serve the files as they are
assets/img/prof_pic.jpg            YOUR PHOTO goes here (add it)
assets/cv/Himanshu_Mahale_CV.pdf   YOUR PDF CV goes here (add it)
```

## Your photo and PDF CV

- **Photo:** name it exactly `prof_pic.jpg` and put it in `assets/img/`. It then appears in three places automatically: inside the glowing orb on the home page, in the photo card in the About section, and next to your name on the CV page. A portrait or square photo with your face in the upper half works best (at least 800 px wide). Until it exists, the site shows "HM".
- **PDF CV:** name it exactly `Himanshu_Mahale_CV.pdf` and put it in `assets/cv/`. The "Download PDF" buttons on the CV page link to it.

File names are case-sensitive on GitHub: `prof_pic.jpg`, not `Prof_Pic.JPG` or `prof_pic.jpeg`.

To add them on GitHub's website: **Add file → Upload files**, then drag the whole `assets` folder in (GitHub keeps the folder structure), or open the folder in the repository and upload the file there.

## Publish it

1. Unzip the download.
2. In the repository `himdev20.github.io`, delete the old files.
3. **Add file → Upload files**, and drag in everything from inside the unzipped folder: the four `.html` files, `.nojekyll`, `README.md` and the `assets` folder. `index.html` must sit at the top level of the repository, not inside another folder.
4. **Settings → Pages**: *Deploy from a branch*, branch `main`, folder `/ (root)`.
5. Open https://himdev20.github.io and hard-refresh (Ctrl+Shift+R).

## Editing

- **Add a project:** in `projects.html`, copy one `<article class="glass pj">` block. Set `data-kind` to `research`, `course`, `industry` or `other`; the filter counts update automatically. Give it a unique `id` so you can link to it (for example `projects.html#ujjwala`).
- **Home page projects preview:** the three cards in the Projects section of `index.html` link to entries on `projects.html`.
- **Experience entry:** copy an `<li class="tl-item">` block in `index.html`; `data-kind` is `work` or `leadership`.
- **Status line** ("Applying for PhD programmes and pre-doctoral roles, 2027") is at the top of the hero in `index.html`.
- **Colours:** the variables at the top of each page's `<style>` block.
