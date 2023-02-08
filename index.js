const log = console.log;
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const app = require('./app');

const fileOps = async () => {
    try {
        await fsPromises.writeFile(path.join(__dirname, 'files', 'area.txt'), app.circleArea(10));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'sum.txt'), app.sum(23, 78));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'temp.txt'), app.convertTemp(67));

        let filePath = path.join(__dirname, 'files', 'log.txt');

        if (!fs.existsSync(filePath)) {
            const data = await fsPromises.readFile(path.join(__dirname, 'files', 'area.txt'), 'utf-8');
            await fsPromises.appendFile(path.join(__dirname, 'files', 'log.txt'), data);

            const data2 = await fsPromises.readFile(path.join(__dirname, 'files', 'sum.txt'), 'utf-8');
            await fsPromises.appendFile(path.join(__dirname, 'files', 'log.txt'), `\n${data2}`);

            const data3 = await fsPromises.readFile(path.join(__dirname, 'files', 'temp.txt'), 'utf-8');
            await fsPromises.appendFile(path.join(__dirname, 'files', 'log.txt'), `\n${data3}`);

            const logData = await fsPromises.readFile(path.join(__dirname, 'files', 'log.txt'), 'utf-8');
            log(logData);
        }
    } catch (err) {
        console.error(err);
    }
}

fileOps();


process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})


















// let output_area = "area.txt";
// let output_sum = "sum.txt";
// let output_temp_in_celcius = "temp.txt";

// let readFilePath = path.join(__dirname, 'files', 'area.txt');

// // WRITE FILES
// fs.writeFile(path.join(__dirname, 'files', output_area), app.circleArea(10), (err) => {
//     if (err) throw err;
// })

// fs.writeFile(path.join(__dirname, 'files', output_sum), app.sum(5, 22), (err) => {
//     if (err) throw err;
// })

// fs.writeFile(path.join(__dirname, 'files', output_temp_in_celcius), app.convertTemp(40), (err) => {
//     if (err) throw err;
// })

// fs.readFile(path.join(__dirname, 'files', output_area), 'utf-8', (err, data) => {
//     if (err) throw err;
//     log(data);
// })

// fs.readFile(path.join(__dirname, 'files', output_sum), 'utf-8', (err, data) => {
//     if (err) throw err;
//     log(data);
// })

// fs.readFile(path.join(__dirname, 'files', output_temp_in_celcius), 'utf-8', (err, data) => {
//     if (err) throw err;
//     log(data);
// })

// fs.readFile(readFilePath, 'utf-8', (err, data) => {
//     if (err) throw err;
//     fs.writeFile(path.join(__dirname, 'files', 'log.txt'), data, (err) => {
//         if (err) throw err;
//         log("Creating log file...");
//     })
// })

// fs.readFile(path.join(__dirname, 'files', 'sum.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     fs.appendFile(path.join(__dirname, 'files', 'log.txt'), `\n${data}`, (err) => {
//         if (err) throw err;
//     })
// })

// fs.readFile(path.join(__dirname, 'files', 'temp.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     fs.appendFile(path.join(__dirname, 'files', 'log.txt'), `\n${data}`, (err) => {
//         if (err) throw err;
//     })
// })
