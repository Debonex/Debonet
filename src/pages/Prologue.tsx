import React from 'react';
import styles from './Prologue.less';
import ButtonSkip from '@/components/ButtonSkip';

const bars_count = 13;
const bars_list = new Array(bars_count).fill(0);

const switcher_count = 5;
const switcher_list = new Array(switcher_count).fill(0);

const title_count = 7;
const title_list = new Array(title_count).fill(0);

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
        <div className={styles.container_switchers}>
          {switcher_list.map((item, idx) => (
            <div
              className={
                styles.switcher + ' ' + styles['switcher_' + (idx + 1)]
              }
              key={idx}
            />
          ))}
        </div>
        <div className={styles.container_title}>
          <div className={styles.title_bg}>
            {title_list.map((item, idx) => (
              <div className={styles['title_' + (idx + 1)]} />
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
      </div>
    </div>
  );
};
