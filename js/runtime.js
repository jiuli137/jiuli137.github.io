// 定义建站时间，可在此修改具体的日期时间，这里使用更清晰的变量名以便理解
const siteCreationTime = new Date('2024-11-30 00:00:00');
const updateTimeInterval = 1000; // 时间更新间隔，单位为毫秒，这里定义为常量方便后续修改

function updateWorkboard() {
    const createTimeInSeconds = Math.round(siteCreationTime.getTime() / 1000);
    const currentTimeInSeconds = Math.round((new Date().getTime()) / 1000);
    const elapsedSeconds = currentTimeInSeconds - createTimeInSeconds;

    const timeUnits = [0, 0, 0, 0, 0];

    const formatNumber = (num) => num > 9? num : `0${num}`;

    // 计算年数
    if (elapsedSeconds >= 365 * 24 * 3600) {
        timeUnits[0] = Math.floor(elapsedSeconds / (365 * 24 * 3600));
        elapsedSeconds %= 365 * 24 * 3600;
    }
    // 计算天数
    if (elapsedSeconds >= 24 * 3600) {
        timeUnits[1] = Math.floor(elapsedSeconds / (24 * 3600));
        elapsedSeconds %= 24 * 3600;
    }
    // 计算小时数
    if (elapsedSeconds >= 3600) {
        timeUnits[2] = formatNumber(Math.floor(elapsedSeconds / 3600));
        elapsedSeconds %= 3600;
    }
    // 计算分钟数
    if (elapsedSeconds >= 60) {
        timeUnits[3] = formatNumber(Math.floor(elapsedSeconds / 60));
        elapsedSeconds %= 60;
    }
    // 计算秒数
    if (elapsedSeconds > 0) {
        timeUnits[4] = formatNumber(elapsedSeconds);
    }

    let currentTimeHtml = "";
    // 根据小时范围设置不同的提示内容，判断星穹列车是否处于“运营”时间（示例逻辑，可根据实际调整）
    if (Number(timeUnits[2]) < 22 && Number(timeUnits[2]) > 7) {
        currentTimeHtml = `<img class='boardsign' src='https://img.shields.io/badge/星穹列车-运营中-6adea8?style=social&logo=cakephp' title='星穹列车正在平稳行驶，祝您旅途愉快~'><div id='runtime'>` +
            timeUnits[0] +'YEAR'+ timeUnits[1] +'DAYS'+ timeUnits[2] +':'+ timeUnits[3] +':'+ timeUnits[4] + '</div>';
    } else {
        currentTimeHtml = `<img class='boardsign' src='https://img.shields.io/badge/星穹列车-暂停运营-6adea8?style=social&logo=coffeescript' title='星穹列车暂时停靠休息啦，敬请期待下一次出发~'><div id='runtime'>` +
            timeUnits[0] +'YEAR'+ timeUnits[1] +'DAYS'+ timeUnits[2] +':'+ timeUnits[3] +':'+ timeUnits[4] + '</div>';
    }

    const workboardElement = document.getElementById('workboard');
    if (workboardElement) {
        workboardElement.innerHTML = currentTimeHtml;
    }
}

setInterval(updateWorkboard, updateTimeInterval);