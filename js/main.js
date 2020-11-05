$(document).ready(function () 
{
        var divs = $('.mydivs>p');
        var now = 0; // currently shown div
        divs.hide().first().show();
        $("button[name=next]").click(function (e) {
            divs.eq(now).hide();
            now = (now + 1 < divs.length) ? now + 1 : 0;
            divs.eq(now).show(); // show next
        });
        $("button[name=prev]").click(function (e) {
            divs.eq(now).hide();
            now = (now > 0) ? now - 1 : divs.length - 1;
            divs.eq(now).show(); 
        });

        var divs2 = $('.slider>.slide-img');
        var now = 0; // currently shown div
        divs2.hide().first().show();
        $("button[name=next2]").click(function (e) {
            divs2.eq(now).hide();
            now = (now + 1 < divs2.length) ? now + 1 : 0;
            divs2.eq(now).show(); // show next
        });
        $("button[name=prev2]").click(function (e) {
            divs2.eq(now).hide();
            now = (now > 0) ? now - 1 : divs2.length - 1;
            divs2.eq(now).show(); 
        });
    });