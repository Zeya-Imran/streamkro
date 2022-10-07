import {Dialog, Form} from "../../../tailwind"

const index = ()=>{
  const options = [
    {
      label:"Darama",
      value:"darama"

    },
    {
      label:"Action",
      value:"action"

    },
    {
      label:"Comedy",
      value:"comedy"

    }
  ];
  const fields = [
    {
      component:"input",
      props:{
        name:"title",
        placeholder:"Movie name",
        className:"bg-gray-100 rounded-sm border-2 py-3 px-2"
      }
    },
    {
      component:"input",
      props:{
        name:"desc",
        placeholder:"Movie Description",
        textarea:true,
        className:"bg-gray-100 rounded-sm border-2 py-3 px-2"
      }
    },
    {
      component:"input",
      props:{
        name:"duration",
        placeholder:"Movie Duration",
        className:"bg-gray-100 rounded-sm border-2 py-3 px-2"
      }
    },
    {
      component:"input",
      props:{
        name:"starring",
        placeholder:"Actor's Names",
        className:"bg-gray-100 rounded-sm border-2 py-3 px-2"
      }
    },
    {
      component:"select",
      props:{
        name:"category",
        className:"bg-gray-100 rounded-sm border-2 py-3 px-2 text-left",
        data:options
      }
    },
    {
      component:"input",
      props:{
        name:"tags",
        placeholder:"keywords",
        textarea:true,
        className:"bg-gray-100 rounded-sm border-2 py-3 px-2"
      }
    },
    {
      component:"upload",
      props:{
        name:"thumbnail",
        className:"bg-gray-100 rounded-sm border-2 py-3 px-2 text-left",
        label:"Thumbnail"
      }
    },
    {
      component:"upload",
      props:{
        name:"video",
        className:"bg-gray-100 rounded-sm border-2 py-3 px-2 text-left",
        label:"Video File"
      }
    }
  ];

  const  onSubmit =(values)=>{
    console.log(values);
  }
  const MovieForm = ()=>{
      const design = (
      <>
          <h1 className="text-left text-2xl mb-4 font-bold">New Movie</h1>
          <Form fields={fields} onSubmit={onSubmit}/>
      </>
    );
    return design;
  }

  const design = (
      <>
        <Dialog>
          <MovieForm />
        </Dialog>
      </>
  );
  return design;
}
export default index;
