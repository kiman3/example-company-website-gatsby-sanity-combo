import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import classNames from 'classnames';
import BlockText from './block-text.js'

import styles from './project-preview.module.css'
import { title2 } from './typography.module.css'


function ProjectPreview (props) {
  const projectPreviewClasses = classNames(
    {[styles.leadMediaThumb]: true, 'moveable': true}
  )

  document.addEventListener('mousemove', function(e){
    const moveable = document.querySelectorAll('.moveable');
    for (let i = 0; i < moveable.length; i++) {
      moveable[i].style.transform = 'translate(' + e.clientX + 'px ,' + e.clientY + 'px)';
    }
  });

  return (
    <Link className={styles.root} style={{left: props.xPos + '%', top: 'calc(' + props.yPos + '% - 8px)'}} to={`/project/${props.slug.current}`}>
      <div className={styles.rootMeta}>
        <h2 className={cn(title2, styles.title)}>{props.title}</h2>
        {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
      </div>
      <div className={projectPreviewClasses}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(400)
              .height(Math.floor((10 / 15) * 400))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
    </Link>
  )
}

export default ProjectPreview
