/*
 * @Description: 
 * @Author: wuhaoran
 * @Date: 2022-01-12 15:52:04
 * @LastEditors: wuhaoran
 * @LastEditTime: 2022-03-14 10:57:16
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description?: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '算法学习',
    image: '/img/undraw_docusaurus_mountain.svg',
  },
  {
    title: '机器学习',
    image: '/img/undraw_docusaurus_tree.svg',
  },
  {
    title: '语言学习',
    image: '/img/undraw_docusaurus_react.svg',
    // image: '/img/C++.svg',
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className="relative inline-block">
          <img className={styles.featureSvg} alt={title} src={image} />
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
