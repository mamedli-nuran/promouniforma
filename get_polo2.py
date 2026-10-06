import urllib.request, re, json
url = 'https://html.duckduckgo.com/html/?q=site:pexels.com+polo+shirt'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'pexels-photo-(\d+)\.jpeg', html)
    print("Found IDs:", list(set(matches))[:5])
except Exception as e:
    print(e)
