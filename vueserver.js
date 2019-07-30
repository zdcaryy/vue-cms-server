var express=require('express');
var bodyParser = require('body-parser');
var moment=require('moment');

var app=express();
app.listen(8888,function(){
    console.log('服务器搭建成功!');
})

app.use(express.static(__dirname+'/static'));

app.use(bodyParser.urlencoded({extended: false}));


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var basePath='http://localhost:8888';
//首页轮播图数据
var lunboImgArr=[
    {
        url: basePath+'/images/厨娘.jpg',
        link:'http://mint-ui.github.io/docs/#/zh-cn2/swipe'
    },{
        url:basePath+'/images/铁血.jpg',
        link:'http://mint-ui.github.io/docs/#/zh-cn2/swipe'
    },{
        url:basePath+'/images/蜂刺.jpg',
        link:'http://mint-ui.github.io/docs/#/zh-cn2/swipe' 
    }
];

//新闻列表数据
var newsArr=[
    {
        id:1,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        imgUrl:basePath+'/images/news1.jpg'
    },
    {
        id:2,
        title:'诺克萨斯',
        date:'2019-04-01T05:36:21.000Z',
        clickNum:1000,
        imgUrl:basePath+'/images/news2.jpg'
    },
    {
        id:3,
        title:'艾欧尼亚',
        date:'2019-04-15T20:14:16.000Z',
        clickNum:450,
        imgUrl:basePath+'/images/news3.jpg'
    },
    {
        id:4,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        imgUrl:basePath+'/images/news1.jpg'
    },
    {
        id:5,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        imgUrl:basePath+'/images/news1.jpg'
    },
    {
        id:6,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        imgUrl:basePath+'/images/news1.jpg'
    },
    {
        id:7,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        imgUrl:basePath+'/images/news1.jpg'
    },
    {
        id:8,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        imgUrl:basePath+'/images/news1.jpg'
    },
    {
        id:9,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        imgUrl:basePath+'/images/news1.jpg'
    },
    {
        id:10,
        title:'德玛西亚',
        date:'2019-05-28T15:30:10.000Z',
        clickNum:200,
        imgUrl:basePath+'/images/news1.jpg'
    }
]
//新闻详情
var newsDetail=[
    {
        id:1,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        content:`<p>&nbsp;巨蟒渡劫事件是真的吗，揭秘渡劫相关的未解之谜，据说动物修炼到一定程度就需要渡劫，比如雷劫，不知道之前传说的巨蟒渡劫是真的假的。</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">巨蟒渡劫</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p3.pstatp.com/large/97000027aa280498a7d" img_width="640" img_height="394" alt="巨蟒渡劫事件是真的吗 盘点十个百思不得其解的未解之谜" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;"></p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">在中国<a href="http://www.hatdot.com/lishi/" target="_blank" class="infotextkey">历史</a>长河中，发生了太多太多至今仍然无解的神秘事情，而发生的这些神秘事件当中，可以说每一件都是十分的离奇诡异，而且很多事件由于其特殊性而惨遭当局封锁消息，我们普通民众很少能获取真实的第一手资料，只能从某些小道途径上寻找出事件的一些蛛丝马迹。</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">1995年；安徽一山林发生巨蟒渡劫事件，就在飞天的瞬间被数股闪电击中，目击者是几位当地农民。有网友说：这是真的有很多人都看见过，在我们店里的一个阿姨她就是那里的人，她也见过，她说是下雨天，突然有很多人说看见了巨蛇，年长的老人说是龙，就在说的过程中那个蛇被雷给劈死了，很大的一条大概几十米呢，都快飞天了...</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">诡异佛像之谜</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p3.pstatp.com/large/96d0003f5ba119111ae" img_width="640" img_height="394" alt="巨蟒渡劫事件是真的吗 盘点十个百思不得其解的未解之谜" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;"></p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">【诡异佛像之谜】在汶川地震中，北川一个庙里竟有这种诡异现象。整个庙都倒塌了，旁边剩下的这个菩萨像居然毫发未伤！这件诡异事件事后让人们对此现象迷惑不解。</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">能让人长高的神秘小岛</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p9.pstatp.com/large/96f0000f6e7e033de2b" img_width="640" img_height="394" alt="巨蟒渡劫事件是真的吗 盘点十个百思不得其解的未解之谜" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;"></p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">【能让人长高的神秘小岛】世界上有个神奇的岛，名叫“马提尼克岛”，岛上的居民长得很高，从国外来的游客，只要住上一个时期，也会长高几厘米。世界上有个神奇的岛，名叫“马提尼克岛”，岛上的居民长得很高，从国外来的游客，只要住上一个时期，也会长高几厘米。</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">郭亮隧道之谜</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p3.pstatp.com/large/96d0003f5bb910e1a57" img_width="640" img_height="368" alt="巨蟒渡劫事件是真的吗 盘点十个百思不得其解的未解之谜" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;"></p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">【郭亮隧道之谜】郭亮洞是河南省新乡市辉县沙窑乡郭亮村的一条挂壁公路，又称郭亮洞挂壁公路，郭亮隧道，郭良隧道，万仙山绝壁长廊，郭亮村绝壁长廊，始建于1972年，1977年完工，全部由郭亮村村民独立手工完成，其中主要负责开凿的十三位村民被称为郭亮洞“十三壮士”。郭亮洞被称为“世界最险要十条路”之一、“全球最奇特18条公路”之一。20世纪90年代初，郭亮洞始开发旅游项目，现已成为国家4A级景区万仙山的第一分景区。电影举起手来第一部是在此地取景拍摄。它被人惊称为“世界第九大奇迹，位于河南太行山区，此隧道开有30多个“窗户”，从“窗户”往下看便是万丈深渊。</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">最重要的是，这条隧道诞生是个现代版“愚公移山的”故事，郭亮人没有用任何机械，历时5年，硬是在绝壁中一锤一锤凿去了2.6万立方米石方。</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">黑色沙滩之谜</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p1.pstatp.com/large/96e0003f1a6b38803d6" img_width="640" img_height="394" alt="巨蟒渡劫事件是真的吗 盘点十个百思不得其解的未解之谜" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;"></p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">【黑色沙滩之谜】在冰岛最南端的维克小镇，有一片神秘的黑沙滩，经常有摄制组到这里取景拍摄科幻类型的影片。黑沙滩的“沙”其实是颗粒状的火山熔岩。这些熔岩颗纯粹无杂质，捧起一把，满手乌黑，轻轻一抖，黑沙四散，手上却纤毫不染。		</p>`
    },
    {
        id:2,
        title:'诺克萨斯',
        date:'2019-04-01T05:36:21.000Z',
        clickNum:1000,
        content:`
		<p>&nbsp;僵尸行星像幽灵一般的存在太可怕了，<span style="color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">浩瀚的宇宙中有着许许多多奇特的星体，像地球这样充满生机的星球，像冥王星那样寒冷的星球，还有像太阳那般炽热的恒星等等，在宇宙之中其实还有一种非常诡异的星体：“僵尸行星”。僵尸行星，顾名思义，是一种有着诡异力量的行星，有些能隐藏自身，有些昼夜温差巨大，有些有着奇异的形状。这些僵尸行星上毫无生机可言，除了极端的环境剩下的就是可怕的外形。多年来科学家在探索其他星球的时候也不断地发现这类诡异的星体！</span></p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p3.pstatp.com/large/32700061506c4923ad3" img_width="796" img_height="588" alt="宇宙中最可怕的僵尸行星，它们能够像幽灵一般出没！" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;"></p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">黑暗的僵尸行星—TrES-2b，这颗新发现的行星大小约和木星相仿，距离其中央母恒星仅有大约300万英里（约合483万公里），距离地球750光年。在这样近的地方，其表面被恒星的光热炙烤，温度上升到约980摄氏度。天文作者大卫·凯平说：“这颗星球的反照率低于煤炭和最黑的亚克力油漆，这使它成为迄今发现的最黑的行星。”他还说：“如果我们能有幸目睹这颗行星靠近，我们就感觉那只不过是一团黑色的气体，里面夹杂着一种淡淡的红色，真的非常诡异。”难怪有人称它为：厄瑞波斯(Erebus)，这是希腊神话中黑暗之神的名字。</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p3.pstatp.com/large/3250001604ce7d8ece5" img_width="626" img_height="619" alt="宇宙中最可怕的僵尸行星，它们能够像幽灵一般出没！" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;"></p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">幽灵般的僵尸行星—TMR-1C，这颗行星位于距离地球450光年之远的金牛座分子云中，它是第一颗被直接拍摄下来的系外行星，在图像中呈诡异的红色“手指状”，科学家表示，行星呈现出的红色是它的蓝光被星尘分散所致。这颗行星最诡异的地方在于它曾在宇宙中消失过，当时科学家以为它已经在宇宙中“死亡”，但在2009年，天文学家使用钱德拉望远镜观测到这颗曾经死亡的系外行星TMR-1C又再度复活过来。因此才被科学家称之为：幽灵行星。</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">南鱼座α星（Fomalhaut）是南天最亮的恒星之一，他有一个酷酷的中文名字——北落师门。因属北宫玄武的室宿故称“北”，“落”指的是天兵天将的藩落，“师门”即军队之门的意思。在中国古代，一个国家的军力是否强盛，国家是否安宁，都可通过此星占卜得出。而在西方人眼中，它是一颗位于鱼嘴巴上的明亮的星。</p>
<div class="pgc-img" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p3.pstatp.com/large/pgc-image/ed8d59f3575742f499adeb22664ccd93" img_width="490" img_height="339" alt="望远镜拍到首颗系外行星，过程惊心动魄，死而复生被称为僵尸行星" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;">
<p class="pgc-img-caption" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; text-align: center; font-size: 12px; color: rgb(119, 119, 119); line-height: 16px;">&nbsp;</p>
</div>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">随着科学技术的不断发展，人类研制出的光学望远镜能够观察到越来越细致的天体结构。当人们把望远镜对准北落师门的时候，惊讶地发现，它的周围围绕着一圈圆盘状的尘埃云，分布于133~158天文单位的范围内，从地球上望去，犹如漂浮在宇宙空间中的一只眼睛，人称“索伦之眼”。</p>
<div class="pgc-img" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p3.pstatp.com/large/pgc-image/8b1c3f8b0fd7427588ea797864b3ce6d" img_width="687" img_height="308" alt="望远镜拍到首颗系外行星，过程惊心动魄，死而复生被称为僵尸行星" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;">
<p class="pgc-img-caption" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; text-align: center; font-size: 12px; color: rgb(119, 119, 119); line-height: 16px;">&nbsp;</p>
</div>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">1998年时，科学家们研究认为，这是一颗非常年轻的恒星，大约只有2~3亿岁，在它周围圆盘状的尘埃云中，应该已经产生了行星。于是科学家们用了10年的时间，在2008年时，通过哈勃天文望远镜拍摄到了运行于尘埃盘中的一颗行星！命名为北落师门 b（Fomalhaut b）。这是人类第一次用光学望远镜直接“看”到太阳系以外的行星，具有里程碑式的意义。</p>
<div class="pgc-img" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p3.pstatp.com/large/pgc-image/2af90e7d7583409f80cd200daed7c2be" img_width="2843" img_height="1899" alt="望远镜拍到首颗系外行星，过程惊心动魄，死而复生被称为僵尸行星" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;">
<p class="pgc-img-caption" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; text-align: center; font-size: 12px; color: rgb(119, 119, 119); line-height: 16px;">&nbsp;</p>
</div>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">然而在当时，绝大部分科学家坚信，北落师门 b并不是一颗行星，只不过是一团明亮的尘埃云而已。这样的结论，直接导致北落师门 b被从行星名单中除名。</p>
<div class="pgc-img" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p1.pstatp.com/large/pgc-image/c1ee3cec7bc94202926892fb92c35213" img_width="976" img_height="739" alt="望远镜拍到首颗系外行星，过程惊心动魄，死而复生被称为僵尸行星" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;">
<p class="pgc-img-caption" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; text-align: center; font-size: 12px; color: rgb(119, 119, 119); line-height: 16px;">&nbsp;</p>
</div>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">事情直到2012年才出现转机，科学家们根据最新的观测数据，证明了北落师门 b的行星身份，并利用哈勃望远镜重新计算了它的轨道。北落师门 b的轨道并非常见的接近圆形的椭圆轨道，它的运行轨迹是一个更为狭长的椭圆，会穿过巨大的尘埃环，并造成破坏。北落师门 b沿轨道运行一周需要2000年之久，并且由于存在一颗尚未发现的行星的引力影响，使得北落师门 b的运行轨迹如幽灵一般让人捉摸不定。</p>
<div class="pgc-img" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;"><img src="http://p1.pstatp.com/large/pgc-image/925bc58801fd4de0b20b150f24b8219a" img_width="3000" img_height="2000" alt="望远镜拍到首颗系外行星，过程惊心动魄，死而复生被称为僵尸行星" inline="0" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; border-style: none; max-width: 100%; display: block; margin: 10px auto;">
<p class="pgc-img-caption" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 0px; padding: 0px; text-align: center; font-size: 12px; color: rgb(119, 119, 119); line-height: 16px;">&nbsp;</p>
</div>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin: 16px 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px;">北落师门 b的发现过程惊心动魄、跌宕起伏，被宣判了“死亡”后又奇迹般的“复活”，并且沿着幽灵般的轨道缓缓前行，人们为它起了一个贴切的昵称——僵尸行星。北落师门恒星系统，像极了太阳系刚刚形成时的样子，对北落师门及其周围的行星、尘埃盘进行观测研究，有助于我们进一步了解太阳系的起源和发展。</p>		`
    },
    {
        id:3,
        title:'艾欧尼亚',
        date:'2019-04-15T20:14:16.000Z',
        clickNum:450,
        content:`<p>咦嘻嘻</p>`
    },
    {
        id:4,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        content:`<p>咦嘻嘻</p>`
    },
    {
        id:5,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        content:`<p>咦嘻嘻</p>`
    },
    {
        id:6,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        content:`<p>咦嘻嘻</p>`
    },
    {
        id:7,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        content:`<p>咦嘻嘻</p>`
    },
    {
        id:8,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        content:`<p>咦嘻嘻</p>`
    },
    {
        id:9,
        title:'德玛西亚',
        date:'2019-05-28T15:30:00.000Z',
        clickNum:200,
        content:`<p>咦嘻嘻</p>`
    },
    {
        id:10,
        title:'德玛西亚',
        date:'2019-05-28T15:30:10.000Z',
        clickNum:200,
        content:`<p>咦嘻嘻</p>`
    }
]

