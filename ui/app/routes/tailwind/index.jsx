import Navbar from "~/components/navbar.jsx"
import Page from "~/components/page.jsx"

import {items, prefixes} from "~/utils/consts.js"

export default function Index() {
  return (
    <div className="bg-white">
      <Navbar menuItems={items} className="mb-12" />
      <Page prefixes={prefixes} />
    </div>
  );
}

