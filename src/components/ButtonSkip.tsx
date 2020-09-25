/**
 * @author Debonex
 * @date 2020-09-22
 * @description skip button. skip from one chapter to Home page.
 */
import React, { FC } from 'react';
import { history } from 'umi';
import styles from '@/less/components/ButtonSkip.less';

interface ButtonSkipProps {
  skipTo: string;
  size: number;
}

const ButtonSkip: FC<ButtonSkipProps> = ({ skipTo, size }) => {
  const button_width = size * 280;
  const button_height = size * 85;
  const skipToFunction: () => void = function() {
    let url = '/' + skipTo;
    if (skipTo == 'home' || skipTo == '') {
      history.push('/Home');
    } else {
      history.push(url);
    }
  };

  return (
    <div
      className={styles.container_button}
      style={{ width: button_width, height: button_height }}
      onClick={skipToFunction}
    />
  );
};

export default ButtonSkip;
