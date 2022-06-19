import { writeFileSync } from "fs";
import RSS from "rss";

async function generate() {
  const feed = new RSS({
    title: "Anibal Santos",
    site_url: "https://ansango.com",
    feed_url: "https://ansango.com/feed.xml",
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
