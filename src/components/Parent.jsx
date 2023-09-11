import React, { useState } from 'react'
import Child from './Child';

const Parent = (props) => {
  const containerStyle = {
    backgroundColor: "#CCFCCB",
    height: "100vh",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    };
    const [Title, setTitle] = useState("");
    const [ChildTitle, setChildTitle] = useState("");
  return (
    <div style={containerStyle}>
<h2 style={{ color: "#464E47" }}>I'm the parent page</h2>
<p style={{ color: "#464E47", fontWeight: "bold" }}>
Receive from child:
<br /> <span style={{ color: "#F46036" }}></span>
</p>
<p style={{ color: "#464E47", fontWeight: "bold" }}>
{ChildTitle}
</p>
<input style={{ padding: "5px", border: "1px solid " }} onChange={(e) => setTitle(e.target.value)}/>
<Child title={Title} ctitle={setChildTitle}/>
</div>
  )
}

export default Parent