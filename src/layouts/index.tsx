/**
 * @author Debonex
 * @date 2020-09-10
 */

import React from 'react';
import styles from './index.less';

function Layout(props: any) {
  return <div className={styles.container_layout}>{props.children}</div>;
}

export default Layout;
