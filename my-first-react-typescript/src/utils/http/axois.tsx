import axios from 'axios';
import {Modal} from "antd";

export default class HttpUtils {
    // axios是对ajax一种技术实现
    static ajax(options?: any) {
        let loading: any;
        // 全局加载状态;
        if (options.data && options.data.isShowLoading) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        // 调用项目接口地址;
        let baseUrl = 'https://www.easy-mock.com/mock/5f72e5e4a9e70a160307de32/my-first-react-typescript/mockApi'; // let baseUrl = 'https://www.easy-mock.com/mock/5f4efbb77e1a7f3146e31852/mockApi';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseUrl,
                timeout: 5000,
                params: (options.data && options.data.params) || '',
            }).then((response) => {
                if (options.data && options.data.isShowLoading) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 0) {
                        resolve(res);
                    } else {
                        Modal.info({
                            title: "提示",
                            content: res.msg,
                        })
                    }
                }
            });
        })
    }
}