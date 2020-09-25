/**
 * @description index page
 */

import React from 'react';
import { Link, history } from 'umi';
import styles from './index.less';

history.push('/Prologue');

export default () => {
  return (
    <div>
      <Link to="/Prologue">Start</Link>
    </div>
  );
};
