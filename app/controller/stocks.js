"use strict";

const Controller = require("egg").Controller;

class StocksController extends Controller {
    async getStocks() {
      const {ctx,app} = this
      this.ctx.body = await this.queryStocks();
    }
    async queryStocks(){      
      const {ctx,app} = this
      const stockId  = ctx.request.query.stockId
      const res = {
        day: [],
        open: [],
        high:[],
        low: [],
        close: [],
        volume: [] // 成交量
      }
      console.log('stockId is',stockId);
      const data = await this.ctx.axios.get(`http://money.finance.sina.com.cn/quotes_service/api/json_v2.php/CN_MarketData.getKLineData?symbol=${stockId}&scale=15&ma=no&datalen=1023`)

      // console.log(data);
      for(const item of data){
        res.day.push(item.day)
        res.open.push(item.open)
        res.high.push(item.high)
        res.low.push(item.low)
        res.close.push(item.close)
        res.volume.push(item.volume)

      }
      return res
    }
}

module.exports = StocksController;