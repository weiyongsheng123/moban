import request from '@/utils/request';

export default {

  /**
     * 基础信息
     * @param {*} data
     */
  request(data) {
    return request({
      url: '/cs/analysis/request',
      method: 'post',
      data,
      /* headers: {
            'Admin-Token': '0ffa766a16614223a70da29d20b38080'
        } */
    });
  },
};
