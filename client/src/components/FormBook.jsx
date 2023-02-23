import { Formik, Form, Field } from 'formik'

export function FormBooks() {
  return (
    <>
      <Formik
        initialValues={{
          tittle: '',
          subtitle: '',
          publiched_date: '',
          image: '',
          favorite: '',
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm()

          console.log({ values })
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

              <Field type="submit" value="enviar" />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

{
  /* <Formik
initialValues={{
  name: '',
}}
validate={({ name }) => {
  if (!name) console.error('Ingresa el nombre')
}}
onSubmit={(values, { resetForm }) => {
  resetForm()
}}
>
{() => {
  return (
    <Form>
      <label htmlFor="name">Name Genres</label>
      <Field type="text" name="name" placeholder="name" />

      <input type="submit" />
    </Form>
  )
}}
</Formik> */
}
