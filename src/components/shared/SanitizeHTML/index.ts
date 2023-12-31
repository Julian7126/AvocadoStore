import { createElement, HTMLAttributes } from 'react';
import sanitize from 'sanitize-html';

interface SanitizeHTMLProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
  tag: string;
}

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: ["b", "i", "em", "strong"], 
  });

  return createElement(tag, { ...rest, dangerouslySetInnerHTML: { __html: sanitizedHTML } });
};
