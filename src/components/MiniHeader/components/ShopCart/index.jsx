import React from 'react';
import { indexUrl } from '../../config';

const ShopCart = ({ count }) =>
<li className={'c-miniHeader_right_li'}>
    <i className={'icon iconfont icon-global-gouwuche c-miniHeader_shoppingcart' }></i>
    <a href={indexUrl.payServerName} target="_blank">
            购物车(<span id="j_cartshop_total_header">{count}</span>)
    </a>
</li>;

export default ShopCart;