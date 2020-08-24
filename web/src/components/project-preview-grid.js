import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'

function move(elem){
  document.addEventListener('mousemove', function(e){
    const moveable = document.querySelectorAll(elem);
    moveable.style = 'translate(' + e.clientX + 'px ,' + e.clientY + 'px)';
  });
}
move('moveable');

function ProjectPreviewGrid (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.ul}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      <div className={styles.axis}>
        <span className={styles.xStart}>Past</span>
        <span className={styles.xEnd}>Present</span>
        <span className={styles.yStart}>Digital</span>
        <span className={styles.yEnd}>Analog</span>
      </div>
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  nodes: [],
}

export default ProjectPreviewGrid
