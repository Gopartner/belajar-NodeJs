//core module
import fs from 'fs';
//cara import ES
import chalk from 'chalk';
import validator from 'validator';
import Moment from 'moment';
//destructering object
import {pertanyaan,saveContact} from './component/saveContact.js';


let log = console.log;

//membuat folder data jika belum ada
const dir = './data';
if(!fs.existsSync(dir)){
   fs.mkdirSync(dir);
}

//membuat file jika belum ada
const fPath = dir + '/contacts.json';
if(!fs.existsSync(fPath)){
   fs.writeFileSync(fPath, '[]','utf-8');
   //setelah file di buat,jgn hapus isinya
   //klo hapus isinya,sissakan "[]"
}

const Main = async () => {
    const nama = await pertanyaan('Full name :* ')
    const email = await pertanyaan('Your email :* ')
    const hp = await pertanyaan('Numer phone :* ')

    saveContact(nama,email,hp)

}

Main()



