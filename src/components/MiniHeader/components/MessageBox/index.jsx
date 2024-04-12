import React from 'react';
import { formatNum } from '../../utils';
import { indexUrl } from '../../config';

const singleMax = 9;

const MessageBox = ({ total }) =>
<li className={'c-miniHeader_right_li'}>
    <i className={'icon iconfont icon-global-xiaoxi c-miniHeader_noticeLogo'}></i>
    <a href={indexUrl.noticeServerName} target="_blank" className={'c-miniHeader_msgMarginRight'}>消息
    {
        // total多位数时 为c-miniHeader_masseagDoubleNum样式； total为个位数时 为masseagSingleNum样式； total为0时  为hideMsgNum样式，即隐藏显示
        total !== '' && <span id="j_notice_total_header" className={total > singleMax ? 'c-miniHeader_masseagDoubleNum' :( total > 0 ? 'masseagSingleNum' : 'hideMsgNum')}>{formatNum(total)}</span>
    }
    </a>
</li>;


export default MessageBox;