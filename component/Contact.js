



//detructering object
import {question,saveContact} from 'saveContact'


const Main = async () => {
    const nama await question('Full name :* ')
    const email = await question('Your email :* ')
    const hp = await question('Numer phone :* ')

    saveContact(nama,email,hp)

}


Main()


