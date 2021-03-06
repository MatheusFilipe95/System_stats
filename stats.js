const os = require('os');
const { freemem, totalmem } = os;

const total = parseInt(totalmem() / 1024 / 1024);
const mem = parseInt(freemem() / 1024 / 1024);
const percents = parseInt((mem / total) * 100);

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function pcStats() {
    while(1){
        await sleep(5000);
        const stats = {
            "free_memory": `${mem} MB`,
            "total_memory": `${total} MB`,
            "percent_memory": `${percents}%`
        };

        console.clear();
        console.log("========PC STATS=========");
        console.table(stats);
    };
};

pcStats();