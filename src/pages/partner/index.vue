<template>
  <div class="container">
    <!-- 万隆 -->
    <div class="card-box">
      <div class="top">
        <image class="head" src="@/static/partner-icon/wlzc.png" alt />
        <div class="name">万隆(上海)资产评估有限公司</div>
      </div>
      <div class="content">
        <div class="long-word" :style="{ height: `${choosed_1 ? '' : '160rpx'}` }">
          万隆（上海）资产评估有限公司的前身上海审中资产评估事务所成立于1995年，隶属于上海市审计局，2000年脱钩改制设立了以注册资产评估师为主体的专营性资产评估机构。2008年12月本公司已通过财政部、证监会财企〔2008〕360号文审查、批准，重新换证取得从事证券、期货相关业务资产评估资格证书，证书编号：0210010002，成为国内首批获得证券评估资格的11家评估机构之一。
          <br />
          <div
            class="btn"
            :style="{
              background: `${
                choosed_1
                  ? ''
                  : 'linear-gradient(to bottom, #ffffff71, #ffffff)'
              }`,
            }"
            @click="choosed_1 = !choosed_1"
          >{{ choosed_1 ? "收起" : "展开" }}</div>
        </div>联系人：郭立志
        <br />手机：18601706618
        <br />邮箱：guolizhi@wanlonggroup.com.cn
      </div>
    </div>
    <!-- 上海市周天平律师事务所 -->
    <div class="card-box">
      <div class="top">
        <image class="head" src="@/static/partner-icon/ztp.png" alt />
        <div class="name">上海市周天平律师事务所</div>
      </div>
      <div class="content">
        <div class="long-word" :style="{ height: `${choosed_2 ? '' : '160rpx'}` }">
          本所系上海市司法局于2000年批准设立的第一批（5家）以律师个人姓名命名的个人制律师事务所。
          <br />本所主任周天平律师系上海市律师协会第九届、第十届副会长，上海市中青年知识分子联谊会第六届副会长，上海市政协委员（十二届），徐汇区政协委员（十二、十三届），上海市国际仲裁中心仲裁员，上海市仲裁委员会仲裁员，上海市行政复议委员会委员。
          <br />本所成立迄今已为上海陆家嘴中商大厦变卖还贷、万泰集团巨额贷款监管清收、上海社会车辆上牌额度拍卖项目、海南文昌铜鼓岭生态旅游综合项目、云南腾冲生态旅游综合项目、昆山医疗器械产业集聚项目、东方明珠移动电视拓展项目、上海世博文化中心合资项目、……等合计一千六百多亿人民币标的的重大经济建设项目和重大疑难复杂诉讼案件提供了优质成功的法律服务。
          <br />本所的主要法律服务领域为：上市公司、外资公司、国有企业、民营企业的常年法律顾问；涉及公司法、合同法、房地产法、银行法、证券法、物权债权抵押权法、知识产权法、婚姻继承法及文化传媒、医疗器械、拍卖、典当等专项业务的非讼项目服务和诉讼案件代理。具有为大型经营项目和并购重组项目提供非讼法律服务的丰富经验，具有最高院、高院、中院、基层法院以及在北京、上海等地仲裁机构诉讼代理的胜诉成功经验。
          <div
            class="btn"
            :style="{
              background: `${
                choosed_2
                  ? ''
                  : 'linear-gradient(to bottom, #ffffff71, #ffffff)'
              }`,
            }"
            @click="choosed_2 = !choosed_2"
          >{{ choosed_2 ? "收起" : "展开" }}</div>
        </div>
        <br />联系人：何川
        <br />手机：13671617568
        <br />邮箱：lawyer.777@163.com
      </div>
    </div>
    <!-- 上海申浩律师事务所 -->
    <div class="card-box">
      <div class="top">
        <image class="head" src="@/static/partner-icon/shsh.jpg" alt />
        <div class="name">上海申浩律师事务所</div>
      </div>
      <div class="content">
        <div class="long-word" :style="{ height: `${choosed_3 ? '' : '160rpx'}` }">
          上海申浩律师事务所(简称“申浩”)创始于2005年，是一家能够为客户提供“专业化、多领域、全方位、一站式”法律解决方案的大型综合性律师事务所。申浩起步于国家“双一流”建设重点院校——上海交通大学校园内，依托交大百年的学术底蕴和人才储备，培养和凝聚了大批人正、业精、学勤的优秀律师。申浩现已从上海走向全国，在上海中心大厦75层与港汇恒隆广场36、37层建立“
          一城两翼、东西联动”双办公模式，并在全国10个城市陆续设立一体化管理办公室。申浩现有执业律师600余名（上海总部400余名），律所规模稳居上海本地律所第二位。申浩在德国、立陶宛、东南亚等多个国家和地区有战略合作伙伴，正逐步构建“立足上海、辐射全国、联接世界”的服务网络。2021年，申浩获
          ALB
          CHINA十五佳成长律所。申浩积极履行社会责任，获上海律协表彰“上海律师行业履行社会责任先进集体”,获司法部表彰“全国公共法律服务工作先进集体”。2021年，“申浩法学发展基金”捐赠1200万元，用于支持交大凯原法学院人才培养和学科建设。
          <div
            class="btn"
            :style="{
              background: `${
                choosed_3
                  ? ''
                  : 'linear-gradient(to bottom, #ffffff71, #ffffff)'
              }`,
            }"
            @click="choosed_3 = !choosed_3"
          >{{ choosed_3 ? "收起" : "展开" }}</div>
        </div>
        <br />联系人：梁伟 律师
        <br />手机：13661896084
        <br />微信号：15000779219
        <br />邮箱：liangwei@sunhold.com.cn
        <br />
      </div>
    </div>
    <!-- 上海八达国瑞 -->
    <div class="card-box">
      <div class="top">
        <image class="head" src="@/static/partner-icon/bdgr.png" alt />
        <div class="name">上海八达国瑞房地产土地估价有限公司</div>
      </div>
      <div class="content">
        <div class="long-word" :style="{ height: `${choosed_4 ? '' : '160rpx'}` }">
          上海八达国瑞房地产土地估价有限公司于 1995
          年全国首批取得国家建设部批准的房地产评估机构壹级资格证书和国土资源部批准的土地估价全国执业资格。
          目前公司吸收了原RICS
          特许测量师学会中国分会主席李旭先生团队加盟，更好的为客户提供高标准的专业服务。
          RICS 特许测量师红皮书标准，也是 RICS 标准严格执行的准则之一。
          公司从创立开始，就秉承独立、客观、公正为最高宗旨，不依附于任何政府部门，不挂靠于其他任何单位，是一家充分市场化
          运作的中介服务企业。
          公司以“专业水准、服务社会”为指导思想，以“诚信、求实、团结、奋进”为企业精神。我们遵循科学、客观、公正的职业道德，为客户创造优质周到满意的服务。
          2018年，经上海市财政局批准，上海八达国瑞房地产土地估价有限公司取得《资产评估资格证书》（沪财企备案
          [2018]21 号）（非证券）。
          二十余年的耕耘和磨炼，公司在行业中树立了良好的声誉，在业务上遵循稳健发展的思路，经营业绩平稳增长。公司的经营业绩、综合实力一直位于上海市同行业前列。
          <div
            class="btn"
            :style="{
              background: `${
                choosed_4
                  ? ''
                  : 'linear-gradient(to bottom, #ffffff71, #ffffff)'
              }`,
            }"
            @click="choosed_4 = !choosed_4"
          >{{ choosed_4 ? "收起" : "展开" }}</div>
        </div>
        <br />联系人：葛经理 13585592273
        <br />电邮：valuer@bdgh-cn.com
        <br />网站：https://www.bdgh-cn.com
        <br />地址：上海市静安区江宁路212号凯迪克大厦11楼
        <br />
      </div>
    </div>
    <!--  -->
    <div class="card-box">
      <div class="top">
        <image class="head" src="@/static/partner-icon/fspg.png" alt />
        <div class="name">上海富申评估咨询集团</div>
      </div>
      <div class="content">
        <div class="long-word" :style="{ height: `${choosed_5 ? '' : '160rpx'}` }">
          上海富申评估咨询集团是上海评估咨询领域最早成立的领军机构之一，原是国土资源部所属企业，1994
          年在上海注册为独立法人，1999
          年脱钩改制。“富申”坚持诚信为本、信誉至上，靠品牌拓展市场，注重员工职业道德建设，始终坚持“质量和服务”特色，培养了一批综合素质好，专业水平高，解决问题能力强的评估师、咨询师队伍，是一个团结、和谐、充满朝气、凝聚力强的企业。二十八年来，富申在业界拥有良好的口碑和信誉，在国内外客户中树立了专业的品牌形象，并已成为国际、国内双重影响力的综合性经济鉴证机构，赢得客户的高度信任和社会的广泛认同。在未来发展的道路上富申将以品牌精神激励自己，力求做实、做强、做专、做精，坚持走企业持续、稳定、健康发展的道路。
          <div
            class="btn"
            :style="{
              background: `${
                choosed_5
                  ? ''
                  : 'linear-gradient(to bottom, #ffffff71, #ffffff)'
              }`,
            }"
            @click="choosed_5 = !choosed_5"
          >{{ choosed_5 ? "收起" : "展开" }}</div>
        </div>
        <br />联系人：丁志诚 13764627293（微信同号）
        <br />电邮：fushen1994@126.com
        <br />网站：http://www.fspg.net
        <br />地址：上海市徐汇区瑞金南路438 号富申评估集团
        <br />
      </div>
    </div>
    <!-- 上海申威 -->
    <div class="card-box">
      <div class="top">
        <image class="head" src="@/static/partner-icon/swzc.png" alt />
        <div class="name">上海申威资产评估有限公司</div>
      </div>
      <div class="content">
        <div class="long-word" :style="{ height: `${choosed_6 ? '' : '160rpx'}` }">
          上海申威资产评估有限公司，成立于1992年7月19日，经过30多年的风雨兼程，申威评估不断适应市场需求，积极进行变革与创新，在市场的磨砺中发展，在激烈的竞争中壮大。
          <br />申威评估立足上海、辐射全国、走向世界。业务范围从最初擅长设备评估发展成为一家大型综合的专业评估机构。业务类型涉及企业改制、股权转让(收购)、资产涉讼、资产处置(收购)、作价投资、抵押(质押)担保、企业清算等，
          资产范围涉及整体资产(企业价值)、房地产、机器设备、无形资产(注册商标、专利技术、著作权等)、科技创新、投资价值评估、绩效评价、工程审价等。
          申威评估具备上海市财政局（沪财企备案【2017】7号《上海市财政局备案公告》、《证券期货相关业务评估资格证书》、《军工涉密业务咨询服务安全保密条件备案证书》【列入国家国防科技工业局备案名录（第一批）】。现员工中拥有经济、法律、财会、房地产、土地等各类专业的评估资质。公司现有从业人员100余人，具有经济、法律、财会、房地产、土地等各类专业人员。
          <br />公司长期服务于上汽集团、建工集团、上港集团、久事集团、上海电气、城投集团、国盛集团、申能集团等地方国资，以及宝武集团、中远海运、国机集团、国新控股等央企，并为农、工、建、交等各大商业银行提供服务，在北京、成都等地已设立8家省级分公司。
          <div
            class="btn"
            :style="{
              background: `${
                choosed_6
                  ? ''
                  : 'linear-gradient(to bottom, #ffffff71, #ffffff)'
              }`,
            }"
            @click="choosed_6 = !choosed_6"
          >{{ choosed_6 ? "收起" : "展开" }}</div>
        </div>
        <br />联系人：曾琳 13817557550
        <br />电邮：zenglin@swco.com.cn
        <br />地址：虹口区东体育会路816号C座
        <br />公司：上海申威资产评估有限公司
        <br />
      </div>
    </div>
    <!-- <div class="card-box">
      <div class="top">
        <image class="head" src="@/static/partner-icon/shgp.png" alt="" />
        <div class="name">上海国际拍卖有限公司</div>
      </div>
      <div class="content">
        上海国际商品拍卖有限公司是经上海市人民政府、原国内贸易部批准组建的综合性拍卖公司，成立至今已有三十余年，是改革开放、国内拍卖业恢复后成立的拍卖企业。
        公司注册资本为人民币2100万元，是中国拍卖行业AAA级企业，拍卖领域涉及司法强制拍卖、国企资产处置、破产财产变现、国有土地出让、金融机构不良资产处置等，拍卖标的涉及实物资产、土地房地产、文化艺术品、股权、无形资产等。
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  onShow() {
    let sensors = getApp().globalData.sensors
    let pageViewEventName = getApp().globalData.pageViewEventName
    if (pageViewEventName) {
      sensors.track(pageViewEventName, {
        $url: 'pages/partner/index', //页面路径，ios、android 需传入该参数，否则采集不到受访页面地址
        $title: '合作伙伴' //页面标题
      })
    }
  },
  data() {
    return {
      choosed_1: false,
      choosed_2: false,
      choosed_3: false,
      choosed_4: false,
      choosed_5: false,
      choosed_6: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding-bottom: 50rpx;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #f7f7f7;
  .card-box {
    width: 683rpx;
    min-height: 527rpx;
    background-color: #fff;
    border-radius: 21rpx;
    margin: 26rpx 33rpx 0 33rpx;
    padding: 26rpx 33rpx;
    box-sizing: border-box;
    .top {
      display: flex;
      padding-bottom: 15rpx;
      border-bottom: 1px solid #f5f5f5;
      .head {
        width: 77rpx;
        height: 77rpx;
        border-radius: 6rpx;
        margin-right: 38rpx;
      }
      .name {
        width: 504rpx;
        font-size: 28rpx;
        font-weight: 400;
        // line-height: 40rpx;
        display: flex;
        align-items: center;
        color: #333333;
      }
    }
    .content {
      font-size: 25rpx;
      font-weight: 400;
      line-height: 46rpx;
      color: #333333;
      margin-top: 26rpx;
      .long-word {
        overflow: hidden;
        padding-bottom: 30rpx;
        position: relative;
        transition: 0.5s;
        .btn {
          width: 100%;
          height: 100rpx;
          text-align: center;
          line-height: 180rpx;
          color: #3366dd;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>
