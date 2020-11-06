import {PaginationProps} from "antd/es/pagination";
import {Key, TableRowSelection} from "antd/lib/table/interface";

export default {
    pagination(data: any, callback: (page: number, pageSize?: number)=> void): PaginationProps {
        return {
            showQuickJumper: true, // 是否可以快速跳转至某页
            showSizeChanger: true, // 是否展示pageSize切换器，当total大于50时默认为true
            total: data.result.total, // 数据总数
            pageSize: data.result.page_size, // 每页条数
            defaultCurrent: 2,
            onChange: (page: number, pageSize?: number) => {
                callback(page, pageSize);
            },
            showTotal:(total: number, range: [number, number]) => `共${data.result.total}条` // 用于显示数据总量和当前数据顺序
        }
    },
}