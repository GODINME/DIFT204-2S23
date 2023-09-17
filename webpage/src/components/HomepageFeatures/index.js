import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Week One',
    Svg: require('@site/static/img/wk1.svg').default,
    description: (
      <>
        <ul>
          <li>
            <a href='https://docs.google.com/presentation/d/1GTUsUh-MhfGYH49um6h-nQMv_uD3Da0uNeSwb9TKfHI/edit?usp=sharing' target='_blank' >DSA1 Slide: Introduction</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1V-pOBVcg80AbNsl6lxi0XzGvsRfM6KUzoHO4Y2l1CqY/edit?usp=sharing' target='_blank' >DSA2 Slide: List ADT Case Study</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1wsKa-1t9xDL7K71-ECB-ySiO94hqAOB_QmxJQpmI1b0/edit?usp=sharing' target='_blank' >DSA3 Slide: ADT Implementation</a>
          </li>
          <li>
            <a href='https://doc.rust-lang.org/book/' target='_blank' >Tutorials: The Rust Programming Language</a>
          </li>
          <li>
            <a href='https://doc.rust-lang.org/std/collections/index.html' target='_blank' >Rust Standard Library ADT Implementation</a>
          </li>
          <li>
            <a href='https://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html' target='_blank' >Java Standard Library ADT Implementation</a>
          </li>
          <li>
            <a href='https://docs.python.org/3/tutorial/datastructures.html' target='_blank' >Python Standard Library ADT Implementation</a>
          </li>
          <li>
            <a href='https://pkg.go.dev/github.com/golang-collections/go-datastructures' target='_blank' >Go Standard Library ADT Implementation</a>
          </li>
          <li>
            <a href='https://cplusplus.com/reference/stl/' target='_blank' >C++ Standard Library ADT Implementation</a>
          </li>
          <li>
            <a href='https://cplusplus.com/reference/algorithm/' target='_blank' >C++ Standard Library Algorithms Implementation</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Two',
    Svg: require('@site/static/img/wk2.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://docs.google.com/presentation/d/1RKEiGHx2Hlo8SG0Mk8OO_pNMYxzQ2hNqZCvBRn4yX6U/edit?usp=sharing' target='_blank'>DSA4 Slide: Introduction To Run Time Analysis</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1qIaYnvC2rRKeHThb5TvMZYYJ9nx4amN1FfT_EnTymjQ/edit?usp=sharing' target='_blank'>DSA5 Slide: Big-Oh and Case Analysis</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1tj3tztxJbBL19OK8DZ6VXAtKiEKKhGZKXxVzO_uXm94/edit?usp=sharing' target='_blank'>DSA6 Slide: Analyzing Recursive Code</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Three',
    Svg: require('@site/static/img/wk3.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://docs.google.com/presentation/d/1kSqDtZMJ6F7ydUixGWaNBPmZE1OpYkRcK7rJXIzXJh0/edit?usp=sharing' target='_blank'>DSA7 Slide: Introduction To Hashing</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1eNL9n6H-94jmOcRrb8ChN6PtOVkquf11Osi2Q2jSJO0/edit?usp=sharing' target='_blank'>DSA8 Slide: Collision Resoluction</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1cZ4TFoPdE1HA0BgWqUrBNTsBKdgDRP0Qw-nBFcgpp6A/edit?usp=sharing' target='_blank'>DSA9 Slide: Binary Search Trees</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Four',
    Svg: require('@site/static/img/wk4.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://docs.google.com/presentation/d/1hW-7ba98aNTaKr3nDoHsmsHlm_GWGXxKTfVkdZCbXjA/edit?usp=sharing' target='_blank'>DSA10 Slide:  AVT Trees</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1S60xHWO79s5UMuPccgQUXjRqB2n6F-BYpCn-IwY4XeY/edit?usp=sharing' target='_blank'>DSA11 Slide: Red Black Trees</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1J6mwwCmVzCyXLrSOn8cLfM5ZAEs3SphWwxAscEwuwJE/edit?usp=sharing' target='_blank'>DSA12 Slide: Tries</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Five',
    Svg: require('@site/static/img/wk5.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://docs.google.com/presentation/d/14bbaz5Nau6OKnCLMhGd8qXmoPo3irw-VFJ0MA0CDfIE/edit?usp=sharing' target='_blank'>DSA13 Slide: Heaps</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1OOo98os91X4WIIGoO6ot8sgCvPHvDBXrtig_IJoKY38/edit?usp=sharing' target='_blank'>DSA14 Slide: Heap Array Implementation</a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Six',
    Svg: require('@site/static/img/wk6.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://docs.google.com/presentation/d/12a-yubGDq_Ei7XRmZDO9kC47eDaXyShigzHbeKRvqo4/edit?usp=sharing' target='_blank'>DSA15 Slide: Introduction To Graphs</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1KRjIU89jZKimgTaG11f5UBoodJMs5xD-o8IeW4XV-Ks/edit?usp=sharing' target='_blank'>DSA16 Slide: Graph Traversals Algorithms</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/16joSGMwoeKYhn30bjoo1CxcNP23ELbLvF7OGRR7wlhs/edit?usp=sharing' target='_blank'>DSA17 Slide: Shortest Paths Algorithm</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Seven',
    Svg: require('@site/static/img/wk7.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://docs.google.com/presentation/d/1yRfOY9MO9IopbxxM4JUYn03CThSO6NUyOVsEn2lYz7Y/edit?usp=sharing' target='_blank'>DSA18 Slide: MSTs</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/14WjfYGOhK8br6X02TOSs0kdf8D7VW6EvzGRG3oTpPis/edit?usp=sharing' target='_blank'>DSA19 Slide: DisJoint Sets I</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1_sYDASPJpu-0dPei-WIVQwzOrEjv2lfmVlEnjhsTlC4/edit?usp=sharing' target='_blank'>DSA20 Slide: DisJoint Sets II</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Eight',
    Svg: require('@site/static/img/wk8.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://docs.google.com/presentation/d/1BbuuFkyFwW9BhglTR3im31a16UM9ulKrhO7Kq8sPK5o/edit?usp=sharing' target='_blank'>DSA21 Slide: Sorting I</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1XxaOfDYPN9S8GvDhVctlBMy4UsmE2eksdWw3LWSu0GI/edit?usp=sharing' target='_blank'>DSA22 Slide: Sorting II</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1q445XgeRbHmCnXPzNCHUi0SOgDMi-rkJklAIfh_eWXs/edit?usp=sharing' target='_blank'>DSA23 Slide: Dynamic Programming</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Nine',
    Svg: require('@site/static/img/wk9.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://docs.google.com/presentation/d/1Cp_svrmwUSw4Z5FZdFx53FBxmQLuEtETBr4cEsci4ls/edit?usp=sharing' target='_blank'>DSA24 Slide: Reductions</a>
          </li>
          <li>
            <a href='https://docs.google.com/presentation/d/1VVOAzirfVY34_gs1Tfw5EWYfQq-1dUSbF3ZRp8puZMA/edit?usp=sharing' target='_blank'>DSA25 Slide: P vs NP</a>
          </li>
          <li>
            <a href='https://leetcode.com/' target='_blank'>Problem Solving: Use LeetCode to Solve More Problems</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Ten',
    Svg: require('@site/static/img/wk10.svg').default,
    description: (
      <>
        <ul>
          <li>
            <a href='https://docs.google.com/presentation/d/1VWXt0Lvp8WNaaukjA0KCo-rwynrPV8yDj9VHwIvVwpk/edit?usp=sharing' target='_blank'>DSA26 Slide: Memory and Locality</a>
          </li>
          <li>
            <a href='https://summerofcode.withgoogle.com/' target='_blank'>Career: Start Working on Open Source Projects or build your own project and Start applying for internships and Jobs</a>
          </li>
          
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Eleven',
    Svg: require('@site/static/img/wk11.svg').default,
    description: (
      <>
        Revision week
      </>
    ),
  },
  {
    title: 'Week Twelve',
    Svg: require('@site/static/img/wk12.svg').default,
    description: (
      <>
        Examination Week
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
