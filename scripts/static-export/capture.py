import asyncio, json
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(headless=True)
    pg=await b.new_page(viewport={"width":1280,"height":1800})
    out={}
    for path in ["/","/rowery","/narty","/oklejanie-ppf"]:
      await pg.goto("http://localhost:8080"+path, wait_until="networkidle")
      await pg.wait_for_timeout(1500)
      out[path]=await pg.evaluate("""()=>{
        document.querySelectorAll('script').forEach(s=>s.remove());
        const css=[...document.styleSheets].map(s=>{try{return [...s.cssRules].map(r=>r.cssText).join('\\n')}catch(e){return ''}}).join('\\n');
        const head=[...document.head.querySelectorAll('title,meta[name],meta[property]')].map(e=>e.outerHTML).join('\\n');
        const imgs=[...document.querySelectorAll('img')].map(i=>i.getAttribute('src'));
        return {css, head, body:document.body.innerHTML, imgs};
      }""")
    json.dump(out,open("/dev-server/scripts/static-export/pages.json","w"))
    for k,v in out.items(): print(k,len(v['css']),len(v['body']),v['imgs'])
    await b.close()
asyncio.run(main())
