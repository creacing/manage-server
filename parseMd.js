'use strict';
const fs = require('fs');
const md = require('markdown-it')();

const parseDic = {
  title: '',
  description: '',
  tags: '',
  date: '',
  content: '',
};
const file = fs.readFileSync('./demo.md');

const fileString = file.toString();
const fileSplit = fileString.split('---');
const fileSplitFilter = fileSplit.filter(path => path !== '');
parseDic.content = md.render(fileSplitFilter[1]);
const headInfos = fileSplitFilter[0].split('\r\n').filter(path => path !== '');
parseDic.title = headInfos[0].split(':')[1].trim();
parseDic.description = headInfos[1].split(':')[1].trim();
parseDic.date = headInfos[2].split(':')[1].trim();
parseDic.tags = headInfos[4].split('-')[1].trim();
console.log(JSON.stringify(parseDic));
