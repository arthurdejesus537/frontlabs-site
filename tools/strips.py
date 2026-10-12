# python3 tools/strips.py <imagem> <pasta> [altura_fatia=1800] [largura_saida=900]
# Corta um screenshot de página inteira em fatias para revisão visual.
import sys, os
from PIL import Image
src, out = sys.argv[1], sys.argv[2]
h = int(sys.argv[3]) if len(sys.argv) > 3 else 1800
ow = int(sys.argv[4]) if len(sys.argv) > 4 else 900
os.makedirs(out, exist_ok=True)
im = Image.open(src).convert('RGB')
W, H = im.size
base = os.path.splitext(os.path.basename(src))[0]
for i, y in enumerate(range(0, H, h)):
    c = im.crop((0, y, W, min(H, y + h)))
    if W > ow:
        c = c.resize((ow, round(c.height * ow / W)))
    c.save(os.path.join(out, f'{base}-{i + 1:02d}.jpg'), quality=80)
    print(os.path.join(out, f'{base}-{i + 1:02d}.jpg'))
