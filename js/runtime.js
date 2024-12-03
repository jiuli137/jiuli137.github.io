setInterval(() => {
    // 玖离的密码小屋相关时间计算
    let create_time_site = Math.round(new Date('2019-04-17 00:00:00').getTime() / 1000); // 建站时间
    let timestamp_site = Math.round((new Date().getTime()) / 1000);
    let second_site = timestamp_site - create_time_site;
    let time_site = new Array(0, 0, 0, 0, 0);

    // 处理小时部分显示补零的函数
    var nol = function (h) {
        return h > 9? h : '0' + h;
    }

    if (second_site >= 365 * 24 * 3600) {
        time_site[0] = parseInt(second_site / (365 * 24 * 3600));
        second_site %= 365 * 24 * 3600;
    }
    if (second_site >= 24 * 3600) {
        time_site[1] = parseInt(second_site / (24 * 3600));
        second_site %= 24 * 3600;
    }
    if (second_site >= 3600) {
        time_site[2] = nol(parseInt(second_site / 3600));
        second_site %= 3600;
    }
    if (second_site >= 60) {
        time_site[3] = nol(parseInt(second_site / 60));
        second_site %= 60;
    }
    if (second_site > 0) {
        time_site[4] = nol(second_site);
    }

    // 和小肖友谊相关时间计算，起始时间2019年9月1日12:00:00
    let create_time_friendship = Math.round(new Date('2019-09-01 12:00:00').getTime() / 1000);
    let timestamp_friendship = Math.round((new Date().getTime()) / 1000);
    let second_friendship = timestamp_friendship - create_time_friendship;
    let time_friendship = new Array(0, 0, 0, 0, 0);

    if (second_friendship >= 365 * 24 * 3600) {
        time_friendship[0] = parseInt(second_friendship / (365 * 24 * 3600));
        second_friendship %= 365 * 24 * 3600;
    }
    if (second_friendship >= 24 * 3600) {
        time_friendship[1] = parseInt(second_friendship / (24 * 3600));
        second_friendship %= 24 * 3600;
    }
    if (second_friendship >= 3600) {
        time_friendship[2] = nol(parseInt(second_friendship / 3600));
        second_friendship %= 3600;
    }
    if (second_friendship >= 60) {
        time_friendship[3] = nol(parseInt(second_friendship / 60));
        second_friendship %= 60;
    }
    if (second_friendship > 0) {
        time_friendship[4] = nol(second_friendship);
    }

    let currentTimeHtml_site;
    if ((Number(time_site[2]) < 22) && (Number(time_site[2]) > 7)) {
        currentTimeHtml_site = "<img class='boardsign' src='https://img.shields.io/badge/玖离的密码小屋-偷偷摸鱼中-6adea8?style=social&logo=cakephp' title='正在悄悄努力哦~'><div id='runtime_site'>" + time_site[0] + ' year ' + time_site[1] + ' days ' + time_site[2] + ' : ' + time_site[3] + ' : ' + time_site[4] + '</div>';
    }
    else {
        currentTimeHtml_site = "<img class='boardsign' src='https://img.shields.io/badge/玖离的密码小屋-悄悄努力中-6adea8?style=social&logo=coffeescript' title='加油呀，一直在前进呢'><div id='runtime_site'>" + time_site[0] + ' year ' + time_site[1] + ' days ' + time_site[2] + ' : ' + time_site[3] + ' : ' + time_site[4] + '</div>';
    }

    let currentTimeHtml_friendship = "<img class='boardsign' src='https://img.shields.io/badge/和小肖的友谊-持续中-ff69b4?style=social&logo=heart' title='珍惜友谊呀'><div id='runtime_friendship'>" + time_friendship[0] + ' year ' + time_friendship[1] + ' days ' + time_friendship[2] + ' : ' + time_friendship[3] + ' : ' + time_friendship[4] + '</div>';

    let combinedHtml = currentTimeHtml_site + currentTimeHtml_friendship;
    document.getElementById("workboard").innerHTML = combinedHtml;
}, 1000);