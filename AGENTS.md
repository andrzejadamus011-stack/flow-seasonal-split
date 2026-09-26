<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep `deploy/` (static HTML/CSS/vanilla JS for shared hosting) in sync after every site change: run scripts/static-export capture.py, capture2.py, build.py (script.js is hand-written). Why: user hosts on standard FTP hosting without Node.
