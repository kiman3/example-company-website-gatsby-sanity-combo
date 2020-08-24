import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'
import classNames from 'classnames';

import styles from './project.module.css'

function Project (props) {
  const { _rawBody, title, typology, categories, mainImage, members, publishedAt, relatedProjects } = props;

  const titleStyles = classNames(
    {[styles.title]: true, 'moveableY': true}
  )

  document.addEventListener('mousemove', function(e){
    const moveableY = document.querySelectorAll('.moveableY');
    for (let i = 0; i < moveableY.length; i++) {
      moveableY[i].style.transform = 'translate(' + e.clientX + 'px ,' + e.clientY + 'px)';
      moveableY[i].style.opacity = '1';
    }
  });

  return (
    <article className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.homeLink} to='/' activeClassName="active"><span>&larr;</span> Index</Link>
          <h1 className={styles.subTitle}>{title}</h1>
          <div>{typology}</div>
          <div>{format(new Date(publishedAt), 'YYYY')}</div>
          <div>{typology}</div>
        </div>
      </header>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
          <div className={styles.clip}>
            <div className={titleStyles}><span>{title}</span></div>
          </div>
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && <RoleList items={members} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Project
