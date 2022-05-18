import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Index () {
  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>EE2E Demo</title>
      </Head>

      <div
        className='position-relative w-100 h-100'
      >
        <div
          className={`${styles.wrapper} position-absolute top-50 start-50 translate-middle`}
        >
          <div
            className='mb-2'
          >
            Tell us who you are!
          </div>

          <form
            className='input-group'
            autoComplete='off'
            onSubmit={handleSubmit}
          >
            <input
              autoFocus
              className='form-control'
              type='text'
              name='name'
              placeholder='Enter a username'
              autoComplete='off'
            />
            <button
              className='btn btn-outline-secondary'
              type='submit'
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
