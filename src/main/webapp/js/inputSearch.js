$('.search-box input').focus(function(){
    $(this).parent('.search-box').animate({"right":0},100);
    $(this).animate({"width":200},20).css({"color":"#323232"},100);
    $(this).css({"background-color":"#fff"},100);
    //$('.tui-jian').css({"display":"block"},200);
    setTimeout(function(){
        $(".tui-jian").addClass("show-lian")
    },230)
});
$(".search-box input").blur(function(){
    $(this).parent('.search-box').animate({"right":0},100);
    $(this).animate({"width": 75}, 20).css({"color":"#777"},100);
    $(this).css({"background-color":"#636267"},100);
    //$('.tui-jian').removeClass("show-lian");
});

$('#searchBox').keyup(function () {
    $.ajax({
        url: 'http://localhost:3000/html/ABSIndex.html',
        method: 'get',
        success: function (data) {
            data = [
                {
                    name: 'product1',
                    list: [
                        {
                            itemName: '白条产品',
                            linkUrl: 'www.baidu.com',
                            desc: '白条产品白条产品白条产品白条产品'
                        }
                    ]
                },
                {
                    name: 'product2',
                    list: [
                        {
                            itemName: '证券产品',
                            linkUrl: 'www.baidu.com'
                        }
                    ]
                }
            ]
        }
    })
});

