import json,re,shutil,os
script=open("/dev-server/deploy/script.js").read()
D="/dev-server/deploy"; shutil.rmtree(D,ignore_errors=True); os.makedirs(D+"/assets/images")
open(D+"/script.js","w").write(script)
pages=json.load(open("/dev-server/scripts/static-export/pages.json")); r=json.load(open("/dev-server/scripts/static-export/rowery.json"))
for f in ["choose-bike.jpg","choose-ski.jpg","flow-logo.png","hero-bike-pro.jpg","hero-ski.jpg","hero-ppf.jpg"]:
  shutil.copy("/dev-server/src/assets/"+f,D+"/assets/images/"+f)
shutil.copy("/dev-server/public/favicon.png",D+"/favicon.png")
open(D+"/robots.txt","w").write("User-agent: *\nAllow: /\n")
css=pages["/"]["css"]
css=re.sub(r"/src/assets/","/assets/images/",css)
open(D+"/styles.css","w").write(css)
def clean(h):
  h=re.sub(r' data-tsd-source="[^"]*"','',h)
  h=h.replace('/src/assets/','/assets/images/')
  h=re.sub(r'href="/rowery"','href="/rowery.html"',h); h=re.sub(r'href="/narty"','href="/narty.html"',h); h=re.sub(r'href="/oklejanie-ppf"','href="/oklejanie-ppf.html"',h); h=re.sub(r'href="/rowery#','href="/rowery.html#',h)
  h=re.sub(r'<vite-error-overlay.*?</vite-error-overlay>','',h,flags=re.S)
  return h
body_r=r["body"]
# mobile menu hidden
body_r=body_r.replace('</nav>','</nav>'+r["menu"].replace('class="border-t','id="mobile-menu" hidden class="border-t',1),1)
# accordion: only first open
import itertools
cnt=itertools.count()
def acc(m):
  n=next(cnt); s=m.group(0)
  if n>0: s=s.replace('data-state="open"','data-state="closed"').replace('aria-expanded="true"','aria-expanded="false"').replace('role="region"','hidden role="region"')
  return s
body_r=re.sub(r'<div data-state="open" data-orientation="vertical" class="border-b border-pro-line"[^>]*>.*?role="region"',acc,body_r,flags=re.S)
body_r=re.sub(r'animate-accordion-(down|up)','',body_r)
pages["/rowery"]["body"]=body_r
menu_ppf=r["menu"].replace('class="border-t','id="mobile-menu" hidden class="border-t',1).replace('href="#','href="/rowery#')
pages["/oklejanie-ppf"]["body"]=pages["/oklejanie-ppf"]["body"].replace('</nav>','</nav>'+menu_ppf,1)
FILES={"/":"index.html","/rowery":"rowery.html","/narty":"narty.html","/oklejanie-ppf":"oklejanie-ppf.html"}
CANON="https://TWOJA-DOMENA.pl"
for k,fn in FILES.items():
  p=pages[k]; head=clean(p["head"])
  url=CANON+("/" if k=="/" else "/"+fn)
  img=CANON+"/assets/images/"+("hero-ppf.jpg" if k=="/oklejanie-ppf" else "hero-ski.jpg" if k=="/narty" else "hero-bike-pro.jpg" if k=="/rowery" else "choose-bike.jpg")
  html=f'''<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
{head}
<link rel="canonical" href="{url}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{img}">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
{clean(p["body"])}
<script src="/script.js" defer></script>
</body>
</html>'''
  open(D+"/"+fn,"w").write(html)
print("ok")