//评论数据
var comments=[
    {
        userName:'盖伦',
        addTime:'2015-04-19T20:04:30.000Z',
        content:'德玛西亚永世长存',
        newsId:1
    },
    {
        userName:'VN',
        addTime:'2019-05-19T20:54:30.000Z',
        content:'和影子玩拳击',
        newsId:1
    },
    {
        userName:'凯尔',
        addTime:'2015-04-19T20:04:30.000Z',
        content:'审判一切罪恶',
        newsId:1
    },{
        userName:'凯隐',
        addTime:'2015-04-19T20:04:30.000Z',
        content:'千年兵刃',
        newsId:1
    },{
        userName:'狗屎坨坨',
        addTime:'2015-04-19T20:04:30.000Z',
        content:'',
        newsId:2
    },{
        userName:'劫',
        addTime:'2015-04-19T20:04:30.000Z',
        content:'在劫难逃',
        newsId:2
    },{
        userName:'拉克丝',
        addTime:'2015-04-19T20:04:30.000Z',
        content:'白白嫩嫩',
        newsId:2
    }
]

//图片分享的类别
var photoCates=[
    {id:1,cateName:'美女'},
    {id:2,cateName:'动漫'},
    {id:3,cateName:'影视'},
    {id:4,cateName:'游戏'},
    {id:5,cateName:'简约'},
    {id:6,cateName:'科技'},
]

//图片列表
var photos=[
    {
        id:1,
        title:'剑道万古如长夜',
        imgUrl:basePath+'/imgs/img1.jpg',
        zhaiyao:'该图片是一张游戏图片哈哈哈哈',
        cateId:1
    },{
        id:2,
        title:'图片2',
        imgUrl:basePath+'/imgs/img2.jpg',
        zhaiyao:`功盖三分国，名成八阵图。（名成 一作：名高）
        江流石不转，遗恨失吞吴。三国鼎立你建立了盖世功绩，创八阵图你成就了永久声名。
        任凭江流冲击，石头却依然如故，千年遗恨，在于刘备失策想吞吴。`,
        cateId:1
    },{
        id:3,
        title:'图片3',
        imgUrl:basePath+'/imgs/img3.jpg',
        zhaiyao:'该图片是一张游戏图片哈哈哈哈',
        cateId:1
    },{
        id:4,
        title:'图片4',
        imgUrl:basePath+'/imgs/img4.jpg',
        zhaiyao:'该图片是一张游戏图片哈哈哈哈',
        cateId:1
    },{
        id:5,
        title:'图片5',
        imgUrl:basePath+'/imgs/img5.jpg',
        zhaiyao:`三国鼎立你建立了盖世功绩，创八阵图你成就了永久声名。
        任凭江流冲击，石头却依然如故，千年遗恨，在于刘备失策想吞吴。`,
        cateId:1
    },{
        id:6,
        title:'图片6',
        imgUrl:basePath+'/imgs/img6.jpg',
        zhaiyao:`三国鼎立你建立了盖世功绩，创八阵图你成就了永久声名。
        任凭江流冲击，石头却依然如故，千年遗恨，在于刘备失策想吞吴。`,
        cateId:1
    },
    {
        id:7,
        title:'图片7',
        imgUrl:basePath+'/imgs/img7.jpg',
        zhaiyao:`三国鼎立你建立了盖世功绩，创八阵图你成就了永久声名。
        任凭江流冲击，石头却依然如故，千年遗恨，在于刘备失策想吞吴。`,
        cateId:2
    },{
        id:8,
        title:'图片8',
        imgUrl:basePath+'/imgs/img8.jpg',
        zhaiyao:'该图片是一张游戏图片哈哈哈哈',
        cateId:2
    }
]

