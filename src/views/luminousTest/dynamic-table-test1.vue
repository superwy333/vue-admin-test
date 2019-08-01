<template>
  <div class="app-container">
    <div class="form-container">
      <p style="white-space: normal; text-align: center;"><span style="font-family: 黑体, SimHei; font-size: 36px;">江苏福田物业发展有限公司费用报销专用审批</span>
      </p>
      <p></p>
      <table data-sort="sortDisabled" align="center">
        <tbody>
        <tr class="firstRow">
          <td width="183" valign="top" rowspan="1" colspan="1"
              style="word-break: break-all; border-width: 1px; border-style: solid;" height="21">日期
          </td>
          <td valign="top" rowspan="1" colspan="3"
              style="word-break: break-all; border-width: 1px; border-style: solid;" height="21" width="409"><input
            name="sqrq" type="text" id="sqrq" title="sqrq" value="" leipiplugins="text" orghide="0" notnull="0"
            orgalign="left" orgwidth="150" orgtype="text" style="width: 150px; text-align: left;" orgfontsize=""
            orgheight=""/></td>
          <td width="48" valign="top" rowspan="1" colspan="1"
              style="word-break: break-all; border-width: 1px; border-style: solid;" height="21">流水号
          </td>
          <td width="145" valign="top" rowspan="1" colspan="1"
              style="word-break: break-all; border-width: 1px; border-style: solid;" height="21"><input name="lsh"
                                                                                                        type="text"
                                                                                                        id="lsh"
                                                                                                        title="lsh"
                                                                                                        value=""
                                                                                                        leipiplugins="text"
                                                                                                        orghide="0"
                                                                                                        notnull="0"
                                                                                                        orgalign="left"
                                                                                                        orgwidth="150"
                                                                                                        orgtype="text"
                                                                                                        style="width: 150px;"/>
          </td>
        </tr>
        <tr>
          <td valign="top" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" width="185">部门</td>
          <td valign="top" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" width="155"><input
            name="bm" type="text" id="bm" title="bm" value="" leipiplugins="text" orghide="0" notnull="0"
            orgalign="left" orgwidth="150" orgtype="text" style="text-align: left; width: 150px;"/></td>
          <td valign="top" colspan="1" rowspan="1" width="51" style="border-width: 1px; border-style: solid;">报销人</td>
          <td valign="top" colspan="1" rowspan="1" width="157" style="border-width: 1px; border-style: solid;"><input
            name="sqr" type="text" id="sqr" title="sqr" value="" leipiplugins="text" orghide="0" notnull="0"
            orgalign="left" orgwidth="150" orgtype="text" style="text-align: left; width: 150px;"/></td>
          <td valign="top" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" width="49">币种</td>
          <td valign="top" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" width="147"><input
            name="bz" type="text" id="bz" title="bz" value="人民币（￥）" leipiplugins="text" orghide="0" notnull="0"
            orgalign="left" orgwidth="150" orgtype="text" style="text-align: left; width: 150px;"/></td>
        </tr>
        <tr>
          <td valign="top" colspan="1" rowspan="1" width="187" style="border-width: 1px; border-style: solid;">
            收款人/收款单位名称
          </td>
          <td valign="top" colspan="5" rowspan="1" width="647"
              style="border-width: 1px; border-style: solid; word-break: break-all;"><input name="skr" type="text"
                                                                                            id="skr" title="skr"
                                                                                            value="" leipiplugins="text"
                                                                                            orghide="0" notnull="0"
                                                                                            orgalign="left"
                                                                                            orgwidth="500"
                                                                                            orgtype="text"
                                                                                            style="text-align: left; width: 500px;"
                                                                                            orgfontsize=""
                                                                                            orgheight=""/></td>
        </tr>
        <tr>
          <td valign="top" colspan="1" rowspan="1"
              style="word-break: break-all; border-width: 1px; border-style: solid;" width="189"><span
            style="color: rgb(255, 0, 0);">支出说明*</span></td>
          <td valign="top" colspan="5" rowspan="1" width="647" style="border-width: 1px; border-style: solid;"><textarea
            title="zcsm" id="zcsm" name="zcsm" leipiplugins="textarea" value="" orgrich="0" notnull="1" orgfontsize=""
            orgwidth="750" orgheight="80" style="width: 750px; height: 80px; margin: 0px;"></textarea></td>
        </tr>
        <tr>
          <td valign="top" rowspan="1" colspan="6" width="859"
              style="word-break: break-all; border-width: 1px; border-style: solid;"><p><input name="列表"
                                                                                               leipiplugins="listctrl"
                                                                                               type="text"
                                                                                               value="{列表控件}"
                                                                                               readonly="readonly"
                                                                                               title="列表"
                                                                                               orgtitle="费用摘要`单位`数量`单价`金额`"
                                                                                               orgkey="费用摘要`单位`数量`单价`金额`"
                                                                                               orgcoltype="text`text`text`text`int`"
                                                                                               orgunit="`````"
                                                                                               orgsum="0`0`0`0`1`"
                                                                                               notnull="0`0`0`0`0`"
                                                                                               orgcolvalue="`````"
                                                                                               orgwidth="100%"
                                                                                               style="width: 100%;"/>
          </p></td>
        </tr>
        <tr>
          <td width="191" valign="top" rowspan="1" colspan="1"
              style="border-width: 1px; border-style: solid; word-break: break-all;" height="13">支付方式
          </td>
          <td width="647" valign="top" rowspan="1" colspan="5" style="border-width: 1px; border-style: solid;"
              height="13">{|-<span leipiplugins="select"><select name="data_65" title="支付方式" size="1" orgwidth="150"
                                                                 leipiplugins="select" style="width: 150px;"><option
            value="现金" selected="selected">现金</option><option value="转账">转账</option><option value="电汇">电汇</option><option
            value="冲减借款">冲减借款</option><option value="支票">支票</option><option value="其他">其他</option></select>&nbsp;&nbsp;</span>-|}
          </td>
        </tr>
        </tbody>
      </table>
      <p></p>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style scoped>
  .form-container table {
    border: 1px solid #999;
    border-collapse: collapse;
    line-height: 1.42857143;
  }

  .form-container table td {
    padding: 7px 10px;
    border: 1px solid #999;
    border-collapse: collapse;
  }

</style>
