"use client";

import { useEffect, useState } from "react";
import { createHighlighter } from "shiki";

type CodeBlockProps = {
  code: string;
  language: string;
};

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    let mounted = true;

    async function highlight() {
      const highlighter = await createHighlighter({
        themes: ["github-dark"],
        langs: [language, "plaintext"],
      });

      const highlighted = highlighter.codeToHtml(
        code,
        { lang: language, theme: "github-dark" }
      );

      if (mounted) setHtml(highlighted);
    }

    highlight();

    return () => {
      mounted = false;
    };
  }, [code, language]);

  return (
    <div
      className="overflow-auto rounded-xl bg-black/70 p-4 text-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
