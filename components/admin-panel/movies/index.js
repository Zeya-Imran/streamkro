import {Dialog, Form} from "../../../tailwind"

const index = ()=>{
  const fields = [
    {
      component:"input"
      props:{
        name:"title",
        placeholder:"Movie name"
      }
    }
  ];
  const MovieForm = ()=>{
      const design = (
      <>
          <Form fields={fields}/>
      </>
    );
    return design;
  }

  const design = (
      <>
        <Dialog title="Add a Moive">
          <MovieForm />
        </Dialog>
      </>
  );
  return design;
}
export default index;
