import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
if (!isLoggedIn) {
return <Redirect to="/login" />;
}

return (
<div>
<h1>Welcome to my website!</h1>
<p>You are logged in and can see this content.</p>
</div>
);
}

export default Home;








