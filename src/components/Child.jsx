import React from "react";
function Child(props) {
const containerStyle = {
backgroundColor: "#464E47",
padding: "20px",
border: "1px solid #ccc",
borderRadius: "5px",
};
const headerStyle = {
color: "#F46036",
};
const inputStyle = {
padding: "5px",
border: "5px solid #F46036c",
};
return (
<div style={containerStyle}>
<h2 style={headerStyle}>I'm the child page</h2>
<p style={{ color: "#F46036", fontWeight: "bold" }}>
Receive from parent by props: <br />
<span style={{ color: "#CCFCCB" }}>
</span>
</p>
<p style={{ color: "#F46036", fontWeight: "bold" }}>
{props.title}
</p>
<input style={inputStyle} onChange={(e) => props.ctitle(e.target.value)}/>
</div>
);
}
export default Child;