import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import View from "./View";
import axios from 'axios';


import '../styles/addRecipe.css';

const AddRecipe = ({ formHandler  }) => {
    const [note, setNote] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        role: "",
        message: "",
      });

   
    const navigate = useNavigate();

    const [addInput, setAddInput] = useState([{ quantity: '', ingredient: '' }]);
    const [countryData, setCountryData] = useState([]);
    const [addRecipe, setAddRecipe] = useState({
        id: '',
        name: '',
        author: '',
        country: '',
        flag: '',
        description:'',
        image: '',
        ingredients: [],
        instructions: '',
    })
    
    useEffect(() => {
            
        axios.get('https://restcountries.com/v3.1/all')
            .then((res) => { 
                let countriesArr = [];
                res.data.map((a) => countriesArr.push(a.name.common));
                countriesArr.sort();
                setCountryData(countriesArr);
            });
    }, []);




    const addHandler = (e) => {
        e.preventDefault();
        setAddInput([...addInput,{ quantity: '', ingredient: '' } 
        ])
        return [].push.call( ...e);
    ;}


    const newIngredient = (e, index) => {
        let ingredList = [...addInput];
        ingredList[index][e.target.name] = e.target.value;
        setAddInput(ingredList);
        setAddRecipe({ ...addRecipe, ingredients: addInput })
        return [].push.call(this, ...addInput);

    }
   
    const removeIngredients = () => {

        addInput.pop();
        setAddRecipe({ ...addRecipe, ingredients: addInput });

        return [].pop.call();
    }

    const changeHandler = (e) => {
        setAddRecipe({ ...addRecipe,  [e.target.name]: e.target.value })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3001/recipes', addRecipe);
        e.target.reset();
        navigate('/browserecipes');
    };


    return (
        <div className='wrapper'> 
        <div className='viewZone'>
            <View   {...addRecipe}/>
        </div>
    
        <div className='form-cont'>
            <h3> NEW RECIPE </h3>

        <form onChange={formHandler}  onSubmit={submitHandler}>

        <div>
            <label htmlFor="name">Naming</label>
            <input id="name"  type="text" name="name" onChange={changeHandler}/>
        </div>

        <div>
            <label htmlFor="author">Cooking Time</label>
            <input  id="author" type="text" name="author" onChange={changeHandler}/>
        </div> 

        <div>
            <label htmlFor="country">Country</label>
            <select id="country"  name="country" defaultValue={"choice"} onChange={changeHandler}>
            <option value="choice" disabled={true}>Choose a country</option>
            {countryData.map((c) => {
            return ( <option value={c} key={c}>{c}</option>);
            })}</select>
        </div>

        <div>
            <label htmlFor="description">Description</label>
            <textarea id="description"  type="text" name="description" onChange={changeHandler}></textarea>
        </div>

        <div>
            <label htmlFor="image">Image Link</label>
            <input id="image"  type="text" name="image" onChange={changeHandler}/>
        </div>

        <label htmlFor="ingredients">Ingredients</label>


        {addInput.map((ingredient, index) => (
            <div key={index} className='row'>
            <div className='input1'>
            <label htmlFor="quantity">Quantity</label>
                 <input  id="quantity"  type="text" name="quantity" value={ingredient.quantity} onChange={(e) => newIngredient(e, index)} />
            </div>
         
            <div className='input2'>
            <label htmlFor="ingredient">Ingredient</label>
                <input id="ingredient" type="text" name="ingredient" value={ingredient.ingredient} onChange={(e) => newIngredient(e, index)} />
            </div>
            <div>

            {/* remove ingredient */}
                 <div className="delete"
                  onClick={() => {
                    removeIngredients(); 
                  }}
                  >❌</div>
            </div>

        </div>))}  
        
            
        <button class="submit2" onClick={addHandler}>ADD</button>

        <div>
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions"  type="text" name="instructions" onChange={changeHandler}></textarea>
        </div> 

        <button type='submit' class="submit2" id="start" > SUBMIT </button>



        </form>
        </div>
        </div>

    
    );
};

export default AddRecipe;