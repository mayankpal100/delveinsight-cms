'use strict'

const { validateAll } = use('Validator')
const User = use('App/Models/User')
const Mail = use('Mail')


class UserController {

    async login ({ request, auth }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
    
        return 'Logged in successfully'
      }

      show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        return auth.user
      }

       showregisterform ({view})
      {
        return view.render('pages.register');

      }
       async register ({ request , session , response })
      {
        //form validation 
        const rules = {
          email: 'required|unique:users,email',
          username: 'required|unique:users,username',
          password: 'required',
        }

        const messages = {
          required: 'Make sure to enter the field value',
          email: 'Enter valid email address',
          min: 'The value is too small',
        }
        
        const validation = await validateAll(request.all(), rules);
        if (validation.fails()) {
          session
            .withErrors(validation.messages())
            .flashExcept(['password'])

          return response.redirect('back')

        }

       // console.log(request.all())

          // create user
    const user = await User.create({
      username: request.input('username'),
      email: request.input('email'),
      password: request.input('password'),
     
    })

      
    await Mail.send('emails.welcome', user.toJSON(), (message) => {
      message
        .to('mpal@delveinsight.com')
        .from('info@pharmdelve.com')
        .subject('Welcome to ses testing')
    })




        return response.redirect('back')

      }

      sendtest ({view})
      {


    
        return 'Registered successfully'
      }


}

module.exports = UserController
