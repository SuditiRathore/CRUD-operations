import "./App.css"; 

function App() { 
	return ( 
		<div className="App"> 
			<h1>Form in React</h1> 
			<fieldset> 
				<form action="#" method="get"> 
					<label for="firstname">First Name*</label> 
					<input 
						type="text"
						name="firstname"
						id="firstname"
						placeholder="Enter First Name"
						required 
					/> 
					<br /><br /> 
					
					<label for="email">Enter Email* </label> 
					<input 
						type="email"
						name="email"
						id="email"
						placeholder="Enter email"
						required 
					/> 
					<br /><br /> 
					
					<button type="submit" value="Submit"> 
						Submit 
					</button> 
				</form> 
			</fieldset> 
		</div> 
	); 
} 

export default App;
