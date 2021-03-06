'use strict'

const { validateAll } = use('Validator')
const User = use('App/Models/User')
const Mail = use('Mail')
const Env = use('Env')
const swal = use('sweetalert2')

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
         async register ({ request , session , response,auth })
        {
          //form validation 

        //  swal('Hello world!')
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

        if(Env.get('NODE_ENV')=="development")
       { user.email='mpal@delveinsight.com'}

       console.log(user.email)
      await Mail.send('emails.confirm_email', user.toJSON(), (message) => {
        message
          .to(user.email)
          .from('info@pharmdelve.com')
          .subject('Welcome to ses testing')
    })
    //login in 
         await auth.login(user);

      session.flash({
        notification: {
          type: 'success',
          message: 'Registration successful! A mail has been set to your email address.' 
        }
      })

    // console.log("send done with mail")

    
      return response.redirect('back')

      }

       loginshow({view}) {

       // console.log('dkjhdsj');
         return view.render('pages.login');
      }
       resetpassword({view}) {

       // console.log('dkjhdsj');
         return view.render('pages.resetpassword');
      }

      async login({ request, auth, response, session }) {

       // console.log('jdlkjdk');
        const { email, password } = request.all();

        try {
            await auth.attempt(email, password);
            return response.redirect('/');
        } catch (error) {

           session.flash({
        notification: {
          type: 'danger',
          message: 'These credentials do not work.' 
        }
      })
            return response.redirect('/login');
        }
    }



      sendtest ({view})
      {

        swal('Hello world!')
    
        return 'Registered successfully'
      }


}

module.exports = UserController
