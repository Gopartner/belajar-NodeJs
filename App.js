import fs from 'fs'
import chalk from 'chalk'
import moment from 'moment'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
//destructering object
import {saveContact,listContacts} from './component/saveContact.js';
//import {isDataValid} from './component/ValidasiData.js';

const log = console.log

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
/*
if(fs.existsSync(fPath)){
   //cek isi nya, kosong atau ada [] atau banyak data
   const data = fs.readFileSync(fPath,'utf-8')
    log("-----" + typeof(data))
    log(data)
    const hasil = (data === '')? "benar":"salah"
    log(hasil)
   if(hasil === "salah"){
	fs.writeFileSync(fPath, '[]','utf-8')
   }
}
*/
yargs(hideBin(process.argv)).command({
    command:'add',
    describe:'Menambahkan contact baru',
    builder: {
        nama: {
         describe: "Full nama",
         demandOption: true,
         type: "string",
        },
        email: {
         describe: "Email *",
         demandOption: false,
         type: "string",
        },                                                      nohp: {
         describe: "Number phone *",
         demandOption: true,
         type: "string",
        }
    },
    handler(argv){
	//isDataValid(argv)
        saveContact(argv.nama,argv.email,argv.nohp)
    }

}).demandCommand().parse();

yargs(hideBin(process.argv)).command({
    command:'list',
    describe:'Menampilkan daftar contact',                    handler(){
	    listContacts()
    }
}).demandCommand().parse();








log(chalk.magentaBright.inverse.bold('\n[===== The end  ======]'))
