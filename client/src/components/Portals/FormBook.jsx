import { Formik, Form, Field } from 'formik'
import { useState, useContext } from 'react'
import { createPortal } from 'react-dom'

import { FormGenres } from './FormGenres'
import { FormAuthor } from './FormAuthors'
import { helpFetch } from '../../helpers/helpFetch'
import { GenresContext } from '../../context/GenresContext'
import { AuthorsContext } from '../../context/AuthorsContext'

export function FormBooks() {
  const [visible, setVisible] = useState(false)
  const [visibleAuthor, setVisibleAuthor] = useState(false)
  const { genres, setGenres } = useContext(GenresContext)
  const { authors, setAuthors } = useContext(AuthorsContext)

  const createGenre = (data) => {
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    helpFetch()
      .post('http://localhost:3000/api/genres/', options)
      .then((res) => {
        if (!res.err) {
          setGenres([...genres, res])
        } else {
          setError(res)
        }
      })

    setVisible(false)
  }

  const createAuthor = (data) => {
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    helpFetch()
      .post('http://localhost:3000/api/authors/', options)
      .then((res) => {
        if (!res.err) {
          setAuthors([...authors, res])
        } else {
          setError(res)
        }
      })

    setVisibleAuthor(false)
  }

  return (
    <div className="bg-gray-600 max-w-screen-md p-4 fixed top-0 left-0 right-0 mt-8 mx-auto">
      <Formik
        initialValues={{
          id: null,
          tittle: '',
          subtitle: '',
          publiched_date: '',
          image: '',
          favorite: false,
          genres: [],
          authors: [],
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm()

          console.log(values)
        }}
      >
        {() => {
          return (
            <Form className="flex flex-col gap-2 justify-center">
              <Field type="text" name="tittle" placeholder="tittle" />
              <Field type="text" name="subtitle" placeholder="subtitle" />
              <Field type="date" name="publiched_date" />
              <Field type="file" name="image" />
              <Field type="checkbox" name="favorite" />

              <Field component="select" id="genres" name="genres" multiple={true} as="select">
                {genres.map((genre) => {
                  return (
                    <option key={genre.id} value={genre.name}>
                      {genre.name}
                    </option>
                  )
                })}
              </Field>

              <button
                type="button"
                className="text-orange-400"
                onClick={() => {
                  setVisible(!visible)
                  setVisibleAuthor(false)
                }}
              >
                {!visible ? 'Add Genre' : 'Close'}
              </button>

              {visible &&
                createPortal(
                  <FormGenres createGenre={createGenre} />,
                  document.getElementById('genresForm')
                )}

              <Field component="select" id="authors" name="authors" multiple={true} as="select">
                {authors.map((author) => {
                  return (
                    <option key={author.id} value={author.name}>
                      {author.name}
                    </option>
                  )
                })}
              </Field>

              <button
                type="button"
                className="text-orange-400"
                onClick={() => {
                  setVisibleAuthor(!visibleAuthor)
                  setVisible(false)
                }}
              >
                {!visibleAuthor ? 'Add Author' : 'Close'}
              </button>

              {visibleAuthor &&
                createPortal(
                  <FormAuthor createAuthor={createAuthor} />,
                  document.getElementById('authorsForm')
                )}

              <button type="submit">Send</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
