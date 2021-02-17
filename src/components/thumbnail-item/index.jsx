import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    {
      node.frontmatter.thumbnail && (
        <div className="image">
          <img src={node.frontmatter.thumbnail.childImageSharp.fluid.src} alt={node.frontmatter.title}/>
        </div>
      )
    }
    <div className="date">{node.frontmatter.date}</div>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)
