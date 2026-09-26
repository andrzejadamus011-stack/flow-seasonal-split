import asyncio, json
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(headless=True)
    pg=await b.new_page(viewport={"width":390,"height":844})
    await pg.goto("http://localhost:8080/rowery", wait_until="networkidle")
    await pg.wait_for_timeout(1000)
    await pg.get_by_role("button",name="Otwórz menu").click()
    menu=await pg.evaluate("document.querySelector('header > div.border-t').outerHTML")
    x=await pg.evaluate("document.querySelector('header button[aria-expanded]').innerHTML")
    for t in await pg.query_selector_all("button[data-state=closed][data-orientation=vertical]"):
      await t.click()
    await pg.wait_for_timeout(500)
    await pg.get_by_role("button",name="Zamknij menu").click()
    await pg.wait_for_timeout(300)
    body=await pg.evaluate("()=>{document.querySelectorAll('script').forEach(s=>s.remove());return document.body.innerHTML}")
    json.dump({"menu":menu,"x":x,"body":body},open("/dev-server/scripts/static-export/rowery.json","w"))
    print(len(menu),len(body))
    await b.close()
asyncio.run(main())
