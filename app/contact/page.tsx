import LinkedInButton from './components/LinkedInIcon'
import MailButton from './components/MailButton'

function Contact() {
  return (
    <div className='flex flex-col gap-4 items-center max-w-sm justify-center mx-auto'>
      <LinkedInButton />
      <MailButton />
    </div>
  )
}

export default Contact