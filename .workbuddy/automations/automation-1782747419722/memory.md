# Weekly LinkedIn + WeChat JSON Update — Execution Log

## 2026-07-15 (automation config update)
- Updated automation prompt to include: (1) cover field in JSON format specs, (2) wechat-article-search skill usage, (3) deduplication instructions, (4) memory.md read step, (5) no-commit-if-no-changes rule.
- Fixed RRULE timezone: BYHOUR changed from 9 (UTC → 5PM HKT) to 1 (UTC → 9AM HKT).
- Next run: Monday Jul 20, 2026 at 9:00 AM HKT.

## 2026-07-15
- Pulled latest from GitHub (073bcb8): Fred made major manual updates to the site.
- Key changes pulled: i18n.js (EN/中文 toggle), llms.txt (LLM/SEO), covers/ (12 article covers), logos/ (13 institution logos), photos/ (13 event photos), carousel, galaxy background, structured data (Person + FAQPage), interstellar hover effects, mobile hamburger, hero portrait rotator.
- Vercel deployment confirmed live at fred-li.vercel.app.
- No automated content additions this run — Fred updated code directly on GitHub.

## 2026-07-27
- LinkedIn: no new posts found after Jun 29, 2026 — LinkedIn login wall blocks access to Fred's personal post URLs. Saw guest-view snippets (LEAP East activity Jul 8-10, HKU graduation congrats) but could not extract actual post URNs.
- WeChat: searched via wechat-article-search skill (Sogou). Found 2 new articles from 李佛创投笔记 not in file:
  - 梅西投了李飞飞,不过这很正常 — Jul 25, 2026 (opinion)
  - 写给创投人的笔记:这个世界,就是需要「狂人」 — Jul 21, 2026 (opinion)
- Used Python json module to edit wechat-articles.json (Edit tool corrupts Chinese quotation marks U+201C/U+201D to ASCII U+0022, breaking JSON).
- Rebased onto remote cef5f32 (Fred's background rebuild commit) before pushing.
- Committed and pushed: `7aec5c6` "Weekly content update [Jul 27, 2026]".
- Note: .workbuddy/ files got committed via `git add -A` — consider adding .workbuddy/ to .gitignore.
- Note: Sogou intermediate URLs (src=11&timestamp=...) may expire; existing entries use direct WeChat URLs (__biz=... format).

## 2026-07-06
- Searched LinkedIn for fredkli recent activity; no new posts found after Jun 29, 2026 (LinkedIn login wall limits visibility).
- Searched 李佛创投笔记 WeChat publication via Sogou WeChat search.
- Added 2 new WeChat articles to `wechat-articles.json`:
  - 为什么你要写公众号? — Jun 28, 2026
  - 世界大学排名从44升至33,港科大的魅力到底在哪 — Jun 25, 2026
- Committed and pushed to GitHub: `7f8f9a6` "Weekly content update [Jul 6, 2026]".
- NOTE: These 2 entries were later overwritten by Fred's manual push (073bcb8, Jul 15). Not re-added in Jul 27 run as they did not appear in Sogou search results.
