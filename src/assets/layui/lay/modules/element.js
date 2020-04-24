/** layui-v2.2.3 MIT License By  */
;layui.define('jquery', function (i) { 'use strict'; var t = layui.$; var a = (layui.hint(), layui.device()); var e = 'element'; var l = 'layui-this'; var n = 'layui-show'; var s = function () { this.config = {} }; s.prototype.set = function (i) { var a = this; return t.extend(!0, a.config, i), a }, s.prototype.on = function (i, t) { return layui.onevent.call(this, e, i, t) }, s.prototype.tabAdd = function (i, a) { var e = '.layui-tab-title'; var l = t('.layui-tab[lay-filter=' + i + ']'); var n = l.children(e); var s = n.children('.layui-tab-bar'); var o = l.children('.layui-tab-content'); var c = '<li lay-id="' + (a.id || '') + '">' + (a.title || 'unnaming') + '</li>'; return s[0] ? s.before(c) : n.append(c), o.append('<div class="layui-tab-item">' + (a.content || '') + '</div>'), y.hideTabMore(!0), y.tabAuto(), this }, s.prototype.tabDelete = function (i, a) { var e = '.layui-tab-title'; var l = t('.layui-tab[lay-filter=' + i + ']'); var n = l.children(e); var s = n.find('>li[lay-id="' + a + '"]'); return y.tabDelete(null, s), this }, s.prototype.tabChange = function (i, a) { var e = '.layui-tab-title'; var l = t('.layui-tab[lay-filter=' + i + ']'); var n = l.children(e); var s = n.find('>li[lay-id="' + a + '"]'); return y.tabClick(null, null, s), this }, s.prototype.tab = function (i) { i = i || {}, v.on('click', i.headerElem, function (a) { var e = t(this).index(); y.tabClick.call(this, a, e, null, i) }) }, s.prototype.progress = function (i, a) { var e = 'layui-progress'; var l = t('.' + e + '[lay-filter=' + i + ']'); var n = l.find('.' + e + '-bar'); var s = n.find('.' + e + '-text'); return n.css('width', a), s.text(a), this }; var o = '.layui-nav'; var c = 'layui-nav-item'; var r = 'layui-nav-bar'; var u = 'layui-nav-tree'; var d = 'layui-nav-child'; var h = 'layui-nav-more'; var f = 'layui-anim layui-anim-upbit'; var y = { tabClick: function (i, a, s, o) { o = o || {}; var c = s || t(this); var a = a || c.parent().children('li').index(c); var r = o.headerElem ? c.parent() : c.parents('.layui-tab').eq(0); var u = o.bodyElem ? t(o.bodyElem) : r.children('.layui-tab-content').children('.layui-tab-item'); var d = c.find('a'); var h = r.attr('lay-filter'); d.attr('href') !== 'javascript:;' && d.attr('target') === '_blank' || (c.addClass(l).siblings().removeClass(l), u.eq(a).addClass(n).siblings().removeClass(n)), layui.event.call(this, e, 'tab(' + h + ')', { elem: r, index: a }) }, tabDelete: function (i, a) { var n = a || t(this).parent(); var s = n.index(); var o = n.parents('.layui-tab').eq(0); var c = o.children('.layui-tab-content').children('.layui-tab-item'); var r = o.attr('lay-filter'); n.hasClass(l) && (n.next()[0] ? y.tabClick.call(n.next()[0], null, s + 1) : n.prev()[0] && y.tabClick.call(n.prev()[0], null, s - 1)), n.remove(), c.eq(s).remove(), setTimeout(function () { y.tabAuto() }, 50), layui.event.call(this, e, 'tabDelete(' + r + ')', { elem: o, index: s }) }, tabAuto: function () { var i = 'layui-tab-more'; var e = 'layui-tab-bar'; var l = 'layui-tab-close'; var n = this; t('.layui-tab').each(function () { var s = t(this); var o = s.children('.layui-tab-title'); var c = (s.children('.layui-tab-content').children('.layui-tab-item'), 'lay-stope="tabmore"'); var r = t('<span class="layui-unselect layui-tab-bar" ' + c + '><i ' + c + ' class="layui-icon">&#xe61a;</i></span>'); if (n === window && a.ie != 8 && y.hideTabMore(!0), s.attr('lay-allowClose') && o.find('li').each(function () { var i = t(this); if (!i.find('.' + l)[0]) { var a = t('<i class="layui-icon layui-unselect ' + l + '">&#x1006;</i>'); a.on('click', y.tabDelete), i.append(a) } }), o.prop('scrollWidth') > o.outerWidth() + 1) { if (o.find('.' + e)[0]) return; o.append(r), s.attr('overflow', ''), r.on('click', function (t) { o[this.title ? 'removeClass' : 'addClass'](i), this.title = this.title ? '' : '收缩' }) } else o.find('.' + e).remove(), s.removeAttr('overflow') }) }, hideTabMore: function (i) { var a = t('.layui-tab-title'); i !== !0 && t(i.target).attr('lay-stope') === 'tabmore' || (a.removeClass('layui-tab-more'), a.find('.layui-tab-bar').attr('title', '')) }, clickThis: function () { var i = t(this); var a = i.parents(o); var n = a.attr('lay-filter'); var s = i.find('a'); var c = typeof i.attr('lay-unselect') === 'string'; i.find('.' + d)[0] || (s.attr('href') !== 'javascript:;' && s.attr('target') === '_blank' || c || (a.find('.' + l).removeClass(l), i.addClass(l)), layui.event.call(this, e, 'nav(' + n + ')', i)) }, clickChild: function () { var i = t(this); var a = i.parents(o); var n = a.attr('lay-filter'); a.find('.' + l).removeClass(l), i.addClass(l), layui.event.call(this, e, 'nav(' + n + ')', i) }, showChild: function () { var i = t(this); var a = i.parents(o); var e = i.parent(); var l = i.siblings('.' + d); a.hasClass(u) && (l.removeClass(f), e[l.css('display') === 'none' ? 'addClass' : 'removeClass'](c + 'ed')) }, collapse: function () { var i = t(this); var a = i.find('.layui-colla-icon'); var l = i.siblings('.layui-colla-content'); var s = i.parents('.layui-collapse').eq(0); var o = s.attr('lay-filter'); var c = l.css('display') === 'none'; if (typeof s.attr('lay-accordion') === 'string') { var r = s.children('.layui-colla-item').children('.' + n); r.siblings('.layui-colla-title').children('.layui-colla-icon').html('&#xe602;'), r.removeClass(n) }l[c ? 'addClass' : 'removeClass'](n), a.html(c ? '&#xe61a;' : '&#xe602;'), layui.event.call(this, e, 'collapse(' + o + ')', { title: i, content: l, show: c }) } }; s.prototype.init = function (i, e) { var l = (function () { return e ? '[lay-filter="' + e + '"]' : '' }()); var s = { tab: function () { y.tabAuto.call({}) }, nav: function () { var i = 200; var e = {}; var s = {}; var p = {}; var v = function (l, o, c) { var r = t(this); var y = r.find('.' + d); o.hasClass(u) ? l.css({ top: r.position().top, height: r.children('a').height(), opacity: 1 }) : (y.addClass(f), l.css({ left: r.position().left + parseFloat(r.css('marginLeft')), top: r.position().top + r.height() - l.height() }), e[c] = setTimeout(function () { l.css({ width: r.width(), opacity: 1 }) }, a.ie && a.ie < 10 ? 0 : i), clearTimeout(p[c]), y.css('display') === 'block' && clearTimeout(s[c]), s[c] = setTimeout(function () { y.addClass(n), r.find('.' + h).addClass(h + 'd') }, 300)) }; t(o + l).each(function (a) { var l = t(this); var o = t('<span class="' + r + '"></span>'); var f = l.find('.' + c); l.find('.' + r)[0] || (l.append(o), f.on('mouseenter', function () { v.call(this, o, l, a) }).on('mouseleave', function () { l.hasClass(u) || (clearTimeout(s[a]), s[a] = setTimeout(function () { l.find('.' + d).removeClass(n), l.find('.' + h).removeClass(h + 'd') }, 300)) }), l.on('mouseleave', function () { clearTimeout(e[a]), p[a] = setTimeout(function () { l.hasClass(u) ? o.css({ height: 0, top: o.position().top + o.height() / 2, opacity: 0 }) : o.css({ width: 0, left: o.position().left + o.width() / 2, opacity: 0 }) }, i) })), f.each(function () { var i = t(this); var a = i.find('.' + d); if (a[0] && !i.find('.' + h)[0]) { var e = i.children('a'); e.append('<span class="' + h + '"></span>') }i.off('click', y.clickThis).on('click', y.clickThis), i.children('a').off('click', y.showChild).on('click', y.showChild), a.children('dd').off('click', y.clickChild).on('click', y.clickChild) }) }) }, breadcrumb: function () { var i = '.layui-breadcrumb'; t(i + l).each(function () { var i = t(this); var a = 'lay-separator'; var e = i.attr(a) || '/'; var l = i.find('a'); l.next('span[' + a + ']')[0] || (l.each(function (i) { i !== l.length - 1 && t(this).after('<span ' + a + '>' + e + '</span>') }), i.css('visibility', 'visible')) }) }, progress: function () { var i = 'layui-progress'; t('.' + i + l).each(function () { var a = t(this); var e = a.find('.layui-progress-bar'); var l = e.attr('lay-percent'); e.css('width', (function () { return /^.+\/.+$/.test(l) ? 100 * new Function('return ' + l)() + '%' : l }())), a.attr('lay-showPercent') && setTimeout(function () { e.html('<span class="' + i + '-text">' + l + '</span>') }, 350) }) }, collapse: function () { var i = 'layui-collapse'; t('.' + i + l).each(function () { var i = t(this).find('.layui-colla-item'); i.each(function () { var i = t(this); var a = i.find('.layui-colla-title'); var e = i.find('.layui-colla-content'); var l = e.css('display') === 'none'; a.find('.layui-colla-icon').remove(), a.append('<i class="layui-icon layui-colla-icon">' + (l ? '&#xe602;' : '&#xe61a;') + '</i>'), a.off('click', y.collapse).on('click', y.collapse) }) }) } }; return s[i] ? s[i]() : layui.each(s, function (i, t) { t() }) }, s.prototype.render = s.prototype.init; var p = new s(); var v = t(document); p.render(); var b = '.layui-tab-title li'; v.on('click', b, y.tabClick), v.on('click', y.hideTabMore), t(window).on('resize', y.tabAuto), i(e, p) })