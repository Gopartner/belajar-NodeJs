import fs from 'fs';
//import readline from 'readline';
import chalk from 'chalk';
import v from 'validator';

const log = console.log
const pesanDuplikat = "Nama sudah terdaftar,silahkan pakai nama lain";
//import {isDataValid} from './ValidasiData.js';

/* 
const rl = readline.createInterface({                           input: process.stdin,
        output: process.stdout,                         })

//Promise (tulis pertanyaan)

const question = (ques) => {                                return new Promise((resolve,reject) => {                    rl.question(ques,(n) => {
            resolve(n)                                          })
    })                                                  }
*/

const path = './data/contacts.json'
const invalidEmail = "Email invalid !!!"
const invalidNohp = "Nomor HP tidak valid!"

const loadContacts = (nama,email,hp) => {
	const contact = {nama,email,hp}//obj ES6
	const file = fs.readFileSync(path,'utf-8'),
		contacts = JSON.parse(file)
	return contacts
}

const saveContact = (nama,email,hp) => {
   
   if(email) {
	const isValid = v.isEmail(email)
	if(! isValid){
	  log(chalk.red.inverse.bold(invalidEmail))
	  return false
	}
   }

   const nohpValid = v.isMobilePhone(hp,'id-ID')
   if(! nohpValid){
	log(chalk.red.inverse.bold(invalidNohp))
	return false
   }

   loadContacts(nama,email,hp)

   //cek duplikat nama (mencari data dlm dataJSON)
   const duplikat = contacts.find(
	   (contact) => contact.nama === nama
   )
    //jika tipe data
    if(false) {
      log(chalk.red("≠≠≠=====" + typeof(duplikat)))
      return false
    }

   if(duplikat){
     log(chalk.red.inverse.bold(pesanDuplikat + duplikat))
     //hentikan kode
     return false
   }

   contacts.push(contact)

   fs.writeFileSync(path,JSON.stringify(contacts));
   log(chalk.bgGreen('terimakasih sudah masukkan data'))
  
  //rl.close() jika pakai core module readline,pakai ini


}

const listContacts = () => {
	const con = loadContacts()
	log(chalk.blue("List contacts : "))

	con.forEach((contact,i) => {
	log(`${i + 1}. ${contact.nama} - ${contact.email} - ${contact.hp}`)

	})
}

export {saveContact,listContacts}