//图片详情
var photoDetails=[
    {
        id:1,
        title:'剑道万古如长夜',
        content:`天不生我李淳刚，剑道万古如长夜，剑来!`,
        date:'2019-04-18 12:30:50',
        clickNum:300
    },
    {
        id:2,
        title:'身后纵有万古名，不如生前一杯酒',
        content:`<p>在《雪中悍刀行》中，这句话是那位离阳首辅张巨鹿所言。在小说中，张巨鹿自从当上离阳王朝的首辅，就一直帮助离阳皇帝与北凉王府作对，也因此使得张巨鹿成为小说中的反面人物，其实就立场而言，张巨鹿的所作所为实在无可厚非。身为离阳王朝的重臣，他本身就要维护离阳皇帝的权益。只不过到头来，张巨鹿因为功高震主，下场也是十分凄惨的。</p>`,
        date:'2019-04-18 12:30:50',
        clickNum:300
    },
    {
        id:3,
        title:'故事故事，便是故去的事情了，多说无益',
        content:`<p>在《雪中悍刀行》中，说出这句话的人却是那位春秋十三甲独占三甲的黄龙士。在小说中，春秋有三大魔头：黄龙士、人屠徐骁和人猫韩生宣！其中人屠徐骁因在战争中杀戮过多，人猫韩生宣则因为杀戮残忍，所以才被排入三大魔头之中，唯独黄龙士，却是凭借三寸不烂之舌，游说春秋九国君主，挑起了春秋九国的争霸之战，最终的结果是，春秋九国被灭掉了八国，因大战死伤的人数超过百万，而这一切的始作俑者，却是黄龙士这个一介儒生，因此他也才是春秋三大魔头之首，其危害更甚于徐骁和韩生宣。</p>
        <p>不过，纵使黄龙士再是一个魔头，他的这则语录说得还是很有道理的。故事，何谓故事？真地就是过去已经发生的事情了。既然是过去的事情，那么就算说得再多，又有什么用呢？可笔者又要问了，为什么过去的事情不能再说一说？如果说过去的事情不能再提，那么也就只能有一个原因，那么就是所谓的难言之隐了，既然为难言之隐，那么也就真地不用再提了，更或者，这就是所谓的故事！</p>`,
        date:'2019-04-18 12:30:50',
        clickNum:300
    },
    {
        id:4,
        title:'人生当苦无妨,良人当归即好',
        content:`<p>在《雪中悍刀行》中，这句话是轩辕敬城留给他妻子的。轩辕敬城是这部小说中的一位悲剧人物，虽然他最终达到了儒圣的境界，可最终为了妻子和女儿，他还是和轩辕大磐同归于尽了。而他留给妻子的，却是一坛坛的桂子酒，当然还有刻在酒瓶底下的这条语录了。</p>
        <p>笔者在读到这里的时候，却是很为轩辕敬城不值，为了如此的一个女人，却是白白耽误自己的一生，这却又是何苦呢？这句话中，轩辕敬城留给自己的，却只是人生当苦，无妨！而对于那个已经背叛了他的妻子的，却是良人当归，即好！自己吃了那么多苦，却只是无妨二字，妻子背叛了他，却只是当归即好！人之痴情若此，却也只能让人感动了吧！</p>`,
        date:'2019-04-18 12:30:50',
        clickNum:300
    },
    {
        id:5,
        title:'不握剑了，握着她的手，这样的江湖，比什么都好',
        content:`<p>在《雪中悍刀行》中，这句话是木剑温华所言。温华在江湖上只是一个落魄的游侠儿，买不起最便宜的铁剑，只能挂一把木剑。可以说温华闯荡江湖很艰难，但是他却一心追求自己的剑道，哪怕徐凤年要为他引荐老剑神李淳罡，温华却都是选择了拒绝。直到后来，黄三甲传授了他两剑，并以这两剑为恩情要挟他，让他刺杀好兄弟徐凤年，温华为了兄弟，自断一腿一臂，自废武功，算是还了黄三甲的两剑之恩。而最终他更是折断木剑，退出了江湖。</p>`,
        date:'2019-04-18 12:30:50',
        clickNum:300
    },
    {
        id:6,
        title:'人生两苦，想要却不得，拥有却失去',
        content:`<p>在《雪中悍刀行》中，说出这句话的人是北凉都护褚禄山。褚禄山这个人物，可以说名声很坏。笔者不能明白，烽火戏诸侯明明是想给褚禄山一些赞誉，可为什么又要把他写成一个恶人。可就是褚禄山这么一个恶人，却又偏偏能够说出，“我褚禄山一辈子可能会换很多东西，但唯一不会换的就是自己的主子！”也确实是这样，褚禄山一辈子都是忠于徐家，义父徐骁在时，他忠于徐骁；义父徐骁不在了，他忠于新凉王徐凤年，或许也正是褚禄山的这种忠诚，最终才让读者认可他这个人物吧！</p>`,
        date:'2019-04-18 12:30:50',
        clickNum:300
    },
    {
        id:7,
        title:'什么叫喜欢一个人？那就是见到对方之前，不知情为何物，错过之后，更不知情为何物',
        content:`<p>在《雪中悍刀行》中，这句话却也是老剑神李淳罡所言，其实讲的还是情之一字。情为何物，本就难懂！老剑神李淳罡终其一生，却也没有明白，情为何物？但是他遇到了对的人，是绿袍儿；而他也错过了对的人，还是绿袍儿。不要说李淳罡一生有多么地风光，为什么不去看看李淳罡一生的失意！曾经的江湖一代剑神，或许没有败给过任何人，却只败给了一个字，那就是“情”字，那就是真正地喜欢一个人，一个叫绿袍儿的平凡女子！</p>`,
        date:'2019-04-18 12:30:50',
        clickNum:300
    }
]

//图片对应缩略图列表
var thumbs=[
    {
        id:1,
        thumbUrls:[
            basePath+'/thumbs/thumb1.jpg',
            basePath+'/thumbs/thumb2.jpg',
            basePath+'/thumbs/thumb3.jpg',
            basePath+'/thumbs/thumb4.jpg',
            basePath+'/thumbs/thumb5.jpg',
            basePath+'/thumbs/thumb6.jpg',
        ]
    },
    {
        id:2,
        thumbUrls:[
            basePath+'/thumbs/thumb7.jpg',
            basePath+'/thumbs/thumb8.jpg',
            basePath+'/thumbs/thumb9.jpg',
            basePath+'/thumbs/thumb10.jpg',
            basePath+'/thumbs/thumb11.jpg',
            basePath+'/thumbs/thumb13.jpg',
        ]
    }
]

//商品列表
var goods=[
    {id:1,imgUrl: basePath+'/goods/goods1.jpg',title:'小米9 6GB+128GB 骁龙855，索尼4800万超广角微距三摄',old:999,new:888,num:390},
    {id:2,imgUrl: basePath+'/goods/goods2.jpg',title:'小米9 SE 6GB+64GB 索尼4800万超广角三摄，骁龙712',old:999,new:888,num:290},
    {id:3,imgUrl: basePath+'/goods/goods3.jpg',title:'Redmi Note 7 3GB+32G 4800万拍照千元机，18个月超长质保',old:999,new:888,num:300},
    {id:4,imgUrl: basePath+'/goods/goods4.jpg',title:'小米8青春版6GB+64GB 潮流镜面渐变色，2400万自拍旗舰',old:999,new:888,num:370},
    {id:5,imgUrl: basePath+'/goods/goods5.jpg',title:'小米8 SE 6GB+64GB 三星 AMOLED 全面屏，骁龙710',old:999,new:888,num:590},
    {id:6,imgUrl: basePath+'/goods/goods6.jpg',title:'小米6X 6GB+128GB 轻薄美观的拍照手机',old:999,new:888,num:490},
]

//商品详情
var goodsDetails=[
    {id:1,sell_price:888,marked_price:999,num:60,sell_time:'2019-06-06 12:00:00',product_code:123456},
    {id:2,sell_price:888,marked_price:999,num:60,sell_time:'2019-07-07 12:00:00',product_code:234567},
    {id:3,sell_price:888,marked_price:999,num:60,sell_time:'2019-05-05 12:00:00',product_code:345678},
    {id:4,sell_price:888,marked_price:999,num:60,sell_time:'2019-03-03 12:00:00',product_code:456789},
    {id:5,sell_price:888,marked_price:999,num:60,sell_time:'2019-02-02 12:00:00',product_code:250250},
    {id:6,sell_price:888,marked_price:999,num:60,sell_time:'2019-01-01 12:00:00',product_code:520520}
]

