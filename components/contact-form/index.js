import {
  Form
} from "../../tailwind";

const index = ()=>{
  const fields = [
    {
      component: "input",
      props: {
        name: "fullname",
        placeholder: "Your name",
        className: "p-2"
      }
    },
    {
      component: "input",
      props: {
        name: "mobile",
        placeholder: "Mobile",
        type: "number",
        className: "p-2"
      }
    },
    {
      component: "email",
      props: {
        name: "email",
        placeholder: "Email",
        className: "p-2"
      }
    },
    {
      component: "input",
      props: {
        name: "message",
        placeholder: "Message",
        textarea: true,
        className: "p-2"
      }
    },
  ];
  const design = (
    <>
      <Form fields={fields} />
    </>
  );
  return design;
}

export default index;
