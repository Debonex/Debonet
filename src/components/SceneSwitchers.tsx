/**
 * @author Debonex
 * @date 2020-09-24
 * @description animated rectangles. for changing from one scenary to another.
 */

import React, { FC } from 'react';
import styles from '@/less/components/SceneSwitchers.less';

interface SceneSwitchersProps {
  count: number;
  dur: number;
  delay: number;
  colors: Array<string>;
  onAnimationEnd: () => void;
}

const SceneSwitchers: FC<SceneSwitchersProps> = ({
  count,
  colors,
  onAnimationEnd = function() {},
}) => {
  const list = new Array(count).fill(0);
  return (
    <div className={styles.container_switchers}>
      {list.map((item, idx) => (
        <div className={styles['switcher_' + (idx + 1)]} />
      ))}
    </div>
  );
};