//商品图文介绍
var goodsDescs=[
    {id:1,title:'小米9 6GB+128GB 骁龙855',info:`<div class="article-content"><p><span class="bjh-p">八卦是易经的主体部分，也是构成道家文化思想的基础。史料记载，八卦的形成源于河图和洛书。最早是三皇五帝之首的伏羲所发明。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3647733854,1098005036&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=400&amp;s=0281DD4D5EA3E65D161559380300A040" data-loaded="0"><span class="bjh-image-caption">左河图右洛书</span></div><p><span class="bjh-p">八卦表示事物变化的阴阳，<span class="bjh-strong">用“一”代表阳，用“- -”代表阴</span>。用这两种符号，按照大自然的阴阳变化平行组合，组成八种不同形式，叫做八卦。</span></p><p><span class="bjh-p">八卦其实是最早的文字表述符号，学习易经，可从学习八卦入手。</span></p><div class="img-container"><img class="normal" width="509px" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2951315288,782883870&amp;fm=173&amp;app=49&amp;f=JPEG?w=509&amp;h=424&amp;s=DD1AA35775C96CE85A7069FD0300E033" data-loaded="0"></div><p><span class="bjh-p">今天我们来介绍一下《周易》后天八卦。</span></p><p><span class="bjh-p">乾代表天，坤代表地，巽代表风，震代表雷，</span></p><p><span class="bjh-p">坎代表水，离代表火，艮代表山，兑代表泽。</span></p><p><span class="bjh-p">关于八卦的样貌卦形，后人总结出一首歌诀：</span></p><p><span class="bjh-p"><span class="bjh-strong">乾三连，坤六断；震仰盂，艮覆碗；</span></span></p><p><span class="bjh-p"><span class="bjh-strong">离中虚，坎中满；兑上缺，巽下断。</span></span></p><p><span class="bjh-p"><span class="bjh-strong">乾卦：</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2415561678,1856034424&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=306&amp;s=51138C7621AAA72052038ACC0200F089" data-loaded="0"><span class="bjh-image-caption">乾卦</span></div><p><span class="bjh-p">乾为天。方位位于西北。五行代表金。</span></p><p><span class="bjh-p">家庭中代表父亲，动物中代表马，身体上代表头，运动上代表强健，权利上代表君王。</span></p><p><span class="bjh-p"><span class="bjh-strong">坤卦：</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=490794704,1744661971&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=307&amp;s=76D788768F12B6094A138AEE0200701C" data-loaded="0"><span class="bjh-image-caption">坤卦</span></div><p><span class="bjh-p">坤为地。方位位于西南。五行代表土。</span></p><p><span class="bjh-p">家庭中代表母亲，动物中代表牛，身体上代表腹，运动上代表顺畅，权利上代表百姓。</span></p><p><span class="bjh-p"><span class="bjh-strong">震卦：</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1984082096,2370255342&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=306&amp;s=1F478856E752A6294A120AEE0200700C" data-loaded="0"><span class="bjh-image-caption">震卦</span></div><p><span class="bjh-p">震为雷。方位位于正东。五行代表木。</span></p><p><span class="bjh-p">家庭中代表长男，动物中代表龙，身体上代表足，运动上代表动。</span></p><p><span class="bjh-p"><span class="bjh-strong">巽（xun，四声）卦：</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=885847781,3162416563&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=307&amp;s=59238C56279AA62952079ACC0200E0AD" data-loaded="0"><span class="bjh-image-caption">巽卦</span></div><p><span class="bjh-p">巽为风。方位位于东南。五行代表木。</span></p><p><span class="bjh-p">家庭中代表长女，动物中代表鸡，身体上代表股，运动上代表无孔不入。</span></p><p><span class="bjh-p"><span class="bjh-strong">坎（kan，三声）卦：</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2931581386,2215649593&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=307&amp;s=5D738C56A712B62946038ECE0200F007" data-loaded="0"><span class="bjh-image-caption">坎卦</span></div><p><span class="bjh-p">坎为水。方位位于正北。五行代表水。</span></p><p><span class="bjh-p">家庭中代表中男，动物中代表猪，身体上代表耳，运动上代表下陷。</span></p><p><span class="bjh-p"><span class="bjh-strong">离卦：</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1107430871,1522622029&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=306&amp;s=5F638856271AA6294A1402EC0200E08E" data-loaded="0"><span class="bjh-image-caption">离卦</span></div><p><span class="bjh-p">离为火。方位位于正南。五行代表火。</span></p><p><span class="bjh-p">家庭中代表中女，动物中代表雉（漂亮的野鸡），身体上代表目，运动上代表附着光明。</span></p><p><span class="bjh-p"><span class="bjh-strong">艮（gen，四声）卦：</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1531162743,118995031&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=306&amp;s=5B4388566712B629421402EC0200E006" data-loaded="0"><span class="bjh-image-caption">艮卦</span></div><p><span class="bjh-p">艮为山。方位位于东北。五行代表土。</span></p><p><span class="bjh-p">家庭中代表少男，动物中代表狗，身体上代表手，运动上代表静止。</span></p><p><span class="bjh-p"><span class="bjh-strong">兑卦：</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1943841961,1819442876&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=309&amp;s=5F438856EF1AB6094E038ECE0200508F" data-loaded="0"><span class="bjh-image-caption">兑卦</span></div><p><span class="bjh-p">兑为泽。方位位于正西。五行代表金。</span></p><p><span class="bjh-p">家庭中代表少女，动物中代表羊，身体上代表口，运动上代表说话、说服。</span></p><p><span class="bjh-p"><span class="bjh-strong">八卦相生：</span></span></p><p><span class="bjh-p">乾、兑（金）生坎（水），坎（水）生震、巽（木），震、巽（木）生离（火），离（火）生坤、艮（土），坤、艮（土）生乾、兑（金）。</span></p><p><span class="bjh-p"><span class="bjh-strong">八卦相克：</span></span></p><p><span class="bjh-p">乾、兑（金）克震、巽（木），震、巽（木）克坤、艮（土），坤、艮（土）克坎（水），坎（水）克离（火），离（火）克乾、兑（金）。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2783293576,3996663644&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=468&amp;s=DA8E83454479C3CE0CB8353B0300C04A" data-loaded="0"><span class="bjh-image-caption">周文王</span></div><p><span class="bjh-p"><span class="bjh-strong">八卦旺衰</span></span></p><p><span class="bjh-p">乾、兑旺于秋，衰于冬；震、巽旺于春，衰于夏；</span></p><p><span class="bjh-p">坤、艮旺于四季，衰于秋；离旺于夏，衰于四季；</span></p><p><span class="bjh-p">坎旺于冬，衰于春．（四季是指每个季节的后一个月。）</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1084620579,1949795886&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=538&amp;s=82108A6C0AF1E655581F5B3F0300F04B" data-loaded="0"><span class="bjh-image-caption">伏羲</span></div><p><span class="bjh-p"><span class="bjh-strong">最后再浅谈一下先天八卦与后天八卦：</span></span></p><p><span class="bjh-p">先天八卦为伏羲观物取象所作所创，后天八卦为周文王被囚羑里时所推演而成，两者八卦方位不同。先天八卦是伏羲用来预测天气的，后天八卦是文王用来预测凶吉的。后天八卦依照先天八卦推导出来，后天八卦更为实用于生活，也就是所谓的“先天为体，后天为用。”</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2232659312,4172618418&amp;fm=173&amp;app=49&amp;f=JPEG?w=585&amp;h=324&amp;s=4610E12307226EB153EC70CA010080B3" data-loaded="0"><span class="bjh-image-caption">先天八卦与后天八卦</span></div><p><span class="bjh-p">以后还会为大家介绍《周易》的更多知识，敬请关注。</span></p><p><span class="bjh-p"><span class="bjh-br"></span></span></p></div>`},
    {id:2,title:'小米9 SE 6GB+64GB 骁龙855',info:`<div class="article-content"><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics3.baidu.com/feed/e1fe9925bc315c6021c9c62b72de24174854770e.jpeg?token=18ccb7835f8d6bdfe53e5b522ce3c030&amp;s=DAA225C54C18BCCE5634527903005055" data-loaded="0"></div><p><span class="bjh-p">视觉中国供图</span></p><p><span class="bjh-p"><span class="bjh-strong">执意要购置一身战袍，黄色的白色的</span></span></p><p><span class="bjh-p">塔庚</span></p><p><span class="bjh-p">那是多么美好的往事。年少的时候，真是什么荒唐事都做得出来。当时觉得合理极了，多年以后回望才发现，那些都是只有那个年纪才会做的事。当时不做，以后就再也不会做了。</span></p><p><span class="bjh-p">偶尔会有这样一种执念，比如穿某个颜色会带来好运气，出门靠左走会带来一天好心情，这个绿灯如果顺利通过一定会遇上绿波带……</span></p><p><span class="bjh-p">其实胜算只有一半，但我们总是愿意相信生活中的小确幸，它让我们觉得，这一天和其他日子，有点不一样。</span></p><p><span class="bjh-p">高考那年，我和闺蜜的执念就是，一定要购置一身战袍，才能战无不胜。于是高考前一日，我俩相约逛街去了。现在想来，这脑沟回也是跟别人不一样。没有复习，没有跟老师最后讨教，也没有和父母相看两厌，而是愉快地走上街头，为出征前做最后的准备。</span></p><p><span class="bjh-p">什么颜色最有战斗力呢？</span></p><p><span class="bjh-p">我们都不知道。18岁的年纪，对各种颜色已经免疫，平日里最爱黑白灰，觉得这样最酷。可是披上这些颜色，总感觉有点垂头丧气，用今天的话说就是太丧了，应该是很难“考中”的颜色吧。那么，什么颜色的隐喻是金榜题名呢？红色？太招摇了，也太热了。毕竟炎炎夏日，一身火红总让人觉得异类，还没开考，自己先要浑身不自在。逛了好几个小时，流了几身汗，依然无果。</span></p><p><span class="bjh-p">我们的城市有一条街，像很多城市一样，它有个没有辨识度的名字，叫风光路。小时候，从不觉得它俗气，一到新年或开学季，就要来这里买新衣服。那一年的高考还在7月，因为这件人生大事，我和闺蜜结伴前来。</span></p><p><span class="bjh-p">具体方案怎么出炉的，谁提出谁附议，早已不得而知。但是这天下午，我们应该是瞒过了父母，弄来了钱，秘密出动了。</span></p><p><span class="bjh-p">多年以后，看到埃莱娜·费兰特“那不勒斯四部曲”之一《我的天才女友》，两个女主在少女时代逃课一日，把钱藏在石头底下，瞒过父母去看大海……两个少女在野外裙角飞扬的自由时刻，我想到的就是和闺蜜相约逛街，在父母觉得紧张透了的时刻，我们胜利出逃了。</span></p><p><span class="bjh-p">那是多么美好的往事。年少的时候，真是什么荒唐事都做得出来。当时觉得合理极了，多年以后回望才发现，那些都是只有那个年纪才会做的事。当时不做，以后就再也不会做了。</span></p><p><span class="bjh-p">那天整条街逛遍，我们购置的战袍是一件黄色的T恤衫，一件白色的短裤。黄色是主色调，白色来平衡一下，明亮，吉祥，又不那么热闹。好吧，就它了！</span></p><p><span class="bjh-p">傍晚，我们很自然地各自回家了。第二天一大早怎么如约穿上它，怎么跟父母解释的，我们应该自有一套。总之我们按计划实现了自己的愿望，考前甚至还在学校门口碰了个头。</span></p><p><span class="bjh-p">这身战袍3天未换，捂了一身臭汗，我们却觉得完美至极。</span></p><p><span class="bjh-p">后来跟朋友聊天，大家对高考前一天都有奇怪的经历：有人3天没洗澡，坚信一洗澡好运气就没了；有人一夜没睡，跑到河边看星星；有人平日住校，高考前一天特意离开宿舍找个安静的地方，以为可以好好休息，结果适得其反。</span></p><p><span class="bjh-p">同款战袍并没有带来好运气。我踩着底线进入一所心仪的大学，却没读上心仪的专业，她选了一所民办大学，读她最喜欢的英语。</span></p><p><span class="bjh-p">这些年际遇会有短暂不同，但一切都是可变的。只要时间的长河足够长足够宽，你们又一直有联系，总会再次找到同样的步调。现在我们扔过来扔过去的，是跑步机上的卡路里，谁要是敢偷懒，就等着对方狠狠地用数据砸过来吧。某晚发了一个朋友圈：年少的时候比成绩，成年之后比体脂。闺蜜第一时间评论：我们穿过同款同号，都不许胖啊。</span></p><p><span class="bjh-p">时光迅速打回那一天。两个80斤的姑娘，穿着最小号的黄白色战袍出征高考，我们都以为，彼此会有一样明亮的未来。</span></p><p><span class="bjh-p"><span class="bjh-strong">鼓励与祝福翻山越岭 复读生很幸福</span></span></p><p><span class="bjh-p">张雨生</span></p><p><span class="bjh-p">我细细浏览了每一份期望，最新的留言说：“班长，明天就要高考了，带着全班的力量去冲吧！”我登时热血升腾，有一种说不出的激动和感动，每条留言都直接敲打在我的心上，我给那个未接来电最多的号码回了电话。</span></p><p><span class="bjh-p">那个日子特别好记，2016年6月6日，是我参加复读，第二次高考的前一天。借着看考场的机会，我第一次从郊区的学校走进县城。</span></p><p><span class="bjh-p">6月初的光景，小城格外炎热。在此之前，我从未见过这片学校之外的天地。</span></p><p><span class="bjh-p">我不敢错过窗外任何一处风景，同时又急切地想要到达目的地，看看考场的那一方课桌。在那张普普通通的桌子坐上两天之后，其结果就能决定我一年前的偏执是否有意义。</span></p><p><span class="bjh-p">我家在农村，复读需要住校。一年里，我回家的时间不超过20天。学校是封闭式教学，跟外界联系不便，对于从前的朋友和同学来说，我如同消失了一般。</span></p><p><span class="bjh-p">第二次填写高考报名表的时候，我想到了第一年高考的情形，那次，父亲在工地请了两天假，全心全意陪着我应考。</span></p><p><span class="bjh-p">父亲可能是刚下工就赶了过来，一脸的疲倦，还拿着那个常用的破旧布包。我考了两天，他在男生寝室一张堆满衣物的床上睡了两夜。每一场考试结束，他都在人群中满怀期待地等着我。</span></p><p><span class="bjh-p">在第一次高考失利后，我成了班里唯一复读的人。班里没有一个人认识我。</span></p><p><span class="bjh-p">看完考场回来后，我们几个同学还是像往常一样上自习，这两天，手机不用上交给老师了。我打开社交空间——每次打开，都会收到从前班级同学给我的留言，饱含鼓励。今天依然有很多条。</span></p><p><span class="bjh-p">我细细浏览了每一份期望，最新的留言说：“班长，明天就要高考了，带着全班的力量去冲吧！”</span></p><p><span class="bjh-p">我登时热血升腾，有一种说不出的激动和感动，每条留言都直接敲打在我的心上，我给那个未接来电最多的号码回了电话。</span></p><p><span class="bjh-p">熟悉的声音，瞬间让我红了眼睛。</span></p><p><span class="bjh-p">她曾在同学录上寄语我：要成为自己喜欢的人，要一直开心，万事胜意。</span></p><p><span class="bjh-p">手机另一端的她正在大学就读，此刻在上着晚自习。她溜出来，跟我细数以前的岁月点滴，赞许我的勇气，说我今天肯定紧张，过了明后两天就好了。</span></p><p><span class="bjh-p">“很多同学都在惦记你，都知道你马上要高考了。你现在的坚持是对的……”她给我讲了自己的大学生活，我明白，她是为了让我的信心更加坚定。</span></p><p><span class="bjh-p">回到了教室的座位，班主任在和大家聊天，开始讲每一个人在这一年的趣事，以及这一年的改变。他谈到我的时候，带着和悦的笑容：“你总是第一个到教室，学习努力，从来不会让我操心过多，只是成绩进步得慢一点……”</span></p><p><span class="bjh-p">他望着我说：“也许月考没有展现你的努力成果，由衷希望，明后天的考试成绩是你最满意的一次。”他眼神坚定，同学们也都和他一样，投来鼓励的目光。</span></p><p><span class="bjh-p">那天晚上，语数英、政史地的各科老师一一走进教室，还是在谈解题方法和注意事项。只不过这一次大家都很轻松，把之前的每一次错误，每一个遗憾都放进了笑声里。</span></p><p><span class="bjh-p">最后，每位同学都在黑板上写下了对自己的总结和展望。我写的是：“时光谦和，一年里从未对我的理想挑三拣四，荆棘相伴，信念之种更加坚定。”</span></p><p><span class="bjh-p">离开的时候，我们又齐声诵读了组建复读班立下的班训：“今日何为，明日何成。”</span></p><p><span class="bjh-p">同学们的目光坚定，充满期许，和我收到的那些留言一样。如今我坐在大学教室里，仿佛又看到了他们，看到去年今日的自己。</span></p><p><span class="bjh-p"><span class="bjh-strong">独一无二又明亮 我被男生当众表白</span></span></p><p><span class="bjh-p">李歆</span></p><p><span class="bjh-p">我突然有些释然，发现自己根本生气不起来，一种奇怪的情绪在心底蔓延开，冲淡了高考的紧张感。我那除了复习就是补课的中学生活，在临近结束时，因为他，突然增加了一笔意外却又绚烂的色彩。</span></p><p><span class="bjh-p">时至今日，我偶尔还会想起，自己在兵荒马乱的高考前一天被一个男生当众表白，几乎惊动了整栋教学楼。每每和同学谈起这段经历，我都不禁感慨：“很特别的回忆，也算终身难忘了。”</span></p><p><span class="bjh-p">那天本来和3年的每一天一样，似乎没什么差别。教室里的风扇呼啦呼啦地吹，却赶不走渗入空气里的炎热。大家紧着眉头，专注地盯着一沓又一沓的错题集，仿佛多看一道题，高考就能多得一分。</span></p><p><span class="bjh-p">午休时，后排给我传来一张皱巴巴的纸条。我一脸狐疑地打开，上面潦草地写着：“陈默说，他喜欢你。”停顿了好几秒钟后，我暗暗戳了一下旁桌的好友，问道：“陈默是哪个？我忘记了。”在好友指点下，我才把人和名字对上号，不禁有点尴尬。</span></p><p><span class="bjh-p">我所在的是理科班，45名同学，只有12名女生。升高三时，学校整体换班，使得我除了对座位周围的男生还算熟悉，后排的男生只能勉强记住名字。很多男生的名字，我临近毕业都没完全搞清楚。</span></p><p><span class="bjh-p">高三注定不适合在学习之外的任何事上投入过多精力，“或许是玩真心话大冒险游戏受罚了吧。”我顾不上想太多，平复了一下被打乱的思路和情绪，把它当作玩笑抛到脑后。</span></p><p><span class="bjh-p">但我还是低估了这个“玩笑”的后劲。高考前最后的一个晚自习，老师让大家出去休息，放松心情。不知何时，教室里已没剩下几个人。我正和好友聊着天，门口传来声音：“李歆，有人找。”我应声出门，看见班里的男生们都群聚在教室边上的大走廊里。那个叫陈默的男生被他们推了出来，一脸纠结，不停地挠着头，低头看了我几眼，想转身回去，却被男生再次推出来。忽然间，我脑子里有一根弦开始晃动，拼命地提醒我后面可能要发生什么。我有点慌了。</span></p><p><span class="bjh-p">还没等我做出反应，陈默像作了一个重大决定，面对着我，闭着眼睛，大吼了一声：“李歆，我喜欢你！”说完转身就跑，留我一人目瞪口呆地站在走廊里。因为动静太大，隔壁几个班的同学都奔出教室，询问着发生了什么。</span></p><p><span class="bjh-p">好友看见我蒙蒙的样子，拽着我想把这件事问清楚。陈默再一次被男生们推了出来，我忽然间怂了，拉拉好友：“算了别问了，就当是玩笑话，不会有啥影响。”陈默听到后突然激动起来：“李歆，我再说一遍，我喜欢你。这是第三遍！我是认真的，没开玩笑。”</span></p><p><span class="bjh-p">陈默的话让我当场愣住，内心五味杂陈：没开玩笑？我的天！都不认识怎么就喜欢了？明天就要上考场，为什么现在说！</span></p><p><span class="bjh-p">正当我愣神的时候，楼梯口的男生大喊：“老师来了！”大家瞬间以最快的速度奔向教室。这场告白事件，在老师的到来下，停在了告白未果阶段。</span></p><p><span class="bjh-p">剩下的晚自习，我都心不在焉，甚至没在意老师说的注意事项和鼓励。晚自习下课后，陈默追上了还没缓过神的我，喘着气道歉：“对不起李歆。今天不应该跟你说这些，要是影响到你考试，我罪过就大了。”见我不说话，他便解释，自己是因为真心话游戏被推出去表白，但害怕高考后见不到我，脑袋一热便说出了“喜欢”。</span></p><p><span class="bjh-p">“但我说的话都是真的！不管你对我有什么样的看法，也不管你会不会给我一个答复，我都无所谓，我喜欢你就好了。总之，李歆，高考加油！你在我心中是最厉害最好看的！”说完，他一溜烟跑了。</span></p><p><span class="bjh-p">我突然有些释然，发现根本生气不起来，一种奇怪的情绪在心底蔓延开，冲淡了高考的紧张感。我那除了复习就是补课的中学生活，在临近结束时，因为他，突然增加了一笔意外却又绚烂的色彩。</span></p><p><span class="bjh-p">最终我的高考还是没有发挥出正常水平，但并不是因为陈默，而是避免不了的紧张。陈默却和我截然相反，超常发挥，去了一所不错的大学。在接下来的几年里，陈默只发给我屈指可数的几次节日和生日祝福，我俩心照不宣地没有更进一步，止于某种不尴尬的平淡，并在这种平淡中渐渐失去联络。</span></p><p><span class="bjh-p">我从没有责怪过陈默当年的举动，年少冲动的荷尔蒙总是无法抑制。相反，我有点感谢那份无所畏惧脱口而出的“喜欢”，没有他的表白，我可能永远也不会知道那个人，也不会知道自己被默默地喜欢。在高考的重重硝烟里，它成为了独一无二的明亮记忆。</span></p><p><span class="bjh-p"><span class="bjh-strong">放过自己吧 那一晚不朽的失眠</span></span></p><p><span class="bjh-p">林飞</span></p><p><span class="bjh-p">如果那天晚上我选择睡宿舍，命运会不会因此不同呢？每一次在心底静静复盘当年当日，我都像回到案发现场的侦探，总会察觉到更新的蛛丝马迹，然后去印证10年后的人生境遇。</span></p><p><span class="bjh-p">高考已经过去10年了，那一晚的彻夜未眠，依然赖在心中。因为我至今还在琢磨一个不会得到答案的问题：如果那天晚上我选择睡宿舍，命运会不会因此不同呢？</span></p><p><span class="bjh-p">每一次在心底静静复盘当年当日，我都像回到案发现场的侦探，总会察觉到更细微的蛛丝马迹，然后去印证10年后的人生境遇。最后一次模拟考，是全市重点中学联考，我考了本校第二名，全市前10名。按照高三这一年的平均成绩，正常发挥，上清华北大是稳的。</span></p><p><span class="bjh-p">就像任何一个班级都存在“尖子生光环”一样，班主任老师对我寄予厚望，尤其对我的语文科目成绩。高中三年，我始终是她最爱的“小作家”。班主任期待从我手中，诞生本校一篇满分作文，能在书店教辅书上流芳的那种。</span></p><p><span class="bjh-p">“语文怎么会考砸呢？”我和很多同学都觉得数学是拉分大科目，其他科目则对前程不太会有决定性作用。而这是第一个“打脸”的伏笔。就让时间线回到高考前一天，在夏日阳光洒满青葱校园的早晨，我作了一个重要决定：今晚回家住！</span></p><p><span class="bjh-p">我家位于这座城市边缘的小镇，去高中学校有段不远不近的距离，要坐中巴车，因此高中3年我都是只在周末回家的住校生。</span></p><p><span class="bjh-p">我的高中宿舍位于顶楼，6个人挤一间，冬季朔风呼啸，夏天则是炎热不堪，不过习惯了夜里倒也能勉强安睡。其实宿舍里安装了空调，但我从来没见它运转过。</span></p><p><span class="bjh-p">高考前一天早晨，班级同学都忙着收拾满满当当的课桌。我看着窗外刺眼的阳光，思考今晚如此重要，会不会在宿舍热得难以入眠……我走向班主任，说今晚我想请假，搬回家住。</span></p><p><span class="bjh-p">此前班主任开过班会，说他们还是希望住校生考前不搞忽然的“特殊”，怕影响高考发挥。但毕竟班主任对我有一份额外的偏爱和信任，她犹豫了一会儿，同意了我的申请：“回去好好休息，明天好好考。”那天下午，我如愿以偿地回了家，在凉爽舒适的空调房间里翻了翻书，看了一遍错题集，还睡了一会儿觉。一切都以自然顺畅的节奏往前发展，没有异象。</span></p><p><span class="bjh-p">晚上，我按照平时在宿舍的睡觉时间躺下了。好了，悲剧正式上演。</span></p><p><span class="bjh-p">我在浅睡眠中大约徘徊了一个小时，却没能顺利进入下一层睡眠，而是不知被什么奇异的力量拽起来，进入恍惚状态。</span></p><p><span class="bjh-p">卧室空调悠悠地吐着冷气，屋外也不存在任何一点儿噪音。对啊，很适合睡眠啊！为什么我睡不下去了？</span></p><p><span class="bjh-p">我努力保持JPG一般的静止状态，反复告诫我的身体，此时真的太适合睡觉了，请所有细胞别再亢奋了。</span></p><p><span class="bjh-p">然而，自我催眠毫无作用。一个小时，两个小时……当时间以夸张的速度狂奔向凌晨，然后又向清晨步步紧逼的时候，我终于被迫承认一个恐怖的事实：我，失眠了，居然在高考前一夜失眠了。</span></p><p><span class="bjh-p">依稀记得那个清晨，我的有效睡眠时间不超过半小时。然后被我妈叫醒，洗漱吃早餐；我爸开车送我去考场。父母不知道我这一夜的煎熬。</span></p><p><span class="bjh-p">对于一个注重睡眠质量的人而言，失眠的后果是严重的。坐在稳操胜券的语文考场，我明显感觉到困意和焦虑交缠在一起，联手去我试卷上捣乱。我以昏昏沉沉的精神状态，靠身体的本能，机械地答题、写作文……</span></p><p><span class="bjh-p">交卷那一刻，我很确定地告诉自己，语文考砸了。</span></p><p><span class="bjh-p">好在我心态没有崩盘。中午抓紧时间补了一个午觉，下午数学开考时，感到真实的灵魂终于重回体内，整个人复活。</span></p><p><span class="bjh-p">等到所有科目考完，对了一下语文答案。大约20道选择题，我错了一半。以及我还知道一件比语文考砸打击更大的事儿：我选择回家的那一晚，学校宿舍竟然史上第一次开空调了，大家都睡得好满足。</span></p><p><span class="bjh-p">语文几乎比正常发挥少考了25分，其他科目还算理想。就因为语文，我和北大擦肩而过，班主任无言以对。虽然最终踏入的大学也很好，但整个大一我都沉浸在悔恨中。</span></p><p><span class="bjh-p">一转眼10年过去，生活看着还行，而我始终总是忍不住去研究那一晚的失眠。我最近一次提起时，家里那一位很毒舌地说：“哎呀有啥好研究的，也许你睡宿舍吹空调更兴奋，语文又少考10分呢！”</span></p><p><span class="bjh-p">这倒也是，既然那一晚并不美，那就给一个更差的假设放过自己吧。</span></p><p><span class="bjh-p"><span class="bjh-strong">妈妈说别紧张，明天就当模拟考</span></span></p><p><span class="bjh-p">白简简</span></p><p><span class="bjh-p">我背着拎着、自行车载着3年所积攒的书和练习册，走在回家的300米小路上。路两旁的香樟树都已亭亭如盖，想着前程命运要靠这些纸张来决定，少年的心还是有一点说不出来的愁——愁的另一个原因是，书有十几斤，我家住六楼，没电梯。</span></p><p><span class="bjh-p">我的故事和事故都十分丰富，然而面对高考这个重大事件，在它前一天，我的日子却没有一点特别。那是13年前的事情了，没有失眠，没有焦虑，只记得那天特别想吃西瓜。</span></p><p><span class="bjh-p">第二天就要高考了，考试前几天，学校把我们都放回了家，用班主任的话来说，你会几分就是几分，剩下的看心态。</span></p><p><span class="bjh-p">正好，我是一个心态很好、不较劲的人。中考时发现这所县一中离家只需步行5分钟，填志愿就果断放弃了省城的特招班；高一时发现自己和物理没缘分，高二就果断选了文科；甚至到后来高考做文综卷，发现有3道选择题完全不会，整整12分，考完就开始盘算要不去个Z大算了，选清华还是选北大就不纠结了……</span></p><p><span class="bjh-p">其实，让我们回家还有一个理由，就是把书桌抽屉清空，布置考场。</span></p><p><span class="bjh-p">我背着拎着、自行车载着3年所积攒的书和练习册，走在回家的300米小路上。路两旁的香樟树都已亭亭如盖，想着前程命运要靠这些纸张来决定，少年的心还是有一点说不出来的愁——愁的另一个原因是，书有十几斤，我家住六楼，没电梯。</span></p><p><span class="bjh-p">在多年考试的训练下，我能背出每一本课本的内容，包括小字注解，甚至熟识配图上每一位历史名人的发型。后来我经常想，如果那时候的记忆用来背点别的，说不定我能拿《中国诗词大会》冠军。但对当时的我来说，高考将是有生以来最大的一次比赛。</span></p><p><span class="bjh-p">江南的6月上旬，黄梅天蠢蠢欲动，墙壁上地上的水汽正在洇出来，一如没开空调的我。爸妈都去上班了，家里十分安静。我是一个“整理控”，坐在房间地板上，把所有的复习资料分门别类摊了一地，如同一个广有四海的库房管理员——明天要验货。</span></p><p><span class="bjh-p">不怕高考是假的，当时不怕也是真的。从公布高考分数的那一天起，薛定谔的猫已经确定是活的了，蝴蝶的翅膀也同时扇起了时至今日的种种际遇。所以，我能在此气定神闲地回忆高考前一天。</span></p><p><span class="bjh-p">有不少同学为高考做了万全准备：家里住的远的，特地在考点附近开了宾馆房间；父母平常工作忙的，这两天也都请假在家陪着；据说还有妈妈量身定制了旗袍，准备送孩子去高考那天穿，寓意“旗开得胜”。</span></p><p><span class="bjh-p">我和爸妈都没有做特殊准备，毕竟，我家离考点那么近，我妈也穿不下旗袍。我爸直到我高中毕业那天，都对我是高三几班不是十分确定。我妈倒是一如既往做了一顿丰盛的晚餐，席间他们都没有跟我谈高考，顾左右而言他。多年后，我明白，他们是故意回避的，自以为天衣无缝。</span></p><p><span class="bjh-p">高考前一天，连作业都没了，这让做了12年作业的我十分不适应。据我妈的口述史，我在上小学时就十分热爱做作业，暑假作业能兴致勃勃做两遍，练就了无以伦比的速度。高三的作业量那么大，我还能每天10点上床睡觉，睡前还能看会闲书。</span></p><p><span class="bjh-p">今天没作业了，睡觉还有点早，让人不知所措。无所事事的我，独自上了屋顶露台乘凉。现在想来，是用一种“少年不识愁滋味”的心情，自我伤感了一下茫茫不知所往的前途，就像那会儿的多云天气，没有北辰星指引我的方向。不知道明天卷子难不难，不知道未来4年我会在哪里……想了半天，只有一点是确定的，初夏的夜晚，有蚊子。</span></p><p><span class="bjh-p">临睡前，我妈没绷住，跟我说了句，别紧张，明天就当模拟考，然后就被我爸拉走看电视去了。我走进房间，最后检查准考证和文具袋，想让自己紧张一点，配合一下明天高考的气氛，可是袭来的是困意。</span></p><p><span class="bjh-p">嗯，麒麟瓜已经放进冰箱，明天考完第一场，中午就能回家吃了。</span></p><p><span class="bjh-p">来源：中国青年报</span></p></div>`},
    {id:3,title:'Redmi Note 7 3GB+32G',info:`<div class="article-content"><p><span class="bjh-p">自从史莱克学院培养出初代史莱克七怪之后，每届学员中都会评选出自己时代的七怪，此后学院就会把所有资源倾注到他们身上，培养他们成才。到了蓝轩宇这一代，史莱克七怪势必会再次组建。根据剧情来看，新任史莱克七怪已经出现了4位，叶灵瞳会是第五怪吗？</span></p><p><span class="bjh-p">七怪之首：蓝轩宇</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics3.baidu.com/feed/fc1f4134970a304e97a2b8aa388b4982c8175ca2.jpeg?token=d43ba0ef35c64559b5073421d85c2f6d&amp;s=1035CF34439349E5864070CB0300B0B0" data-loaded="0"></div><p><span class="bjh-p">终极斗罗整部作品讲述的就是主角蓝轩宇冒险成才的故事，他自然和史莱克七怪的名号有千丝万缕的关系。根据前作的规律，每做的主角一定都是史莱克七怪中的核心成员，所以蓝轩宇势必也会加入史莱克七怪的队伍，成为团队的核心甚至是领队。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics0.baidu.com/feed/0dd7912397dda1449f233d4d5af43ea60df486eb.jpeg?token=91cfc7bce4a971329a85822cf97579f4&amp;s=7114559C46F0798646F9C5D9030030BE" data-loaded="0"></div><p><span class="bjh-p">根据终极斗罗最新话剧情，蓝轩宇入学天罗学院高能少年班，这已经是一个很高的起步阶。光听名字就知道，天罗学院是天罗星最好的两所学院之一，地位很可能仅次于史莱克学院，再借助高能班的优势，蓝轩宇下一步必定是入学史莱克。</span></p><p><span class="bjh-p">七怪敏攻：刘锋</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics2.baidu.com/feed/d4628535e5dde711cdd623974eac201f9d166117.jpeg?token=4d98352df3c9be73fdea8cc606aaab7d&amp;s=D581FD1F491070D40C70DDF10300F030" data-loaded="0"></div><p><span class="bjh-p">终极斗罗最新话中，登场了很多新角色，他们都是天罗学院高能少年班的学院，就比如叶灵瞳战队的吕千寻，蓝轩宇战队的刘锋和钱磊。叶灵瞳战队的吕千寻很强，将来势必会成为蓝轩宇的对手，而刘锋和钱磊则会成为小龙神的队友一起加入史莱克学院。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics2.baidu.com/feed/f2deb48f8c5494eed5dfa389c5b60efa98257e6d.jpeg?token=51dd3a226af12e296edc0902a2cedcdb&amp;s=7581F11D51107FCC38748DDC03001031" data-loaded="0"></div><p><span class="bjh-p">刘锋武魂白龙枪，武魂附加龙属性，速度极快，攻击力稍逊，所以刘锋选择了敏功系而不是强攻系。相信看到白龙枪，漫迷们第一时间想到的就是斗一里的破魂枪，跨级挑战封号斗罗，怎么到了主角这里就分配一这么弱的。只能说，刘锋的白龙枪将来很可能会迎来一次升级吧。</span></p><p><span class="bjh-p">七怪强攻：钱磊</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics3.baidu.com/feed/4610b912c8fcc3ce63e7af087b06388cd43f20aa.jpeg?token=593f437d4701789c34e22ab73368d0d2&amp;s=4C0AF7174103F8EC587085FE03005033" data-loaded="0"></div><p><span class="bjh-p">斗罗大陆系列塑造了很多奇特的武魂，而钱磊的武魂却是最奇特的，他的武魂是“钱”。他的第一魂技是“召唤之门”，消耗一定数量的体力，召唤魂兽代替自己作战。虽然现在还不怎么靠谱，但随着魂力的提升和修为的增加，钱磊的强大会大量的激发释放出来，成为七怪强大的主攻手，毕竟“有钱能使鬼推磨”不管在哪里都是适用的。</span></p><p><span class="bjh-p">七怪辅助：冻千秋</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics7.baidu.com/feed/4a36acaf2edda3ccd23479e2e9aad705233f92ed.jpeg?token=997e3040cb099bf537a3f9425e605222&amp;s=E0328E384953E6CC1662E2C9030030AF" data-loaded="0"></div><p><span class="bjh-p">冻千秋是十万年魔魂大白鲨化形，目前拜在古月娜门下学习，将来势必也会入学史莱克学院，和蓝轩宇相遇。冻千秋是公认的女主，古月娜钦定的儿媳妇，将来必定也会是史莱克七怪中的一员。冻千秋本体是水系生物，那么作战的时候很可能擅长治疗辅助类技能，而且她的老师古月娜也非常擅长治愈系能力。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics4.baidu.com/feed/203fb80e7bec54e7a9ca24de517b75544ec26a90.jpeg?token=d120388538e16fb611dc49d3cd4d680b&amp;s=5903E91759B2E2CE00D1CDF80300D030" data-loaded="0"></div><p><span class="bjh-p">新任史莱克七怪已经出现了4位，除了蓝轩宇本人之外，最惹人喜欢的应该就是小胖子钱磊了，一看到他就让人想起马小胖马红俊啊。除了以上4位之外，戏份非常足的叶灵瞳会成为史莱克的第五怪吗？</span></p></div>`},
    {id:4,title:'小米8青春版6GB+64GB',info:`<div class="article-content"><p><span class="bjh-p">黑色四叶草中魔法帝为了召集王选骑士团特地进行了一场选拔赛，一方面是为了挑选进入王选骑士团的人才，另一方面也是为了抓住四叶草王国的叛徒。其实魔法帝自从白夜的魔眼出现，他就开始怀疑魔法骑士团中内部藏有叛徒，只是没有公开表明，一直暗地进行调查。</span></p><p><span class="bjh-p">通过王选骑士团的比赛，魔法帝发现了芬拉尔的弟弟兰吉尔斯拥有不正常的魔法力量，因而就将矛头对准了兰吉尔斯。希望通过他的口，得知背后的操纵者。那么隐藏在魔法骑士团中的叛徒究竟是谁呢？其实他早就露出了马脚，后来杀害魔法帝也是蓄谋已久。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics1.baidu.com/feed/810a19d8bc3eb135c560cddddde646d7fc1f442a.jpeg?token=7c46d8364fea3af13366d4d731d38d49&amp;s=DECA7A23489075FB8C38D1CA0100E0B1" data-loaded="0"></div><p><span class="bjh-p">首先如果大家还有记忆，就一定还记得在战功勋授仪式之上，有一个重要的人物没有出场，尽管他声称自己有事来不了。可是也不得不引起我们的注意，这样一个重要的场合他作为金色的黎明团团长，居然没有出现，这其中必有蹊跷，事实也果然如此，随后王都就遭到了白夜的魔眼的袭击，这之中必定存在着一定的联系。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics3.baidu.com/feed/faedab64034f78f08b24bcaa00c9e451b2191cbc.jpeg?token=fca6b7fe7b7389c9bfddc2685b8f23c6&amp;s=669668231F8264C20AF544DA010070B1" data-loaded="0"></div><p><span class="bjh-p">然后黑色的暴牛团曾经和白夜的魔眼进行过一场苦战，夜见团长也跟当时的白夜的魔眼首领交了手。那时白夜的魔眼首领就展现出了一种熟悉夜见团长的感觉，他直呼团长的名字，而且还猜测到了团长的下一步动作，这么了解团长，必定是一个和夜见很熟悉的人。而这个人就是曾经和夜见在战场上相遇，多次共同战斗，一起升为魔法骑士团团长的凡金斯。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics1.baidu.com/feed/83025aafa40f4bfbbd2deda27bb796f4f5361847.jpeg?token=04ab41ff4217c1d6430f1a53fe092dd4&amp;s=3E887A2359D761E90E5DC5DE010080B0" data-loaded="0"></div><p><span class="bjh-p">当时夜见团长跟白夜的魔眼首领对战时，就觉得反派首领给人的感觉很熟悉，很像是凡金斯，战后夜见团长立马就去找凡金斯求证了，在看到了凡金斯面具下的真容之后，发现两人气息迥异，使用的也是完全不同的魔法，再加上两人又是过命的交情，他一心觉得凡金斯不会是坏人，他理解凡金斯，所以才消除了心中的疑虑，没有继续怀疑凡金斯。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics5.baidu.com/feed/eaf81a4c510fd9f9fceadc1a5cd53a2e2a34a4c5.jpeg?token=36b109c2cfae809fc1ac91fb401f3819&amp;s=08C27A238EB737BDCB9DF0CA0100B0B1" data-loaded="0"></div><p><span class="bjh-p">其次还有一个地方值得我们注意，那就是当镜头给到白夜的魔眼时，有一个站在黑暗中不明身份的人，他口中说着要复活那位大人，很明显他就是白夜的魔眼的一员，可是最后作者却给了一个明显的团徽，也就是金色的黎明团团徽，其实这就说明了他的真实身份。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics2.baidu.com/feed/f3d3572c11dfa9ec34fc67151b281907938fc1db.jpeg?token=1bc29688aa785140cac0619222fd6c21&amp;s=2E887A234B147FEF585C15C30100E0B1" data-loaded="0"></div><p><span class="bjh-p">综上叛徒就是金色的黎明团团长凡金斯，不过根据后面的漫画剧情我们也知道，众人所认识的凡金斯本身其实是个好人，只是他身体中还寄宿着白夜的魔眼首领的灵魂。他理解反派首领的感受，于是将身体交给了反派首领，希望反派首领能够和魔法帝有一个了结。结果就是魔法帝为了救民众被杀，当时的夜见才悔恨不已，只不过已经晚了。图片来源于网络，侵删致歉。</span></p></div>`},
    {id:5,title:'小米8 SE 6GB+64GB',info:`'<div class="article-content"><p><span class="bjh-p">在暴雪公布了《魔兽世界》怀旧服角色招架、躲闪、命中属性的运作方式和数值后，有玩家在论坛反馈称命中属性并没有如同暴雪所说的运作。随后暴雪作出了回应，表示这是因为1.12版本代码对属性的限制而产生的的问题。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics3.baidu.com/feed/738b4710b912c8fcd9b647edc1a27c41d78821ea.jpeg?token=6c8d750049c359d98928842273facba9&amp;s=DEA7C44A8E463CD4D6AE1DB80300C01A" data-loaded="0"></div><p><span class="bjh-p">这位玩家在论坛上贴了一张图片，显示的是一个拥有8%命中、满武器技能的60级盗贼在攻击团本Boss的时候出现了未命中情况。根据暴雪先前公布的信息，8%命中的玩家在攻击的时候不应该出现未命中情况。暴雪随后进行了测试和检查，并作出了下列回复：</span></p><p><span class="bjh-blockquote"><span class="bjh-p">针对玩家提到的，1.12时代的图片里，8%命中的角色攻击团本首领依然有未命中的情况，我们进行了进一步的深层次的仔细检查，这次针对的是不同种族、职业、天赋和装备的满级角色对团本首领的攻击命中情况。在这一过程中，我们发现了一些有趣的情况：</span><span class="bjh-p">1.12版本中有一些代码对命中进行了限定，导致了当怪物的防御技能和玩家的武器技能的差别高于10点时，装备或天赋上所提供的前1%的命中会被无视。</span><span class="bjh-p">也就是说，一个武器技能300点的角色攻击一个63级的，防御技能为315点的怪物时，需要的“命中上限”会是9%，而不是8%。但如果玩家有305点武器技能，比如装备对应的武器从剑类武器专精(人类)和斧类武器专精(兽人)中获得相应的武器技能，这一限定代码就不再对63级的怪物生效了。因此，武器技能在对抗团本级别怪物时无疑是十分有效的。</span><span class="bjh-p">在这次的经典旧世版本中，这一代码也被完整的还原了，因此这方面的机制也会准确地按照当年游戏中相应机制的来运作。</span><span class="bjh-p">感谢你们的回复和反馈，这对我们来说也是一种十分有趣的体验！</span></span></p></div>`},
    {id:6,title:'小米6X 6GB+128GB',info:`<div class="article-content"><p><span class="bjh-p">在最近更新的PTR 8.2.0.30613补丁中，暴雪新增了多张地图、图标和一张背景图，包括新副本麦卡贡行动的地图。</span></p><p><span class="bjh-p">新图标</span></p><p><span class="bjh-p">新地图</span></p><p><span class="bjh-p"><span class="bjh-strong">未被破坏的锦绣谷</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics4.baidu.com/feed/10dfa9ec8a136327f87f4c01601345e809fac790.jpeg?token=998bd77bb54f3e12536904083330656c&amp;s=93009C4DDAAFE04D5EAB862A0300405B" data-loaded="0"></div><p><span class="bjh-p"><span class="bjh-strong">麦卡贡行动副本地图</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics1.baidu.com/feed/34fae6cd7b899e51dc62324fb23b3c37c9950d1a.jpeg?token=7d9ffb667a16af0eeec0a131b60afeb5&amp;s=73A0FC4812FFC16C188B363C0300C048" data-loaded="0"></div><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics5.baidu.com/feed/fcfaaf51f3deb48fe47cc1580083df2d2cf57844.jpeg?token=3f4f907d0bdbaf206699b97265b6d1e7&amp;s=13B07CC932FFA068402FBC2C0300804B" data-loaded="0"></div><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics7.baidu.com/feed/0b46f21fbe096b6366158986e3af6240eaf8ac7e.jpeg?token=3778040db09dd7baf6e341b7c710d7ce&amp;s=53A0FC4852BFF06D420F98390300804B" data-loaded="0"></div><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics3.baidu.com/feed/58ee3d6d55fbb2fb9fd2e939bed6c5a04723dc46.jpeg?token=f3e868a4f47345f0c748219103101ab2&amp;s=13B07CC952FFC069080BAE280300D04B" data-loaded="0"></div><p><span class="bjh-p"><span class="bjh-strong">麦卡贡岛野外地图</span></span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics1.baidu.com/feed/3812b31bb051f819cae1dc4d2a28afe92f73e717.jpeg?token=f2e95b2614c23beff0000215a1f0fdc5&amp;s=03945CCDCA24F04D1C0D7E2D03003058" data-loaded="0"></div><p><span class="bjh-p">新背景图</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="http://pics5.baidu.com/feed/7acb0a46f21fbe09dfd141279efce9378644ad9c.jpeg?token=1f61a0b8ebd974abf8e1193030db3dd2&amp;s=48A2C25DEECF736C7A15BC730100E051" data-loaded="0"></div><p><span class="bjh-p">该背景图印有艾泽拉斯的地图，推测其与《魔兽世界》15周年纪念的大理石坐骑相关。</span></p></div>`},
]

