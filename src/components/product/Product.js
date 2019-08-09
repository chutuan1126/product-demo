import React, { Component } from 'react';
import './product.css';

class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={product.avatar} className="card-img-top" alt={product.proName} />
                            <div className="area-order">
                                <a href="/" className="buy-now" data-value="202861">
                                    <b>Mua ngay </b>
                                    <span>Giao trong 1 giờ hoặc nhận tại siêu thị</span>
                                </a>
                                <div className='order-now'>
                                    <a className="buy-repay" href="/">
                                        <b>Mua trả góp 0%</b>
                                        <span>Thủ tục đơn giản</span>
                                    </a>
                                    <a className="buy-repay sss" href="/">
                                        <b>Trả góp  qua thẻ</b>
                                        <span>Visa, Master, JCB</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div className="tableparameter">
                                <h2>Thông số kỹ thuật</h2>
                                <ul className="parameter">
                                    <li className="g6459_79_77">
                                        <span>Màn hình:</span>
                                        <div>
                                            <a href="/" target="_blank">Super AMOLED, 6.38", Full HD+</a>
                                        </div>
                                    </li>
                                    <li className="g72">
                                        <span>Hệ điều hành:</span>
                                        <div>
                                            <a href="/" target="_blank">Android 9.0 (Pie)</a>
                                        </div>
                                    </li>
                                    <li className="g27">
                                        <span>Camera sau:</span>
                                        <div>Chính 16 MP &amp; Phụ 8 MP, 2 MP</div>
                                    </li>
                                    <li className="g29">
                                        <span>Camera trước:</span>
                                        <div>32 MP</div>
                                    </li>
                                    <li className="g6059">
                                        <span>CPU:</span>
                                        <div>
                                            <a href="/" target="_blank">MediaTek MT6768 8 nhân (Helio P65)</a>
                                        </div>
                                    </li>
                                    <li className="g50">
                                        <span>RAM:</span>
                                        <div>6 GB</div>
                                    </li>
                                    <li className="g49">
                                        <span>Bộ nhớ trong:</span>
                                        <div>128 GB</div>
                                    </li>
                                    <li className="g52">
                                        <span>Thẻ nhớ:</span>
                                        <div>
                                            <a href="/" target="_blank">MicroSD, hỗ trợ tối đa 256 GB</a>
                                        </div>
                                    </li>
                                    <li className="g6339_6463">
                                        <span>Thẻ SIM:</span>
                                        <div className="isim">
                                            <a href="/" target="_blank">2 Nano SIM, Hỗ trợ 4G</a>
                                        </div>
                                    </li>
                                    <li className="g84_10882">
                                        <span>Dung lượng pin:</span>
                                        <div>4500 mAh, có sạc nhanh</div>
                                    </li>
                                </ul>
                                <button type="button" className="viewparameterfull">Xem cấu hình chi tiết</button>
                            </div>
                                <div className='info-product'>
                                    <p>{product.proContent}</p>
                                </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Product;