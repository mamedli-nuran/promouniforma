import urllib.request, re
url = 'https://html.duckduckgo.com/html/?q=site:images.unsplash.com+polo'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'images\.unsplash\.com/photo-([a-zA-Z0-9-]+)', html)
    print("Found IDs:", list(set(matches))[:5])
except Exception as e:
    print(e)
