// The First Method 

// export default function Person(props) {
//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: "lightgray",
//           width: "50%",
//           margin: "10px auto",
//           padding: "10px",
//         }}
//       >
//         <h1>{props.name}</h1>
//         <h3>{props.age}</h3>
//         <h4>{props.email}</h4>
//         <hr></hr>
//         <p>{props.text}</p>
//       </div>
//     </>
//   );
// }

// The Second Method 
// export default function Person(props) {
//     const name = props.name;
//     const age = props.age;
//     const email = props.email;
//     const text = props.text;
//     return (
//       <>
//         <div
//           style={{
//             backgroundColor: "lightgray",
//             width: "50%",
//             margin: "10px auto",
//             padding: "10px",
//           }}
//         >
//           <h1>{name}</h1>
//           <h3>{age}</h3>
//           <h4>{email}</h4>
//           <hr></hr>
//           <p>{text}</p>
//         </div>
//       </>
//     );
//   }

// The Third Method 
export default function Person({name  ,age ,email ,text="No Text", children }) {
    return (
      <>
        <div
          style={{
            backgroundColor: "lightgray",
            width: "50%",
            margin: "10px auto",
            padding: "10px",
          }}
        >
          <h1>{name}</h1>
          <h3>{age}</h3>
          <h4>{email}</h4>
          <hr></hr>
          <p>{text}</p>
          <p>{children}</p>
        </div>
      </>
    );
  }