//获取轮播图接口
app.get('/lunboData',function(req,res){
    res.send({
        data:lunboImgArr,
        status:0
    });
})

//获取新闻接口
app.get('/news',function(req,res){
    res.send({
        data:newsArr,
        status:0
    })
})

//获取新闻详情接口
app.get('/newsdetail/:newsId',function(req,res){
    var index=parseInt(req.params.newsId)-1;
    res.send({
        data:newsDetail[index],
        status:0
    });
})

//获取评论列表接口
app.get('/comments/:newsId',function(req,res){
    var newsId=req.params.newsId;
    var page=req.query.page;
    var index=(page-1)*2;
    var arr=comments.filter(item=>{
        return item.newsId==newsId
    })
    res.send({
        data:arr.slice(index,index+2),
        status:0
    })
})

//发表评论接口
app.post('/postmessage/:newsId',function(req,res){
    console.log(req.body);
    var addTime=moment().format('YYYY-MM-DDTHH:mm:ss.SSS');
    var newsId=req.params.newsId;
    var userName="zdc";
    var content=req.body.message;
    comments.unshift({
        newsId:newsId,
        addTime:addTime,
        userName:userName,
        content:content
    });
    console.log(addTime);
    res.send({
        status:0,
        data:{
            addTime:addTime
        }
    });
})

