const parse  = require("csv-parse/lib/sync");
const fs = require("fs");

const csv = fs.readFileSync("1호선.csv");
// console.log(csv.toString());
// parse 메서드 -> 2차원배열화
const records = parse(csv.toString());
// console.log(records[1][2]);

for (i in records){
    console.log("역명: " + records[i][2])
    console.log("지상지하구분: " + records[i][3])
    console.log("역층: " + records[i][4])
    console.log("게이트내외: " + records[i][5])
    console.log("출구번호: " + records[i][6])
    console.log("상세위치: " + records[i][7])
    console.log("남녀구분코드: " + records[i][8])
    console.log("")
}