import v from 'validator'
import chalk from 'chalk'

const log = console.log

const invalidEmail = "Email tidak valid!"
const invalidNohp = "Nomor HP tidak valid!"
const invalidHP = "Jumalah/dijit Nomor HP kurang!!"

//cek data valid/invalid
const isDataValid = (nama,email,nohp) => {
	log(email)

      if(email){
	const email = v.isEmail(email)
	if(! email) {                                             log(chalk.red.inverse.bold(invalidEmail))
	}
	return false
        // const valid = (email)? "benar":"salah"
      }

      const nohpValid = v.isMobilePhone(nohp,'id-ID')

      const dijit = nohpValid.length
      const dijitValid = dijit > 8

      if(! nohp) {
        log(chalk.red.inverse.bold(invalidNohp))
      } else if(!dijitValid) {
	log(chalk.red.inverse.bold(invalidHP))
      }

      
   //--------------------
}                                                                                                               
export {isDataValid}