var parallelPro = function(){
    var _this = this;
    this.$selectOpt = $('.all-fenlei,.fenlei-box');
    this.$selectItem = this.$selectOpt.find('a');

    //基金超市、定投排行当前状态
    //leftTab: 基金超市
    //rightTab: 定投排行
    this.tabType = 'leftTab';

    this.$noResult = $('<div class="no-result">该列表无可售卖的基金，请尝试其它筛选方式~</div>');

    this.login = null;
    seajs.use('common/unit/login/1.0.0/login.js', function(login){
        _this.login = login;
    });

    this.init();
};
parallelPro.prototype = {
    init: function(){
        var _this = this;
        this.bindEvent();
    },
    bindEvent: function(){
        var _this = this;
        //搜索框推荐
        $('.search-kuang').delegate('.search-box,.defTxt','click', function (e) {

            if($.trim($('.search-box').val()) == '' && !$('.search-kuang').data('besearch')){
                $('.search-kuang').data('besearch', true);
                _this.searchInputPromotion();
                $('.search-tan').show();
            }else{
                $('.search-tan').show();
            }
            e.stopPropagation();
        });

        _this.keyIndex = -1;
        $('#searchBox').keydown(function (event) {
            var len = $('.tui-jian li').length;
            $(this).next().val($(this).val())
            if(event.which == 38){
                _this.keyIndex --;
                if(_this.keyIndex == -2){
                    _this.keyIndex = len - 1;
                }
                _this.setHighLight(len)
            }else if(event.which == 40){
                _this.keyIndex ++;
                if(_this.keyIndex == len + 1){
                    _this.keyIndex = 0;
                }
                _this.setHighLight(len)
            }else{
                _this.keyIndex = -1
            }
        }).keyup(function (event) {
            var len = $('.search-main li').length;
            $(this).next().val($(this).val());
            /*if(_this.keyIndex == -1 || _this.keyIndex == len + 1){
             console.info('')
             $('.search-box form').attr('action', '//fund.jd.com/advanceSearch.html')
             }else{
             $('.search-box form').attr('action', $('.tui-jian li').eq(_this.keyIndex).data('url'))
             }*/
            $('.search-box form').attr('action', $('.tui-jian li').eq(_this.keyIndex).data('url'))
            if((event.which>= 38 && event.which<=40) || event.which == 116 || event.which == 17) return;
            if($.trim($(this).val()) != ''){
                _this.searchList($(this).val())

            }else{
                _this.searchInputPromotion();
            }
        });


        //搜索框联想加自选
        var $searchList = $('.tui-j-box');

        /*$searchList.delegate('li', 'mouseenter', function () {
            _this.keyIndex = $(this).index();
            _this.setHighLight($(this).parents('ul').children().length)
        });*/
        $searchList.delegate('li', 'click', function () {
            $('.search-box form').attr('action', $('.tui-jian li').eq(_this.keyIndex).data('url')).submit()
        });
        $searchList.click(function (e) {
            e.stopPropagation();
        });

        //点击body隐藏搜索框联想
        $(document).click(function () {
            $('.tui-jian').removeClass("show-lian");
        })
    },

    //请求数据
    reqData: function(){
        var _this = this;
        var $loading = $('<div class="loading"></div>');

        //$('.product-infor-main').append($loading);

        if($('.search-name input').length){
            _this.$selectParam[_this.tabType].q = $('.search-name input').val();
        }else{
            _this.$selectParam[_this.tabType].q = $('.input-wrap input').val();
        }

        this.$selectParam[_this.tabType].op = this.opCate[_this.tabType] + ':' + this.opBrand[_this.tabType];
        if(_this.opCateId[_this.tabType] && _this.opBrandId[_this.tabType]){
            this.$selectParam[_this.tabType].op = this.opBrandId[_this.tabType] + ':' + this.opBrand[_this.tabType] + ',' + this.opCateId[_this.tabType] + ':' + this.opCate[_this.tabType];
        }else{
            if(_this.opCateId[_this.tabType]){
                this.$selectParam[_this.tabType].op = this.opCateId[_this.tabType] + ':' + this.opCate[_this.tabType];
            }else{
                this.$selectParam[_this.tabType].op = this.opBrandId[_this.tabType] + ':' + this.opBrand[_this.tabType];
            }
        }

        var url = '';
        switch (this.tabType){
            case 'leftTab':
                url = '//fund.jd.com/getLeftTab';
                break;

            case 'rightTab':
                url = '//fund.jd.com/getLeftTab'
        }
        $.ajax({
            /*url: 'http://atm.jr.jd.com/project/list.html',
             url: 'http://localhost:3000/html/secondary.html',*/
            url:url,
            type: 'get',
            dataType: 'jsonp',
            scriptCharset:'UTF-8',
            data: _this.$selectParam[_this.tabType],
            success: function(data){
                _this.mainData = data;
                _this.renderHtml(data);
                //xiaoxinIndex.init();
            }
        });
    },

    //数据格式化方法
    formatNumber: function(num, floatLen){
        var aNum = (num + '').split('.');
        var aStr = [],aNewStr = [];
        aStr = aNum[0].split('');
        aStr.reverse();
        for(var j = 0; j < aStr.length; j ++){
            if(!(j%3) && j){
                aNewStr.push(',');
            }
            aNewStr.push(aStr[j]);
        }
        aNewStr.reverse();
        var floatStr = '';
        if(floatLen){
            if (aNum[1]){
                aNum[1] += "000000001";
            } else {
                aNum[1] = "000000001";
            }
            floatStr = aNum[1] ? '.' + aNum[1].substr(0, floatLen) : '';
        }
        return aNewStr.join('') + floatStr;
    },

    //解析数据
    renderData: function(data){
        var html = '';
        var _this = this;

        if(_this.opCate[_this.tabType] == ''){
            $('.wanincome,.qiriincome').hide();
            $('.newvalue,.wanfen').show();
        }else if(_this.opCate[_this.tabType] == 106 || _this.opCate[_this.tabType] == 229){
            $('.newvalue,.wanfen').hide();
            $('.wanincome,.qiriincome').show();
        }else{
            $('.newvalue').show();
            $('.wanincome,.qiriincome,.wanfen').hide();
        }
        for(var i = 0; i < data.length; i ++){
            var dataItem = $.extend({}, data[i]);
            dataItem.price = (dataItem.price == null) ? '--':_this.formatNumber(dataItem.price, 4);
            dataItem.totalPrice = (dataItem.totalPrice == null) ? '--':_this.formatNumber(dataItem.totalPrice, 4);
            dataItem.navDate = (dataItem.navDate == null) ? '--':dataItem.navDate.substring(0,10);
            dataItem.fundRevenuePerMillion = (dataItem.fundRevenuePerMillion == null) ? '--':_this.formatNumber(dataItem.fundRevenuePerMillion,4);
            dataItem.annualYield = (dataItem.annualYield == null) ? '--':dataItem.annualYield + '%';

            dataItem.subItemName = null;
            if(!dataItem.fundAbbreviation){
                dataItem.subItemName = dataItem.itemName.substring(0,16);
            }else{
                dataItem.subItemName = dataItem.fundAbbreviation;
            }
            if(_this.tabType == 'leftTab'){
                //近一周
                dataItem.navWeeklyIncreasedRate = (dataItem.navWeeklyIncreasedRate == null) ? '--': _this.formatNumber(dataItem.navWeeklyIncreasedRate, 2) + '%';
                //近一月涨幅
                dataItem.navMonthlyIncreasedRate = (dataItem.navMonthlyIncreasedRate == null) ? '--': _this.formatNumber(dataItem.navMonthlyIncreasedRate, 2) + '%';
                //近三个月涨幅
                dataItem.navTrimonthlyIncreasedRate = (dataItem.navTrimonthlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.navTrimonthlyIncreasedRate, 2) + '%';
                //近六个月涨幅
                dataItem.navHalfYearlyIncreasedRate = (dataItem.navHalfYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.navHalfYearlyIncreasedRate, 2) + '%';
                //近一年涨幅
                dataItem.navYearlyIncreasedRate = (dataItem.navYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.navYearlyIncreasedRate, 2) + '%';
                //近三年涨幅
                dataItem.navTriYearlyIncreasedRate = (dataItem.navTriYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.navTriYearlyIncreasedRate, 2) + '%';
                //今年以来涨幅
                dataItem.navCurryearIincreasedRate = (dataItem.navCurryearIincreasedRate == null) ? '--':_this.formatNumber(dataItem.navCurryearIincreasedRate, 2) + '%';
                //近一年定投
                dataItem.castYearlyIncreasedRate = (dataItem.castYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.castYearlyIncreasedRate, 2) + '%';

                //加自选class
                var attentionClass = '';
                var attentionText = '自选';
                var target = '';
                var attentionUrl = 'javascript:';
                if(dataItem.attention){
                    attentionClass = 'be-select';
                    attentionText = '已自选';
                    attentionUrl = _this.toAttentionURL;
                    target = '_blank';
                }

                html += '<tr class="animation" data-animationtype="fadeInRight">'
                    +'<td class="p-l-20">'
                    +'<a title='+dataItem.itemName+' target="_blank" href="//fund.jd.com/detail/'+dataItem.itemId+'.html" class="chang-color-red">'+dataItem.subItemName+'</a>'
                    +'<span class="f-c-a5 f-s-12 f-f-a">'+dataItem.itemCode+'</span>';
                if(_this.opCate[_this.tabType] == 106 || _this.opCate[_this.tabType] == 229){
                    html +='</td>'
                        +'<td align="center">'+dataItem.fundRevenuePerMillion+'<br><span class="f-c-a5 f-s-12 f-f-a">'+dataItem.navDate+'</span></td>'
                        +'<td align="center">'+dataItem.annualYield+'</td>'
                }else{
                    html +='</td>'
                    if(_this.valType == 'unit'){
                        html+='<td align="center">'+dataItem.price+'<br><span class="f-c-a5 f-s-12 f-f-a">'+dataItem.navDate+'</span></td>'
                    }else{
                        html+='<td align="center">'+dataItem.totalPrice+'<br><span class="f-c-a5 f-s-12 f-f-a">'+dataItem.navDate+'</span></td>'
                    }
                }
                html += '<td align="center" data-type="setcolor">'+dataItem.navWeeklyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.navMonthlyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.navTrimonthlyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.navHalfYearlyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.navYearlyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.navTriYearlyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.navCurryearIincreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.castYearlyIncreasedRate+'</td>'
                    +'<td align="center" valign="middle">' +
                    '<div class="operate-btn">'
                if(dataItem.buyStatus == 'BUY'){
                    html += '<div class="buy-btn"><span>购买</span><a clstag="jr|keycount|jr_jjpd3.0|jr_jjpdy3.0_jjcs_gm_'+dataItem.itemId+'" target="_blank" href="//fund.jd.com/detail/'+dataItem.itemId+'.html" class="now-qiang">购买</a></div><a target="'+target+'" href="'+attentionUrl+'" class="add-select '+attentionClass+'" data-value="'+dataItem.itemId+'">'+attentionText+'</a>';
                }else{
                    html += '<div class="buy-btn sale-out-btn"><span>暂停购买</span><a clstag="jr|keycount|jr_jjpd3.0|jr_jjpdy3.0_jjcs_gm_'+dataItem.itemId+'" target="_blank" href="//fund.jd.com/detail/'+dataItem.itemId+'.html" class="now-qiang sale-out">暂停购买</a></div><a target="'+target+'" href="'+attentionUrl+'" class="add-select '+attentionClass+'" data-value="'+dataItem.itemId+'">'+attentionText+'</a>';
                }
                html += '</div></td>'
                    +'</tr>';
            }else{
                /*//近一周
                 dataItem.navWeeklyIncreasedRate = (dataItem.navWeeklyIncreasedRate == null) ? '--': _this.formatNumber(dataItem.navWeeklyIncreasedRate, 2) + '%';
                 //近一月涨幅
                 dataItem.navMonthlyIncreasedRate = (dataItem.navMonthlyIncreasedRate == null) ? '--': _this.formatNumber(dataItem.navMonthlyIncreasedRate, 2) + '%';
                 //近三个月涨幅
                 dataItem.navTrimonthlyIncreasedRate = (dataItem.navTrimonthlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.navTrimonthlyIncreasedRate, 2) + '%';
                 //近六个月涨幅
                 dataItem.navHalfYearlyIncreasedRate = (dataItem.navHalfYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.navHalfYearlyIncreasedRate, 2) + '%';
                 //近一年涨幅
                 dataItem.navYearlyIncreasedRate = (dataItem.navYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.navYearlyIncreasedRate, 2) + '%';
                 //近三年涨幅
                 dataItem.navTriYearlyIncreasedRate = (dataItem.navTriYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.navTriYearlyIncreasedRate, 2) + '%';
                 //今年以来涨幅
                 dataItem.navCurryearIincreasedRate = (dataItem.navCurryearIincreasedRate == null) ? '--':_this.formatNumber(dataItem.navCurryearIincreasedRate, 2) + '%';*/
                //近一年定投
                dataItem.castYearlyIncreasedRate = (dataItem.castYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.castYearlyIncreasedRate, 2) + '%';
                //近两年定投
                dataItem.castTwoYearlyIncreasedRate = (dataItem.castTwoYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.castTwoYearlyIncreasedRate, 2) + '%';
                //近三年定投
                dataItem.castTriYearlyIncreasedRate = (dataItem.castTriYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.castTriYearlyIncreasedRate, 2) + '%';
                //近五年定投
                dataItem.castFiveYearlyIncreasedRate = (dataItem.castFiveYearlyIncreasedRate == null) ? '--':_this.formatNumber(dataItem.castFiveYearlyIncreasedRate, 2) + '%';

                //加自选class
                var attentionClass = '';
                var attentionText = '自选';
                if(dataItem.attention){
                    attentionClass = 'be-select';
                    attentionText = '已自选'
                }

                html += '<tr class="animation" data-animationtype="fadeInRight">'
                    +'<td class="p-l-20">'
                    +'<a title='+dataItem.itemName+' target="_blank" href="//fund.jd.com/detail/'+dataItem.itemId+'.html" class="chang-color-red">'+dataItem.subItemName+'</a>'
                    +'<span class="f-c-a5 f-s-12 f-f-a">'+dataItem.itemCode+'</span>';
                if(_this.opCate[_this.tabType] == 106 || _this.opCate[_this.tabType] == 229){
                    html +='</td>'
                        +'<td align="center">'+dataItem.fundRevenuePerMillion+'<br><span class="f-c-a5 f-s-12 f-f-a">'+dataItem.navDate+'</span></td>'
                        +'<td align="center">'+dataItem.annualYield+'</td>'
                }else{
                    html +='</td>'
                    if(_this.valType == 'unit'){
                        html+='<td align="center">'+dataItem.price+'<br><span class="f-c-a5 f-s-12 f-f-a">'+dataItem.navDate+'</span></td>'
                    }else{
                        html+='<td align="center">'+dataItem.totalPrice+'<br><span class="f-c-a5 f-s-12 f-f-a">'+dataItem.navDate+'</span></td>'
                    }
                }
                html += '<td align="center" data-type="setcolor">'+dataItem.castYearlyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.castTwoYearlyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.castTriYearlyIncreasedRate+'</td>'
                    +'<td align="center" data-type="setcolor">'+dataItem.castFiveYearlyIncreasedRate+'</td>'
                    +'<td align="center" valign="middle"><a clstag="jr|keycount|jr_jjpd3.0|jr_jjpdy3.0_jjcs_gm_'+dataItem.itemId+'" target="_blank" href="//fund.jd.com/detail/'+dataItem.itemId+'.html" class="now-qiang">定投</a></td>'
                    +'</tr>';
            }
        }
        return html;
    },

    //搜索框联想
    searchList: function (keywords) {
        var _this = this;
        $.ajax({
            url: '//jrsearch.jd.com/fund/search',
            dataType: 'jsonp',
            data:{
                wd: keywords
            },
            success: function (data) {
                data = {
                    datas: [
                        {
                            name: 'product1',
                            list: [
                                {
                                    itemName: '白条产品',
                                    linkUrl: 'http://jr.jd.com',
                                    desc: '白条产品白条产品白条产品白条产品'
                                },
                                {
                                    itemName: '白条产品',
                                    linkUrl: 'http://jr.jd.com',
                                    desc: '白条产品白条产品白条产品白条产品'
                                }
                            ]
                        },
                        {
                            name: 'product2',
                            list: [
                                {
                                    itemName: '证券产品',
                                    linkUrl: 'http://jr.jd.com'
                                }
                            ]
                        }
                    ]
                }
                _this.renderSearchList(data,2)
            }
        })
    },

    //设置联想搜索框高亮状态
    setHighLight: function (len) {
        var _this = this;
        if(_this.keyIndex == -1 || _this.keyIndex == len + 1){
            $('.tui-jian li').removeClass('active');
            return;
        }
        $('.tui-jian li').removeClass('active').eq(_this.keyIndex).addClass('active');
    },

    renderSearchList: function (data,type) {
        var _this = this;
        var html = '';
        /*
         * type==1 推荐;type==2 搜索
         * */
        //有数据
        if(data.datas && data.datas.length > 0){
            html += '<div class="tui-j-left">\n' +
                '                            产品\n' +
                '                        </div>\n' +
                '                        <ul class="tui-j-right">\n'
            for(var i = 0; i < data.datas[0].list.length; i ++){
                var dataItem0 = data.datas[0].list[i];
                html += '<li data-url="'+dataItem0.linkUrl+'" class="j-right-one">\n' +
                    '<a href="javascript:">'+
                    '<span class="yi-hang-ov">'+dataItem0.itemName+'</span>'+
                    '<p>' + dataItem0.desc+ '</p>\n' +
                    '</a>\n' +
                    '</li>'
            }

            html += '</ul>'
            $('.tui-j-box').eq(0).html(html);
            var html2 = '<div class="tui-j-left">\n' +
                '                            证券\n' +
                '                        </div>\n' +
                '                        <ul class="tui-j-right">\n'
            for(var i = 0; i < data.datas[1].list.length; i ++){
                var dataItem0 = data.datas[1].list[i];
                html2 += '<li data-url="'+dataItem0.linkUrl+'" class="j-right-one">\n' +
                    '<a href="javascript:" class="chao-yu">' +
                    '<span>'+dataItem0.itemName+'</span>\n' +
                    '<span class="add-k">京东17A</span>\n' +
                    '<span class="gray-col">暂无代码</span>'+
                    '</a>'+
                    '</li>'
            }
            html2 += '</ul>';
            $('.tui-j-box').eq(1).html(html2);
        }else {
            $('.search-tan').hide()
        }
    },

    //更新自选状态
    eachAttention: function () {
        var _this = this;
        $('.search-main').find('.self-chose').each(function () {
            if(_this.userAttention[$(this).data('value')]){
                $(this).text('已自选').addClass('be-select').attr({'href': _this.toAttentionURL, 'target': '_blank'})
            }else{
                $(this).text('加自选')
            }
        })
    },

    //加自选方法
    //beAttention: function (obj) {
    //    var _this = this;
    //
    //    $.ajax({
    //        url: '//list.jr.jd.com/attention',
    //        data:{
    //            itemId: obj.data('value')
    //        },
    //        dataType: 'jsonp',
    //        success: function (data) {
    //            if(data.result){
    //                obj.text('已自选').addClass('be-select').attr({'href': _this.toAttentionURL, 'target': '_blank'})
    //            }else{
    //                if(data.code == 'f_001'){
    //                    _this.login(function () {
    //                        _this.beAttention(obj);
    //                        _this.reqData()
    //                    });
    //                }
    //            }
    //        }
    //    })
    //},

    //设置排序字段高亮显示
    setSortLightHigh: function(){
        var _this = this;
        if(this.sortType[_this.tabType]){
            $('[data-type=setcolor]').each(function(){
                var dataVal = parseFloat($(this).text());
                if(dataVal > 0){
                    $(this).css('color', '#f52f3e');
                }else if(dataVal < 0){
                    $(this).css('color', '#69cd8e');
                }
            });
        }
    }
};
$(function(){
    new parallelPro();
});