import React, { createElement } from 'react';
import styles from './Prologue.less';
import ButtonSkip from '@/components/ButtonSkip';
import Switchers from '@/components/SceneSwitchers';

const bars_count = 13;
const bars_list = new Array(bars_count).fill(0);

const switcher_count = 5;
const switcher_list = new Array(switcher_count).fill(0);

const title_count = 7;
const title_list = new Array(title_count).fill(0);

let vars = new Map();
for (let style in styles) {
  if (style.startsWith('var-')) {
    let splitIdx: number = style.lastIndexOf('-');
    vars.set(style.substr(4, splitIdx - 4), style.substr(splitIdx + 1));
  }
}

export default () => {
  return (
    <div className={styles.container_prologue}>
      <div className={styles.mask}>
        <div className={styles.bars}>
          {bars_list.map((item, idx) => (
            <div key={idx}>
              <div
                className={
                  styles.left_bar + ' ' + styles['left_bar_' + (idx + 1)]
                }
              />
              <div
                className={
                  styles.left_bar + ' ' + styles['left_bar_follow_' + (idx + 1)]
                }
              />
              <div
                className={
                  styles.right_bar + ' ' + styles['right_bar_' + (idx + 1)]
                }
              />
              <div
                className={
                  styles.right_bar +
                  ' ' +
                  styles['right_bar_follow_' + (idx + 1)]
                }
              />
            </div>
          ))}
          <div className={styles.patch_bar}></div>
        </div>
        <div className={styles.container_welcome}>
          <div className={styles.welcome}></div>
        </div>
        <Switchers
          count={4}
          dur={vars.get('dur-switcher')}
          delay={vars.get('delay-switcher')}
          gap={vars.get('dur-gap-switcher')}
          colors={[]}
          shape={'square'}
          type={'normal'}
          onAnimationEnd={() => {}}
        />
        <div className={styles.container_title}>
          <div className={styles.title_bg}>
            {title_list.map((item, idx) => (
              <div className={styles['title_' + (idx + 1)]} key={idx} />
            ))}
          </div>
        </div>
        <div className={styles.container_borders}>
          <div className={styles.border_left}></div>
          <div className={styles.border_righer}></div>
        </div>
        <div className={styles.container_skip}>
          <ButtonSkip skipTo="Home" size={0.75} />
        </div>
        <div id={styles.vars}></div>
      </div>
    </div>
  );
};
