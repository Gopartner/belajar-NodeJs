import fs from 'fs';
import readline from 'readline';
import chalk from 'chalk';
const log = console.log

const rl = readline.createInterface({                           input: process.stdin,
        output: process.stdout,                         })

//Promise (tulis pertanyaan)
const question = (ques) => {                                return new Promise((resolve,reject) => {                    rl.question(ques,(n) => {
            resolve(n)                                          })
    })                                                  }

const path = './data/contacts.json'

const saveContact = (nama,email,hp) => {
   const contact = {nama,email,hp}//Obj ES6
   const file = fs.readFileSync(path,'utf-8')
   const contacts = JSON.parse(file)
   contacts.push(contact)

   fs.writeFileSync(path,JSON.stringify(contacts));
   log(chalk.bgGreen('terimakasih sudah masukkan data'))
   rl.close()

}

export {question,saveContact}

