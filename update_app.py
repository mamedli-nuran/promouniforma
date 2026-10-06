import os

path = 'src/App.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the dot
content = content.replace('Promo Uniforma<span className="text-brand-amber">.</span>', 'Promo Uniforma')

# 2. Update the phone links to wa.me (except the button)
# First replace all tel:+ to wa.me
content = content.replace('href={`tel:+${phoneNumber}`}', 'href={`https://wa.me/${phoneNumber}`}')

# Revert the button to tel:
old_button = """            <a 
              href={`https://wa.me/${phoneNumber}`}
              className="bg-brand-navy text-white px-5 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg active:scale-95"
            >
              Zəng Et
            </a>"""
new_button = old_button.replace('https://wa.me/${phoneNumber}', 'tel:+${phoneNumber}')
content = content.replace(old_button, new_button)

# 3. Remove '@' from Instagram handle
content = content.replace('>@promo_uniforma<', '>promo_uniforma<')
content = content.replace(' @promo_uniforma', ' promo_uniforma')

# 4. Modify texts to include "Promo və Tekstil"
content = content.replace('fərdi tekstil həlləri.', 'Promo və Tekstil həlləri.')
content = content.replace('korporativ geyim həlləri', 'Promo və Tekstil həlləri')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
