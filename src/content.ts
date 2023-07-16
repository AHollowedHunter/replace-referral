const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
  "a[href*='redirectingat.com']"
);

links.forEach((linkElement) => {
  const originalLink = new URL(linkElement.href);
  const destinationLink = originalLink.searchParams.get("url");

  if (destinationLink != null) {
    linkElement.href = destinationLink;
    linkElement.innerHTML = "🔁" + linkElement.innerHTML;
  }
});
