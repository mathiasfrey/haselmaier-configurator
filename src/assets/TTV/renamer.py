
import os
from subprocess import call

dir = 'TTV.LE'
for orig in os.listdir(dir):
    target = orig.replace('R', '')
    target = target.replace('TTV.', '')
    target = target.replace('T', '')
    target = 'TTV.' + target
    print(orig, '>', target)
    cmd = 'mv %s/%s %s/%s' % (dir, orig, dir, target)
    print(cmd)
    # call(c.split())