//获取图片类别接口
app.get('/photocates',function(req,res){
    res.send({
        status:0,
        photoCates:photoCates
    })
})

//获取图片列表
app.get('/photos/:cateId',function(req,res){
    if(req.params.cateId==0){
        res.send({
            status:0,
            data:photos
        })
    }
    else{
        var cateId=req.params.cateId;
        var arr=photos.filter(item=>{
            return item.cateId==cateId
        })
        res.send({
            status:0,
            data:arr
        })
    }
})

//获取图片详情接口
app.get('/photodetail/:photoId',function(req,res){
    res.send({
        status:0,
        data:photoDetails.filter(item=>{return item.id==req.params.photoId})
    })
})

//获取图片对应缩略图列表接口
app.get('/thumbs/:photoId',function(req,res){
    var data=thumbs.filter(item=>{
        if(item.id==req.params.photoId){
            return true;
        }
    })[0]
    res.send({
        status:0,
        data:data
    })
})

//获取商品列表的接口
app.get('/goodslist',function(req,res){
    res.send({
        status:0,
        data:goods
    })
})

//获取商品轮播图接口
app.get('/goodslubotu/:goodsId',function(req,res){
    var goodsId=req.params.goodsId;
    res.send({
        status:0,
        data:[ basePath+'/thumbs/thumb'+(goodsId*2-1)+'.jpg', basePath+'/thumbs/thumb'+goodsId*2+'.jpg',]
    })
})

//获取对应商品详情接口
app.get('/goodsdetail/:goodsId',function(req,res){
    var goodsId=req.params.goodsId;
    res.send({
        status:0,
        data:goodsDetails.filter(item=>{return item.id==goodsId})
    })
})

//获取对应商品的图文介绍
app.get('/goodsdescs/:goodsId',function(req,res){
    var goodsId=req.params.goodsId;
    console.log(goodsId);
    res.send({
        status:0,
        data:goodsDescs.filter(item=>{return item.id==goodsId})
    })
})

//获取购物车中商品列表
app.get('/shopcarlist/:goodsIdArr',function(req,res){
    var seletedGoodsArr=req.params.goodsIdArr.split(',');
    res.send({
        status:0,
        data:goods.filter(item=>{return seletedGoodsArr.indexOf(item.id.toString())>-1})
    })
})

//promise的使用
const fs=require('fs');

function promiseDemo(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,'utf-8',function(err,data){
            if(err) return reject(err);
            resolve(data);
        })
    })
}
// promiseDemo(path).then(res=>{return promiseDemo(path2)}).then(res=>{return promiseDemo(path3)});