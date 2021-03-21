import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Gatsby + Node.js (TypeScript) API</title>
      </Helmet>
      <h1>Gatsby + Node.js (TypeScript) API</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
       a secret by <a href="https://orphic.xyz">Orphic Inc</a>, coming soon
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Andrew Garfield&#39;s stunt double on set next to Tom Holland’s stunt double <a href="https://twitter.com/hashtag/SpiderManNoWayHome?src=hash&amp;ref_src=twsrc%5Etfw">#SpiderManNoWayHome</a> <a href="https://twitter.com/hashtag/spiderverse?src=hash&amp;ref_src=twsrc%5Etfw">#spiderverse</a> <a href="https://twitter.com/hashtag/marvel?src=hash&amp;ref_src=twsrc%5Etfw">#marvel</a> <a href="https://twitter.com/hashtag/SpiderMan?src=hash&amp;ref_src=twsrc%5Etfw">#SpiderMan</a> <a href="https://t.co/i5hJKtQ2MF">pic.twitter.com/i5hJKtQ2MF</a></p>&mdash; Simon Moore (@simonmoore2110) <a href="https://twitter.com/simonmoore2110/status/1372916752615665665?ref_src=twsrc%5Etfw">March 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </main>
  );
}

export default Index;
