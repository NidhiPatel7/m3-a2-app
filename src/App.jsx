import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            harvests:[
                {
                    id:1,
                    name:'project1',
                    description:'project1 description',
                },
                {
                    id:2,
                    name:'project2',
                    description:'project2 description',
                },
            ]
        }
    }
    

    render()
    {
        return(
    <div class="app">
            <div className="view color1 active">

                <div className="user">
                    <img className="dan" src="boy.png" alt=""/>
                    <div className="user-info">
                            <h2 className="name">Dan Mill - Trungs work</h2>
                            <h2 className="location">Parnell</h2>
                            <h2 className="location">Epsom</h2>
                    </div>
                    
                </div>
                <div className="main">
                    <h3>Dan's Plants</h3>
                    <div className="card plant">
                    <img className="card-img-top" src="plant.jpg" alt="Card image cap" />
                    <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h4 className="card-location">Location</h4>
                        <p className="card-text">Some quick example text to build on the card title</p>
                        <p>
                            <i className="fas fa-heart"></i>
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </p>
                    
                    </div>
                    </div>

                </div>
		</div>
		<div className="view color2">
			<div className="header"><i className="fas fa-times"></i></div>
			<div className="main">
				<h3>Add a plant</h3>
				<form>
				  <div className="form-group">
				    <label for="name-input">Name</label>
				    <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter plant name"/>
				  </div>
				  <div className="form-group">
				    <label for="name-input">Description</label>
				    <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter plant description"/>
				  </div>

				  <div className="form-group">
				    <label for="name-input">Photo</label>
				    <input type="text" className="form-control" name="photo-input" id="photo-input" value="plant.jpg"/>
				  </div>

				  <div className="form-group">
				    <label for="type-input">Type</label>
				    <select className="form-control" name="type-input" id="type-input">
				      <option value="1">Fruit</option>
				      <option value="2">Veges</option>
							<option value="3">Herbs</option>
							<option value="4">Flowers</option>
							<option value="5">Misc</option>
				    </select>
				  </div>

				  <button type="submit" className="btn btn-primary">Add</button>
				</form>
			</div>
		</div>
		<div className="view color3">
			<div className="header"><i className="fas fa-times"></i></div>
			<div className="main">
				<h2>Update plants</h2>
			
			</div>
		</div>
		<div className="view color4">
			<div className="header"><i className="fas fa-times"></i></div>
			<div className="main">
				<h3>Login</h3>
				<form>
				  <div className="form-group">
				    <label for="name-input">Username</label>
				    <input type="text" className="form-control" nam="username-input" id="username-input" placeholder="Enter username"/>
				  </div>

				  <div className="form-group">
				    <label for="name-input">Password</label>
				    <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Enter password"/>
				  </div>
				  <button type="submit" className="btn btn-primary">Login</button>
				</form>
			</div>
		</div>
		<div className="view color5">
			<div className="header"><i className="fas fa-times"></i></div>
			<div className="main">
				<h3>Signup</h3>
				<form>
				  <div className="form-group">
				    <label for="name-input">Username</label>
				    <input type="text" className="form-control" name="username-input" id="username-input" placeholder="Enter username"/>
				  </div>

				  <div className="form-group">
				    <label for="name-input">Password</label>
				    <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Enter password"/>
				  </div>

				  <div className="form-group">
				    <label for="name-input">Email</label>
				    <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Enter email"/>
				  </div>

				  <div className="form-group">
				    <label for="name-input">Intro</label>
				    <input type="text" className="form-control" name="intro-input" id="intro-input" placeholder="Enter introduction"/>
				  </div>

				  <button type="submit" className="btn btn-primary">Join</button>
				</form>
			</div>
		</div>
		<div className="view color0">
			<div className="header"><i className="fas fa-times"></i></div>
			<div className="main">
				<ul className="menu">
					<li><a class="color1" href="">plants</a></li>
					<li><a class="color2" href="">Add a plant</a></li>
					<li><a class="color4" href="">Login</a></li>
					<li><a class="color5" href="">Signup</a></li>
				</ul>
			</div>
		</div>

		<div className="footer">
			<i><img class="add" src="plus.png" alt=""/></i>
		</div>
</div>
        )
    }
}

export default App;
