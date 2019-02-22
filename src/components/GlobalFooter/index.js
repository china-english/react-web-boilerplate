import React from 'react';
// import classNames from 'classnames';

import police from './assets/police.png';
import './styles.scss';

const GlobalFooter = () => (
  <div className="global-footer">
    <div className="footer-content">
          Copyright &copy; 2019 技术阿飞出品 &nbsp;&nbsp;
      <a
        href="http://www.miitbeian.gov.cn/"
        target="_blank"
        rel="noreferrer noopener"
      >
            *ICP备********号
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="http://www.miitbeian.gov.cn/"
      >
        <img src={police} alt="police" />
            *公网安备 **************号

      </a>
    </div>
  </div>
);

export default GlobalFooter;
