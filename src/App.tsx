import { useState } from "react";
import Markdown from "react-markdown";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

function App() {
  const [markdown, setMarkdown] = useState<string>("");
  const [collapse, setCollapse] = useState<boolean>(false);
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          paddingLeft: "1rem",
          paddingRight: "1rem",
          background: "white",
          width: "100%",
          borderRadius: "0.75rem",
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
      >
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: "20px" }}>
            Style Markdown with{" "}
            <a href="https://newcss.net/" target="_blank" rel="noreferrer">
              new.css
            </a>
          </h1>
          <button
            type="button"
            style={{ margin: "0.5rem" }}
            onClick={() => setCollapse(!collapse)}
          >
            {collapse ? "▶" : "▼"}
          </button>
        </nav>
        {!collapse && (
          <form>
            <textarea
              style={{ minWidth: "100%", height: "150px" }}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </form>
        )}
      </div>
      <div>
        <Markdown
          remarkPlugins={[remarkToc, remarkGfm]}
          rehypePlugins={[
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "append" }],
          ]}
        >
          {markdown}
        </Markdown>
      </div>
    </>
  );
}

export default App;
