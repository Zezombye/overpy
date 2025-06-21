#!/usr/bin/python3

import os, json, requests

with open(os.path.expanduser("~/open_vsx.owo"), "r") as f:
    token = f.read().strip()

vsixFile = [f for f in os.listdir(".") if f.endswith(".vsix")]
if len(vsixFile) != 1:
    print("Error: Expected exactly one .vsix file in the current directory.")
    exit(1)
vsixFile = vsixFile[0]

print("Uploading to Open VSX...")

r = requests.post("https://open-vsx.org/api/-/publish?token="+token, data=open(vsixFile, "rb"))

if not r.ok:
    print("Error uploading to Open VSX:", r.status_code, r.text)
    exit(1)

print(r.status_code, r.text)
print("Successfully uploaded to Open VSX")
