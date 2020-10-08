import React, { createElement } from 'react';
import { history } from 'umi';
import styles from './Prologue.less';
import ButtonSkip from '@/components/ButtonSkip';
import Switchers from '@/components/SceneSwitchers';
import colorbrewer from '@/libs/colorbrewer';

const bars_count = 13;
const bars_list = new Array(bars_count).fill(0);

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
          colors={[...colorbrewer.Blues['4']].reverse()}
          shape={'square'}
          type={'normal'}
          onAnimationEnd={() => {
            console.log('end');
          }}
        />
        <div className={styles.container_borders}>
          <div className={styles.border_left}></div>
          <div className={styles.border_righer}></div>
        </div>
        <div className={styles.container_bg}>
          <div className={styles.bg_circle}></div>
        </div>
        <div className={styles.container_title}>
          <div className={styles.title_bg}>
            {title_list.map((item, idx) => (
              <div className={styles['title_' + (idx + 1)]} key={idx} />
            ))}
          </div>
        </div>
        <div className={styles.container_skip}>
          <ButtonSkip skipTo="Home" size={0.75} />
        </div>
        <Switchers
          count={4}
          dur={'800ms'}
          delay={vars.get('delay-end')}
          gap={'120ms'}
          colors={[...colorbrewer.Blues['4']].reverse()}
          shape={'square'}
          type={'normal'}
          onAnimationEnd={() => {
            history.push('/Home');
          }}
        />
        <div id={styles.vars}></div>
      </div>
    </div>
  );
};
