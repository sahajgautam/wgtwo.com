import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import styles from "./styles.module.css"
export default function BlogPostItemHeaderTitle({ className }) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const { permalink, title } = metadata
  const TitleHeading = isBlogPostPage ? "h1" : "h2"
  return (
    <TitleHeading
      className={clsx(
        { [styles.title]: isBlogPostPage },
        { [styles.titleCardView]: !isBlogPostPage },
        className
      )}
      itemProp="headline"
    >
      {isBlogPostPage ? (
        title
      ) : (
        <Link itemProp="url" to={permalink} title={title}>
          {title}
        </Link>
      )}
    </TitleHeading>
  )
}
