base = r'C:\Users\seanl\Documents\Work\MAG Website Dev'

fixes = {
    'connect.html': (
        '          <li><a href="connect.html" aria-current="page">Connect</a></li>\n        </ul>',
        '          <li><a href="connect.html" aria-current="page">Connect</a></li>\n          <li><a href="connect.html" class="btn btn--primary">Free Consultation</a></li>\n        </ul>'
    ),
    'consultation.html': (
        '          <li><a href="connect.html">Connect</a></li>\n        </ul>',
        '          <li><a href="connect.html">Connect</a></li>\n          <li><a href="connect.html" class="btn btn--primary">Free Consultation</a></li>\n        </ul>'
    ),
}

for fname, (old, new) in fixes.items():
    path = base + '\\' + fname
    with open(path, encoding='utf-8') as f:
        html = f.read()
    if old in html:
        html = html.replace(old, new)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f'Fixed: {fname}')
    else:
        print(f'WARN: pattern not found in {fname}')
