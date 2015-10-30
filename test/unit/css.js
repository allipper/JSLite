
var jsdom = require('../setup.js');
var fs = require('fs');

jsdom({
    src: fs.readFileSync('./dist/JSLite.js', 'utf-8')
})

describe('css 设置和获取元素的 CSS 相关的属性。', function () {


    it('.addClass() - 为每个匹配的元素添加指定的样式类名。', function () {

        document.body.innerHTML = '<div id="foo">Goodbye</div>';
        expect($("div")).to.have.property('addClass');
        expect($("div").addClass('jslite')[0]).to.have.property('className','jslite');
        expect($("div").addClass(function(){return "wcj"})[0]).to.have.property('className','jslite wcj');

    })

    it('.hasClass() - 确定任何一个匹配元素是否有被分配给定的（样式）类。', function () {

        expect($("div")).to.have.property('hasClass');
        document.body.innerHTML = '<div class="jslite">Goodbye</div>';
        expect($("div").hasClass('jslite')).to.be.true;
        expect($("div").hasClass('jslite-s')).to.be.false;

    })

    it('.removeClass() - 移除集合中每个匹配元素上一个，多个或全部样式。', function () {

        document.body.innerHTML = '<div class=" jslite classname">Goodbye</div>';
        expect($("div")).to.have.property('removeClass');
        expect($("div").removeClass("jslite") ).to.be.have.length.above(0);
        expect($("div").attr('class')).to.equal('classname');
        expect($("div").removeClass().attr('class')).to.be.null;

    })

    it('.css() - 获取或设置节点对象的style样式内容。', function () {
        expect($("div")).to.have.property('css');
        document.body.innerHTML = '<div style="height:333px;">Goodbye</div>';
        expect($("div").css(['color','background','height'])).to.eql({ color: '', background: '' ,"height": "333px"}); 
        expect($("div").css('height')).to.equal('333px');
        expect($("div").css({'color':'#fff','background':'red'})).to.have.length.above(0); 
        expect($("div").css('color')).to.equal('rgb(255, 255, 255)');
        expect($("div").css('color','')).to.have.length.above(0); 
        expect($("div").css('color')).to.be.empty; 
    })


    it('.offset() - 获得当前元素相对于document的位置。', function () {
        expect($("div")).to.have.property('offset');
        document.body.innerHTML = '<div style="position: absolute;top:100px;left:200px;width:500px;height: 450px;">www</div>';
        expect($('div').offset()).to.eql({"left":0,"top":0,"width":0,"height":0});
    })

    it('.scrollLeft() - 获取匹配的元素集合中第一个元素的当前水平滚动条的位置。', function () {
        expect($("div")).to.have.property('scrollLeft');
        document.body.innerHTML = '<div class="jslite" style="height:3000px;width:3000px" >www</div>';
        expect($('body').scrollLeft(400)).to.have.length.within(1,1);
        expect($('body')[0].scrollLeft).to.have.equal(400);
    })

    it('.scrollTop() - 获取匹配的元素集合中第一个元素的当前垂直滚动条的位置。', function () {
        expect($("div")).to.have.property('scrollTop');
        expect($('body').scrollTop(400)).to.have.length.within(1,1);
        expect($('body')[0].scrollTop).to.have.equal(400);
    })


    it('.toggleClass() - 在匹配的节点对象集合中的每个节点对象上添加或删除一个或多个样式类。', function () {
        
        document.body.innerHTML = '<div class="jslite">Goodbye</div>';
        expect($("div")).to.have.property('toggleClass');
        expect($("div").toggleClass('box1 box2')[0]).to.have.property('className','jslite box1 box2');
        expect($("div").toggleClass('box1 box2')[0]).to.have.property('className','jslite');
        expect($("div").toggleClass(function(){return "wcj"})[0]).to.have.property('className','jslite wcj');

    })

    // ==== 下列目前无法测试的样子。
    it('.width() - 获取对象象集合中第一个元素的宽，或设置对象集合所有元素的宽。', function () {
        expect($("div")).to.have.property('width');
        document.body.innerHTML = '<div class="jslite" ><div style="width:100px;height:500px;display:block;">1</div><div>2</div></div>';
        expect($(".jslite div").eq(0).width()).to.equal(0);
    })

    it('.height() - 获取对象集合中第一个元素的高，或设置对象集合所有元素的高。', function () {
        expect($("div")).to.have.property('height');
    })


    // .innerHeight()
    // .innerWidth()
    // .outerHeight()
    // .outerWidth()
    // .position()



})