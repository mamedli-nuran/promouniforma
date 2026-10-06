import urllib.request, re
url = 'https://en.wikipedia.org/wiki/Polo_shirt'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
matches = re.findall(r'//upload\.wikimedia\.org/wikipedia/commons/[^\"\' ]+', html)
for m in list(set(matches))[:5]: print('https:' + m)
