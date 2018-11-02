<template>
    <div class="por">
        <div>
            <el-row>
                <el-col :span='7' id="list">
                    <el-tabs>
                        <el-tab-pane label='点餐'>
                            <el-table :data='shuju' border show-summary style="width:100%">
                                <el-table-column label='商品' prop='name'></el-table-column>
                                <el-table-column label='量' prop='count'></el-table-column>
                                <el-table-column label='金额' prop='pri'></el-table-column>
                                <el-table-column label='操作'>
                                    <template slot-scope="scope">
                                        <el-button type='text'  size='small'>删除</el-button>
                                        <el-button type='text' size='small'>增加</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label='外卖'>
                            外卖
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col :span='15'>
                    <div class="pro">
                        <div class="title">常用商品</div>
                        <div class="pro-list">
                            <ul>
                               <li v-for='(item,index) in pros' :key="index">
                                   <span>{{item.name}}</span>
                                   <span class="pro-pri">￥{{item.pri}}</span>
                               </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pro-type">
                        <el-tabs>
                            <el-tab-pane label='肥宅区'>
                                <ul class="ckList">
                                    <li v-for='(val,index) in goodType1' :key="index">
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label='儿童区'>
                                <ul class="ckList">
                                    <li v-for='(val,index) in goodType2' :key="index">
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label='无名区'>
                                <ul class="ckList">
                                    <li v-for='(val,index) in goodType3' :key="index">
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>

            </el-row>
        </div>
    </div>
</template>




<script>
import ajax from "axios";
export default {
  name: "Por",
  data() {
    return {
      shuju: [],
      pros: [],
      goodType1: [],
      goodType2: [],
      goodType3: []
    };
  },
  foo() {
    let h = document.body.clientHeight;
    let list = document.querySelector("#list");
    list.style.height = h + "px";
  },
  created() {
      ajax.get("http://localhost:8080/static/data.json")
      .then(res=>{
          this.shuju=res.data.shuju
          this.pros=res.data.pros
          this.goodType1=res.data.goodType1
          this.goodType2=res.data.goodType2
          this.goodType3=res.data.goodType3

      })
      .catch(err=>{
          console.log(err)
      })
  },
};
</script>

<style scoped>

     @import url(../assets/css/por.css);
</style>

