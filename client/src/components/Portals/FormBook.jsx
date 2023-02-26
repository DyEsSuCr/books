import { Formik, Form, Field } from 'formik'

export function FormBooks() {
  return (
    <div className="bg-gray-600 max-w-screen-md p-4 fixed top-0 left-0 right-0 mt-8 mx-auto">
      <Formik
        initialValues={{
          tittle: '',
          subtitle: '',
          publiched_date: '',
          image: '',
          favorite: false,
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm()

          console.log(values)
        }}
      >
        {() => {
          return (
            <Form>
              <Field type="text" name="tittle" placeholder="tittle" />
              <Field type="text" name="subtitle" placeholder="subtitle" />
              <Field type="date" name="publiched_date" />
              <Field type="file" name="image" />
              <Field type="checkbox" name="favorite" />

              <button type="submit">Enviar</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
