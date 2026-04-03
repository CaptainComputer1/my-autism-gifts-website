base = r'C:\Users\seanl\Documents\Work\MAG Website Dev'
with open(base + '\\index.html', encoding='utf-8') as fh:
    html = fh.read()
# Find the nav section by looking for primary-nav
idx = html.find('id="primary-nav"')
print("index.html nav block:")
print(html[idx-10:idx+500])
