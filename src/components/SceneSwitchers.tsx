/**
 * @author Debonex
 * @date 2020-09-24
 * @description animated rectangles. for changing from one scenary to another.
 */

import React, { FC } from 'react';
import styles from '@/less/components/SceneSwitchers.less';

interface SceneSwitchersProps {
  count: number;
  dur: string;
  delay: string;
  gap: string;
  colors: Array<string>;
  shape: string;
  type: string;
  onAnimationEnd: () => void;
}

const defaultColors: Array<string> = ['#8c0d59', '#ea1595', '#ff68ab', '#fff'];

const SceneSwitchers: FC<SceneSwitchersProps> = ({
  count = 1,
  dur,
  delay,
  gap,
  colors = [],
  shape = 'square',
  type = 'normal',
  onAnimationEnd = function() {},
}) => {
  const list = new Array(count).fill(0);
  const colorList = colors.length == 0 ? defaultColors : colors;
  return (
    <div className={styles.container_switchers}>
      {list.map((item, idx) => (
        <div
          className={styles.switcher}
          style={{
            backgroundColor: colorList[idx % colorList.length],
            animationDuration: 'calc(' + dur + ' + ' + gap + ' * ' + idx + ')',
            animationDelay: delay,
          }}
          onAnimationEnd={idx == list.length - 1 ? onAnimationEnd : () => {}}
          key={idx}
        />
      ))}
    </div>
  );
};

export default SceneSwitchers;
