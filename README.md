# Replace Referral [PoC]

Simple Chrome extension to replace known referral links with an included destination URL.

The idea for using this extension is to bypass URLs that may already be blocked via DNS (PiHole, pfBlockerNG) or other network-level protections, by replacing the link when the destination URL is included within the referral link. This won't bypass referral links that don't include the destination URL.

This is currently a Proof of Concept, simply matching a single referral site I came across that was already blocked for me, and automating the task of extracting the destination URL and replacing it. I may develop this further, or not.

Feel free to use or improve; just don't be a d*ck, such as distributing a malicious copy.