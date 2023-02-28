import { Formik, Form, Field } from 'formik'

export function FormAuthor({ createAuthor }) {
  return (
    <div className="bg-indigo-600 max-w-screen-md p-4 fixed top-0 left-0 right-0 mt-8 mx-auto">
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm()

          createAuthor(values)
        }}
      >
        {() => {
          return (
            <Form>
              <Field type="text" name="name" placeholder="name" />

              <button type="submit">Create Author</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
